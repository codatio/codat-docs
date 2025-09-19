#!/usr/bin/env python3

from typing import Tuple

import click
from code_finder import CodeFinder
from code_checker import CodeChecker


@click.group()
def cli() -> None:
    """Code utilities for extracting and checking code snippets from Codat documentation."""
    pass


@cli.command()
@click.option('--languages', '-l', 
              multiple=True, 
              help='Programming languages to extract (can be specified multiple times)')
@click.option('--exclude', '-x',
              multiple=True,
              help='Programming languages to exclude (can be specified multiple times)')
def extract(languages: Tuple[str, ...], exclude: Tuple[str, ...]) -> None:
    """Extract code snippets from markdown files in the docs directory."""
    
    # Convert languages tuple to set if provided, otherwise use defaults
    target_languages = set(languages) if languages else None
    deprecated_languages = set(exclude) if exclude else None
    
    finder = CodeFinder(target_languages=target_languages, deprecated_languages=deprecated_languages)
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
