from dataclasses import dataclass
from typing import List, Dict, Pattern
import re
import json


@dataclass
class LanguageConfig:
    """Configuration for a specific programming language."""

    import_patterns: List[str]
    comment_patterns: List[str]
    extension: str

    def get_compiled_import_patterns(self) -> List[Pattern[str]]:
        """Get compiled regex patterns for import detection."""
        return [re.compile(pattern, re.IGNORECASE) for pattern in self.import_patterns]

    def get_compiled_comment_patterns(self) -> List[Pattern[str]]:
        """Get compiled regex patterns for comment detection."""
        return [re.compile(pattern) for pattern in self.comment_patterns]


@dataclass
class CodeFinderConfig:
    def __init__(self, path_to_config: str | None):
        config_file_name = (
            "code_defaults.json" if path_to_config is None else path_to_config
        )
        with open(config_file_name, "r") as config_file:
            self.loaded_config = json.load(config_file)

    def get_language_config(self, language: str) -> LanguageConfig:
        return LanguageConfig(**self.loaded_config.get(language.lower()))

    def get_all_languages(self) -> List[str]:
        """Get list of all supported language names."""
        return [k for k in self.loaded_config.keys()]

    def get_language_extensions(self) -> Dict[str, str]:
        """Get mapping of language names to file extensions."""
        return {k: self.loaded_config[k]["extension"] for k in self.loaded_config}
