# Codat Documentation Code Utils

A CLI tool for extracting, managing and checking code snippets from Codat documentation.
Currently consists of two commands
- extract:  This will find every markdown file
in the docs directory containing a code snippet. It will then extract those snippets into files under a `temp/` directory.
- check: This will copy those files into a container with all nessecary Codat SDK dependancies and perform checks that the imports and code are correct and would build.

## Development
This project uses [uv](https://astral.sh/uv) for dependency management.

```bash
# Install dependencies
uv sync

# Install development dependencies
uv sync --extra dev
```

## Usage

```bash
# Run the code extractor
uv run code-util extract

# Run compiler checks on extracted code
uv run code-util check

# Get help in the cli
uv run code-util --help
```


## Structure

- `main.py` - Entrypoint for the CLI. 
- `code_finder.py` - CodeFinder class
- `code_checker.py` - CodeChecker class.
- `docker/` - docker files are different scripts and config the container uses.
- `temp/` - Generated code snippets (gitignored).
- `files_with_code.txt` - List of files containing code (gitignored).

## Dependancies

- [Click](https://click.palletsprojects.com/en/stable/) - Framework for building CLIs
- [Docker SDK For Python](https://docker-py.readthedocs.io/en/stable/) - Library for interacting with the Docker API. 

