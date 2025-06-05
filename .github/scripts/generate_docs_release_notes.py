#!/usr/bin/env python3

import os
import sys
from datetime import datetime, timedelta
from git import Repo
from pathlib import Path

# Documentation directories to track
DOC_DIRS = [
    'docs/',
    'blog/',
    'guides/',
    'tutorials/'
]

# File extensions to track
DOC_EXTENSIONS = {
    '.md': 'Markdown',
    '.mdx': 'MDX',
    '.rst': 'reStructuredText',
    '.txt': 'Text'
}

def get_last_month():
    """Get the first and last day of the previous month."""
    today = datetime.now()
    if today.month == 1:
        last_month = today.replace(year=today.year - 1, month=12)
    else:
        last_month = today.replace(month=today.month - 1)
    
    first_day = last_month.replace(day=1)
    if last_month.month == 12:
        last_day = last_month.replace(year=last_month.year + 1, month=1, day=1) - timedelta(days=1)
    else:
        last_day = last_month.replace(month=last_month.month + 1, day=1) - timedelta(days=1)
    
    return first_day, last_day

def is_doc_file(file_path):
    """Check if the file is a documentation file we want to track."""
    return any(file_path.startswith(doc_dir) for doc_dir in DOC_DIRS) and \
           any(file_path.endswith(ext) for ext in DOC_EXTENSIONS.keys())

def get_file_type(file_path):
    """Get the type of documentation file."""
    ext = os.path.splitext(file_path)[1]
    return DOC_EXTENSIONS.get(ext, 'Unknown')

def generate_release_notes():
    """Generate release notes for documentation changes."""
    repo = Repo('.')
    first_day, last_day = get_last_month()
    
    # Get all commits from last month
    commits = list(repo.iter_commits(since=first_day, until=last_day))
    
    if not commits:
        print("has_changes=false")
        return
    
    # Track changes
    new_files = set()
    modified_files = set()
    deleted_files = set()
    
    for commit in commits:
        for diff in commit.diff(commit.parents[0] if commit.parents else None):
            file_path = diff.a_path if diff.a_path else diff.b_path
            
            if not is_doc_file(file_path):
                continue
                
            if diff.new_file:
                new_files.add(file_path)
            elif diff.deleted_file:
                deleted_files.add(file_path)
            else:
                modified_files.add(file_path)
    
    if not (new_files or modified_files or deleted_files):
        print("has_changes=false")
        return
    
    # Generate release notes
    release_notes = f"# Documentation Release Notes for {first_day.strftime('%B %Y')}\n\n"
    
    if new_files:
        release_notes += "## New Documentation\n\n"
        for file_path in sorted(new_files):
            file_type = get_file_type(file_path)
            release_notes += f"- Added new {file_type} file: `{file_path}`\n"
        release_notes += "\n"
    
    if modified_files:
        release_notes += "## Updated Documentation\n\n"
        for file_path in sorted(modified_files):
            file_type = get_file_type(file_path)
            release_notes += f"- Updated {file_type} file: `{file_path}`\n"
        release_notes += "\n"
    
    if deleted_files:
        release_notes += "## Removed Documentation\n\n"
        for file_path in sorted(deleted_files):
            file_type = get_file_type(file_path)
            release_notes += f"- Removed {file_type} file: `{file_path}`\n"
    
    # Write release notes to file
    output_dir = Path('blog')
    output_dir.mkdir(exist_ok=True)
    
    output_file = output_dir / f"docs-release-notes-{first_day.strftime('%Y-%m')}.md"
    with open(output_file, 'w') as f:
        f.write(release_notes)
    
    print("has_changes=true")
    print(f"output_file={output_file}")

if __name__ == '__main__':
    generate_release_notes() 