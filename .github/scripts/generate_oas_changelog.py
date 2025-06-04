#!/usr/bin/env python3

import os
import yaml
import json
from datetime import datetime, timedelta
from pathlib import Path

def load_yaml_file(file_path):
    with open(file_path, 'r') as f:
        return yaml.safe_load(f)

def load_json_file(file_path):
    with open(file_path, 'r') as f:
        return json.load(f)

def get_last_run_commit():
    # Get the script's directory
    script_dir = Path(__file__).parent.parent
    last_run_file = script_dir / 'last_oas_check'
    if last_run_file.exists():
        return last_run_file.read_text().strip()
    
    # If no last run file exists, get a commit from one month ago
    from git import Repo
    
    # Try to find the repository root
    repo_path = Path('.')
    if not (repo_path / '.git').exists():
        # If we're in a subdirectory (like in GitHub Actions), try parent
        repo_path = repo_path.parent
        if not (repo_path / '.git').exists():
            raise Exception("Could not find Git repository")
    
    repo = Repo(repo_path)
    
    # Calculate the date one month ago with timezone awareness
    from datetime import timezone
    one_month_ago = datetime.now(timezone.utc) - timedelta(days=30)
    
    # Find the first commit before one month ago
    for commit in repo.iter_commits():
        if commit.committed_datetime < one_month_ago:
            return commit.hexsha
    
    # If no commit is found before one month ago, return the first commit
    return next(repo.iter_commits()).hexsha

def save_last_run_commit(commit):
    # Get the script's directory
    script_dir = Path(__file__).parent.parent
    last_run_file = script_dir / 'last_oas_check'
    last_run_file.parent.mkdir(parents=True, exist_ok=True)
    last_run_file.write_text(commit)

def analyze_changes(old_spec, new_spec):
    changes = {
        'endpoints_added': [],
        'endpoints_removed': [],
        'endpoints_modified': [],
        'models_added': [],
        'models_removed': [],
        'models_modified': []
    }
    
    # Compare paths (endpoints)
    old_paths = set(old_spec.get('paths', {}).keys())
    new_paths = set(new_spec.get('paths', {}).keys())
    
    changes['endpoints_added'] = list(new_paths - old_paths)
    changes['endpoints_removed'] = list(old_paths - new_paths)
    
    # Compare schemas (models)
    old_schemas = set(old_spec.get('components', {}).get('schemas', {}).keys())
    new_schemas = set(new_spec.get('components', {}).get('schemas', {}).keys())
    
    changes['models_added'] = list(new_schemas - old_schemas)
    changes['models_removed'] = list(old_schemas - new_schemas)
    
    return changes

def is_significant_change(changes):
    # Define what constitutes a significant change
    significant = False
    
    # Check if any endpoints were added/removed/modified
    if (changes['endpoints_added'] or 
        changes['endpoints_removed'] or 
        changes['endpoints_modified']):
        significant = True
    
    # Check if any models were added/removed
    if (changes['models_added'] or 
        changes['models_removed']):
        significant = True
    
    return significant

def generate_blog_post(changes, api_name):
    today = datetime.now()
    filename = f"blog/{today.strftime('%y%m%d')}-oas-update-{api_name.lower().replace(' ', '-')}.md"
    
    content = f"""---
title: "OAS Update: {api_name}"
date: {today.strftime('%Y-%m-%d')}
author: "Codat Bot"
---

# OAS Update: {api_name}

This update summarizes the changes made to the {api_name} OpenAPI Specification.

"""

    if changes['endpoints_added']:
        content += "\n## New Endpoints\n\n"
        for endpoint in changes['endpoints_added']:
            content += f"- `{endpoint}`\n"

    if changes['endpoints_removed']:
        content += "\n## Removed Endpoints\n\n"
        for endpoint in changes['endpoints_removed']:
            content += f"- `{endpoint}`\n"

    if changes['endpoints_modified']:
        content += "\n## Modified Endpoints\n\n"
        for endpoint in changes['endpoints_modified']:
            content += f"- `{endpoint}`\n"

    if changes['models_added']:
        content += "\n## New Models\n\n"
        for model in changes['models_added']:
            content += f"- `{model}`\n"

    if changes['models_removed']:
        content += "\n## Removed Models\n\n"
        for model in changes['models_removed']:
            content += f"- `{model}`\n"

    if changes['models_modified']:
        content += "\n## Modified Models\n\n"
        for model in changes['models_modified']:
            content += f"- `{model}`\n"

    return filename, content

def main():
    # Get the last run commit
    last_commit = get_last_run_commit()
    
    # Use the local static/oas directory
    oas_path = Path('static/oas')
    if not oas_path.exists():
        print("OAS directory not found at static/oas")
        with open(os.environ['GITHUB_OUTPUT'], 'a') as f:
            f.write('has_changes=false\n')
        return
    
    # Get current git commit hash for tracking
    from git import Repo
    repo = Repo('.')
    current_commit = repo.head.commit.hexsha
    
    if last_commit == current_commit:
        print("No new commits since last run")
        with open(os.environ['GITHUB_OUTPUT'], 'a') as f:
            f.write('has_changes=false\n')
        return
    
    # Get the list of changed files
    changed_files = []
    if last_commit is None:
        # If this is the first run, get all files in the current commit
        tree = repo.head.commit.tree
        changed_files = [item.path for item in tree.traverse() if item.type == 'blob' and str(item.path).startswith('static/oas/')]
    else:
        # Otherwise, get files changed between last_commit and current_commit
        for commit in repo.iter_commits(f"{last_commit}..{current_commit}"):
            changed_files.extend([f for f in commit.stats.files.keys() if f.startswith('static/oas/')])
    
    # Filter for OAS files
    oas_files = [f for f in changed_files if f.endswith(('.yaml', '.yml', '.json'))]
    
    if not oas_files:
        print("No OAS files changed")
        with open(os.environ['GITHUB_OUTPUT'], 'a') as f:
            f.write('has_changes=false\n')
        return
    
    # Process each changed OAS file
    for file_path in oas_files:
        api_name = Path(file_path).stem
        
        # Load old and new versions
        try:
            # Get the old version from the last commit
            try:
                old_content = repo.git.show(f"{last_commit}:{file_path}")
                if file_path.endswith(('.yaml', '.yml')):
                    old_spec = yaml.safe_load(old_content)
                else:
                    old_spec = json.loads(old_content)
            except Exception:
                # If file doesn't exist in old commit, treat it as an empty spec
                old_spec = {'paths': {}, 'components': {'schemas': {}}}
            
            # Load new version
            if file_path.endswith(('.yaml', '.yml')):
                new_spec = load_yaml_file(file_path)
            else:
                new_spec = load_json_file(file_path)
            
            changes = analyze_changes(old_spec, new_spec)
            
            if is_significant_change(changes):
                filename, content = generate_blog_post(changes, api_name)
                
                # Write the blog post
                blog_path = Path('blog')
                blog_path.mkdir(exist_ok=True)
                with open(blog_path / filename, 'w') as f:
                    f.write(content)
                
                print(f"Created blog post: {filename}")
                with open(os.environ['GITHUB_OUTPUT'], 'a') as f:
                    f.write('has_changes=true\n')
            else:
                print(f"No significant changes in {api_name}")
                with open(os.environ['GITHUB_OUTPUT'], 'a') as f:
                    f.write('has_changes=false\n')
                
        except Exception as e:
            print(f"Error processing {file_path}: {str(e)}")
            continue
    
    # Save the current commit as the last run
    save_last_run_commit(current_commit)

if __name__ == "__main__":
    main() 