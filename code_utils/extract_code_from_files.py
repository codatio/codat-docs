#!/usr/bin/env python3
"""
Script to walk through the 'docs' directory and find markdown files with code snippets.
Looks for code blocks with specific programming languages: python, javascript, csharp, go.
Saves matching file paths to files_with_code.txt.
"""
from code_finder import CodeFinder

if __name__ == "__main__":
    finder = CodeFinder()
    finder.find_files_with_code()
    finder.extract_code()
