from pathlib import Path
from .codat_code_config_models import DEFAULT_CONFIG, CodeFinderConfig
from .file_operator import FileOperator


class CodeFinder:
    
    def __init__(self, output_file_name: str = "files_with_code.txt", 
                 target_language: str = None, config: CodeFinderConfig = DEFAULT_CONFIG,
                 file_operator: FileOperator = None):
        self.matching_files = []
        self.config = config
        self.file_operator = file_operator if file_operator else FileOperator()
        
        # Set target languages based on input
        if target_language:
            self.target_languages = {target_language.lower()}
        else:
            self.target_languages = set(self.config.get_all_languages())

        self.script_dir = Path(__file__).resolve().parent
        self.code_utils_dir = self.script_dir.parent  # code_utils directory (where main.py is)
        self.temp_dir = self.code_utils_dir / 'temp'
        self.project_root = self.script_dir.parent.parent
        self.docs_path = self.project_root / 'docs'
        self.output_file = self.code_utils_dir / output_file_name
        
    def find_files_with_code(self) -> None:
        """Find markdown files in docs directory that contain code snippets with specified languages."""
        self.matching_files = self.file_operator.find_markdown_files_with_code(
            root_path_for_all_docs=self.docs_path,
            target_languages=self.target_languages,
            config=self.config,
            output_file=self.output_file
        )
        
    def extract_code(self) -> None:
        """
        Extract code snippets from matching files and save them to temp directory.
        Creates subdirectories for each programming language with complete/incomplete folders.
        """
        self.file_operator.extract_code(
            matching_files=self.matching_files,
            target_languages=self.target_languages,
            temp_dir=self.temp_dir,
            root_path_for_all_docs=self.docs_path,
            config=self.config
        )