#!/usr/bin/env python3
"""
Simple test script to validate extracted code snippets using CodeChecker.
"""

from code_checker import CodeChecker


   
if __name__ == "__main__":
    checker = CodeChecker()
    print(checker.check_complete_snippets())
