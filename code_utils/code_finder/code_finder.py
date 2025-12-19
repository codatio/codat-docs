from pathlib import Path
from typing import Union
from .code_config import CodeFinderConfig
from .file_operator import FileOperator

DEFAULT_OUTPUT_FILE_NAME = "files_with_code.txt"


class CodeFinder:
    def __init__(
        self,
        output_file_name: str = None,
        target_languages: Union[str, list[str], tuple[str], set[str]] = None,
        config_override: str = None,
    ):
        self.output_file = (
            DEFAULT_OUTPUT_FILE_NAME if output_file_name is None else output_file_name
        )
        self.matching_files = []
        self.config = CodeFinderConfig(config_override)
        self.default_config_file_name = "code_defaults.json"

        # Set target languages based on input
        if target_languages:
            # Handle both single string and iterable of strings
            if isinstance(target_languages, str):
                self.target_languages = {target_languages.lower()}
            else:
                self.target_languages = {lang.lower() for lang in target_languages}
        else:
            self.target_languages = set(self.config.get_all_languages())

        # Fail fast if target languages are not in config
        for lang in self.target_languages:
            if lang not in self.config.get_all_languages():
                raise ValueError(
                    f"{lang} not specified in {config_override if config_override else self.default_config_file_name}"
                )

        self.script_dir = Path(__file__).resolve().parent
        self.code_utils_dir = (
            self.script_dir.parent
        )  # code_utils directory (where main.py is)
        self.temp_dir = self.code_utils_dir / "temp"
        self.project_root = self.script_dir.parent.parent
        self.docs_path = self.project_root / "docs"
        self.output_file = self.code_utils_dir / self.output_file

        self.file_operator = FileOperator()

    def find_files_with_code(self) -> None:
        """Find markdown files in docs directory that contain code snippets with specified languages."""
        self.matching_files = self.file_operator.find_markdown_files_with_code(
            root_path_for_all_docs=self.docs_path,
            target_languages=self.target_languages,
            config=self.config,
            output_file=self.output_file,
        )

    def extract_code(self) -> None:
        """
        Extract code snippets from matching files and save them to temp directory.
        Creates subdirectories for each programming language with complete/incomplete folders.
        """
        self.file_operator.extract_code(
            markdown_files_with_code_snippets=self.matching_files,
            target_languages=self.target_languages,
            temp_dir=self.temp_dir,
            root_path_for_all_docs=self.docs_path,
            config=self.config,
        )
