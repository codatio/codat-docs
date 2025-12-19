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

# Run compiler checks on extracted code, (can only be done on lang at a time)
uv run code-util check -l programming-language

# Get help in the cli
uv run code-util --help
```


## Structure

- `main.py` - Entrypoint for the CLI. 
- `code_defaults.json` - holds the configuration for programming languages. The behaviour of the code finder in relation to different
    languages conventions is defined here. Can be overriden to a different file
- `code_finder/` - module for code relating to the CodeFinder class a.k.a the functionality to scan through markdown documents.
- `code_checker/` - module for code relating to the CodeChecker class a.k.a the functionality to build containers and run commands in them.
- `code_checker/docker/` - docker files, scripts and config that the containers use.
- `temp/` - Generated code snippets (gitignored).
- `files_with_code.txt` - List of files containing code (gitignored).

## Dependancies

- [Click](https://click.palletsprojects.com/en/stable/) - Framework for building CLIs.
- [Docker SDK For Python](https://docker-py.readthedocs.io/en/stable/) - Library for interacting with the Docker API. 
- [Pytest](https://docs.pytest.org/en/stable/index.html) - Python Unit testing Framework.
- [Pyfakefs](https://pytest-pyfakefs.readthedocs.io/en/latest/) - Python utility for faking a filesystem during testing.

## Notes

 - Javascript container uses a private npm package. Please set PAT_TOKEN and CODAT_EMAIL env vars in order to build.
 - If the default configs are overwritten, the config json file should follow this format: 
 ```json
 {
  "language_name": {
    "import_patterns": [
      "regex statement for detecting imports",
    ],
    "comment_patterns": [
      "regex statement for detecting comments"
    ],
    "extension": ".fileExstion"
  }
 ```

