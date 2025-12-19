#!/usr/bin/env python3

from typing import Optional
import click
from code_finder import CodeFinder
from code_checker.code_checker import CodeChecker


@click.group()
def cli() -> None:
    """Code utilities for extracting and checking code snippets from Codat documentation."""
    pass


@cli.command()
@click.option(
    "--language",
    "-l",
    type=str,
    help="Programming language to extract ( e.g python, javascript, csharp, etc). If not specified, extracts all languages defined in config.",
    multiple=True,
)
@click.option(
    "--file", "-f", type=str, help="Path to JSON file containing configuration override"
)
@click.option(
    "--output", "-o", type=str, help="Name of file to output extraction report to"
)
def extract(
    language: Optional[list[str]], file: Optional[str], output: Optional[str]
) -> None:
    """Extract code snippets from markdown files in the docs directory."""

    finder = CodeFinder(
        target_languages=language, config_override=file, output_file_name=output
    )
    finder.find_files_with_code()
    finder.extract_code()


@cli.command()
@click.option(
    "--language",
    "-l",
    type=click.Choice(["python", "javascript", "csharp"], case_sensitive=False),
    help="Programming language to check (python, javascript, csharp).",
    required=True,
)
def check(language: str) -> None:
    """Check and validate extracted code snippets for a specific language"""
    checker = CodeChecker(target_language=language)
    result = checker.check_complete_snippets()
    click.echo(result)


if __name__ == "__main__":
    cli()
