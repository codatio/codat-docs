#!/usr/bin/env python3

from typing import Optional
import click
from code_finder import CodeFinder
from code_checker import CodeChecker


@click.group()
def cli() -> None:
    """Code utilities for extracting and checking code snippets from Codat documentation."""
    pass


@cli.command()
@click.option('--language', '-l', 
              type=click.Choice(['python', 'javascript', 'csharp'], case_sensitive=False),
              help='Programming language to extract (python, javascript, csharp, or c#). If not specified, extracts all languages.')
def extract(language: Optional[str]) -> None:
    """Extract code snippets from markdown files in the docs directory."""
    
    
    finder = CodeFinder(target_language=language)
    finder.find_files_with_code()
    finder.extract_code()
    


@cli.command()
def check() -> None:
    """
        Check and validate extracted code snippets. Will currently only check if
        python, javascript and csharp directories are present.
    """
    checker = CodeChecker()
    result = checker.check_complete_snippets()
    click.echo(result)


if __name__ == '__main__':
    cli()
