#!/usr/bin/env python3

import os
import yaml
import json
from datetime import datetime
from git import Repo
from pathlib import Path

def load_yaml_file(file_path):
    with open(file_path, 'r') as f:
        return yaml.safe_load(f)

def load_json_file(file_path):
    with open(file_path, 'r') as f:
        return json.load(f)

def get_last_run_commit():
    # This would ideally be stored in a file or database
    # For now, we'll use a simple file in the .github directory
    last_run_file = Path('.github/last_oas_check')
    if last_run_file.exists():
        return last_run_file.read_text().strip()
    return None

def save_last_run_commit(commit):
    last_run_file = Path('.github/last_oas_check')
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
    
    # Initialize the OAS repo
    oas_path = os.environ.get('OAS_PATH', 'oas')
    oas_repo = Repo(oas_path)
    current_commit = oas_repo.head.commit.hexsha
    
    if last_commit == current_commit:
        print("No new commits since last run")
        print("::set-output name=has_changes::false")
        return
    
    # Get the list of changed files
    changed_files = []
    if last_commit is None:
        # If this is the first run, get all files in the current commit
        tree = oas_repo.head.commit.tree
        changed_files = [item.path for item in tree.traverse() if item.type == 'blob']
    else:
        # Otherwise, get files changed between last_commit and current_commit
        for commit in oas_repo.iter_commits(f"{last_commit}..{current_commit}"):
            changed_files.extend(commit.stats.files.keys())
    
    # Filter for OAS files
    oas_files = [f for f in changed_files if f.endswith(('.yaml', '.yml', '.json'))]
    
    if not oas_files:
        print("No OAS files changed")
        print("::set-output name=has_changes::false")
        return
    
    # Process each changed OAS file
    for file_path in oas_files:
        api_name = Path(file_path).stem
        
        # Load old and new versions
        try:
            if file_path.endswith(('.yaml', '.yml')):
                old_spec = load_yaml_file(f"oas/{file_path}")
                new_spec = load_yaml_file(f"oas/{file_path}")
            else:
                old_spec = load_json_file(f"oas/{file_path}")
                new_spec = load_json_file(f"oas/{file_path}")
            
            changes = analyze_changes(old_spec, new_spec)
            
            if is_significant_change(changes):
                filename, content = generate_blog_post(changes, api_name)
                
                # Write the blog post
                with open(f"codat-docs/{filename}", 'w') as f:
                    f.write(content)
                
                print(f"Created blog post: {filename}")
                print("::set-output name=has_changes::true")
            else:
                print(f"No significant changes in {api_name}")
                print("::set-output name=has_changes::false")
                
        except Exception as e:
            print(f"Error processing {file_path}: {str(e)}")
            continue
    
    # Save the current commit as the last run
    save_last_run_commit(current_commit)

if __name__ == "__main__":
    main() 