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
    
    # If no last run file exists, get a commit from three months ago
    from git import Repo
    
    # Try to find the repository root
    repo_path = Path('.')
    if not (repo_path / '.git').exists():
        # If we're in a subdirectory (like in GitHub Actions), try parent
        repo_path = repo_path.parent
        if not (repo_path / '.git').exists():
            # If we're in codat-docs/codat-docs, go up one more level
            repo_path = repo_path.parent
            if not (repo_path / '.git').exists():
                raise Exception("Could not find Git repository")
    
    print(f"Using repository at: {repo_path.absolute()}")
    repo = Repo(repo_path)
    
    # Calculate the date three months ago with timezone awareness
    from datetime import timezone
    now = datetime.now(timezone.utc)
    print(f"Current system time: {now}")
    three_months_ago = now - timedelta(days=90)
    print(f"Looking for commits before: {three_months_ago}")
    
    # Get all commits and sort them by date
    # Use git log to get the full history
    commits = []
    try:
        # First try to get all commits
        for commit in repo.iter_commits('--all'):
            commits.append(commit)
    except Exception as e:
        print(f"Error getting commits with --all: {e}")
        # If that fails, try getting commits from the current branch
        for commit in repo.iter_commits():
            commits.append(commit)
    
    commits.sort(key=lambda x: x.committed_datetime, reverse=True)
    
    if not commits:
        raise Exception("No commits found in repository")
    
    print(f"Total number of commits found: {len(commits)}")
    print(f"Most recent commit date: {commits[0].committed_datetime}")
    print(f"Oldest commit date: {commits[-1].committed_datetime}")
    
    # Find the first commit before three months ago
    for commit in commits:
        print(f"Checking commit {commit.hexsha} from {commit.committed_datetime}")
        if commit.committed_datetime < three_months_ago:
            print(f"Found commit from before three months ago: {commit.hexsha}")
            return commit.hexsha
    
    # If no commit is found before three months ago, use the oldest commit
    oldest_commit = commits[-1]
    print(f"No commits found before three months ago, using oldest commit: {oldest_commit.hexsha}")
    return oldest_commit.hexsha

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

def generate_blog_post(all_changes):
    today = datetime.now()
    filename = f"{today.strftime('%y%m%d')}-oas-updates.md"
    
    content = f"""---
title: "OpenAPI Specification Updates"
date: {today.strftime('%Y-%m-%d')}
author: "Codat Bot"
---

# OpenAPI Specification Updates

This update summarizes the changes made to our OpenAPI Specifications.

"""

    for api_name, changes in all_changes.items():
        content += f"\n## {api_name}\n\n"

        if changes['endpoints_added']:
            content += "\n### New Endpoints\n\n"
            for endpoint in changes['endpoints_added']:
                content += f"- `{endpoint}`\n"

        if changes['endpoints_removed']:
            content += "\n### Removed Endpoints\n\n"
            for endpoint in changes['endpoints_removed']:
                content += f"- `{endpoint}`\n"

        if changes['endpoints_modified']:
            content += "\n### Modified Endpoints\n\n"
            for endpoint in changes['endpoints_modified']:
                content += f"- `{endpoint}`\n"

        if changes['models_added']:
            content += "\n### New Models\n\n"
            for model in changes['models_added']:
                content += f"- `{model}`\n"

        if changes['models_removed']:
            content += "\n### Removed Models\n\n"
            for model in changes['models_removed']:
                content += f"- `{model}`\n"

        if changes['models_modified']:
            content += "\n### Modified Models\n\n"
            for model in changes['models_modified']:
                content += f"- `{model}`\n"

    return filename, content

def main():
    # Get the last run commit
    last_commit = get_last_run_commit()
    print(f"Last run commit: {last_commit}")
    
    # Initialize changes flag
    has_changes = False
    
    # Use the local static/oas directory
    oas_path = Path('static/oas')
    if not oas_path.exists():
        print("OAS directory not found at static/oas")
        with open('output.txt', 'w') as f:
            f.write('has_changes=false\n')
        return
    
    # Get current git commit hash for tracking
    from git import Repo
    repo = Repo('.')
    current_commit = repo.head.commit.hexsha
    print(f"Current commit: {current_commit}")
    
    if last_commit == current_commit:
        print("No new commits since last run")
        with open('output.txt', 'w') as f:
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
        with open('output.txt', 'w') as f:
            f.write('has_changes=false\n')
        return
    
    # Store all changes
    all_changes = {}
    
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
                all_changes[api_name] = changes
                has_changes = True
            else:
                print(f"No significant changes in {api_name}")
                
        except Exception as e:
            print(f"Error processing {file_path}: {str(e)}")
            continue
    
    # Generate a single blog post if there are any changes
    if all_changes:
        filename, content = generate_blog_post(all_changes)
        
        # Write the blog post
        blog_path = Path('blog')
        blog_path.mkdir(exist_ok=True)
        with open(blog_path / filename, 'w') as f:
            f.write(content)
        
        print(f"Created blog post: {filename}")
    
    # Save the current commit as the last run
    save_last_run_commit(current_commit)
    
    # Write final output
    with open('output.txt', 'w') as f:
        f.write(f'has_changes={str(has_changes).lower()}\n')

if __name__ == "__main__":
    main() 