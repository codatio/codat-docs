# Codat Documentation Code Utils

Utilities for extracting and managing code snippets from Codat documentation.
Currently consists of a single script `extract_code_from_files.py` which will find every markdown file
in the docs directory containing a code snippet. It will then extract those snippets into files under a `temp/` directory. 


## Usage

```

# Run the code extractor

uv run extract_code_from_files.py

## Development

This project uses [uv](https://astral.sh/uv) for dependency management.

```bash
# Install dependencies
uv sync

# Install development dependencies
uv sync --extra dev
```

## Structure

- `code_finder.py` - Main CodeFinder class
- `extract_code_from_files.py` - Entrypoint script. 
- `temp/` - Generated code snippets (gitignored)
- `files_with_code.txt` - List of files containing code (gitignored)
