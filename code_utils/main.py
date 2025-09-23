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
def extract(languages: Tuple[str, ...]) -> None:
    """Extract code snippets from markdown files in the docs directory."""
    
    # Convert languages tuple to set if provided, otherwise use defaults
    target_languages = set(languages) if languages else None
    deprecated_languages = None #TO DO Implement functionality to remove languages
    
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


@cli.command()
@click.option('--limit', '-l', 
              default=10, 
              type=int,
              help='Maximum number of files to analyze per language (default: 10)')
@click.option('--languages', '-lang',
              multiple=True,
              help='Programming languages to analyze (can be specified multiple times). Available: python, typescript, csharp')
def check_incomplete(limit: int, languages: Tuple[str, ...]) -> None:
    """
        Check and validate incomplete code snippets. 
        Analyzes snippets that are missing imports or have incomplete structure.
        We will be using an LLM to do this, which is expensive so we will limit the number of files to analyze.
    """
    # Convert languages tuple to set if provided, otherwise use all languages
    target_languages = set(languages) if languages else None
    
    checker = CodeChecker()
    result = checker.check_incomplete_snippets(limit=limit, languages=target_languages)


if __name__ == '__main__':
    cli()
