# Codat Documentation Code Utils

Utilities for extracting and managing code snippets from Codat documentation.
Currently consists of two scripts `extract_code_from_files.py` & `check_extracted_code.py.  The former will find every markdown file
in the docs directory containing a code snippet. It will then extract those snippets into files under a `temp/` directory. 

The latter will copy those files into a container with all nessecary dependancies and perform checks that the imports and code are correct and would build.


## Usage

```

# Run the code extractor

uv run extract_code_from_files.py

# Run compiler checks on extracted code

uv run check_extracted_code.py

## Development

This project uses [uv](https://astral.sh/uv) for dependency management.

```bash
# Install dependencies
uv sync

# Install development dependencies
uv sync --extra dev
```

## Structure

- `code_finder.py` - CodeFinder class
- `extract_code_from_files.py` - Entrypoint script for code extraction. 
- `temp/` - Generated code snippets (gitignored).
- `files_with_code.txt` - List of files containing code (gitignored).
- `code_checker.py` - CodeChecker class.
- `check_extracted_code.py` - Entrypoint script for code checking.
- `docker/` - docker utils which enable the code snippets to be built with their dependacies and checked.
