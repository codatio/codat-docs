from dataclasses import dataclass
from typing import List, Dict, Pattern
import re


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
    """Complete configuration for the CodeFinder utility."""
    python: LanguageConfig
    javascript: LanguageConfig
    csharp: LanguageConfig
    
    def get_language_config(self, language: str) -> LanguageConfig:
        """Get configuration for a specific language."""
        language_map = {
            'python': self.python,
            'javascript': self.javascript, 
            'csharp': self.csharp
        }
        return language_map.get(language.lower())
    
    def get_all_languages(self) -> List[str]:
        """Get list of all supported language names."""
        return ['python', 'javascript', 'csharp']
    
    def get_language_extensions(self) -> Dict[str, str]:
        """Get mapping of language names to file extensions."""
        return {
            'python': self.python.extension,
            'javascript': self.javascript.extension,
            'csharp': self.csharp.extension
        }


# Default configuration instance
DEFAULT_CONFIG = CodeFinderConfig(
    python=LanguageConfig(
        import_patterns=[r'^import\s+', r'^from\s+.+\s+import\s+'],
        comment_patterns=[r'^\s*#'],
        extension='.py'
    ),
    javascript=LanguageConfig(
        import_patterns=[r'^import\s+', r'^const\s+.+=\s+require\(', r'^require\('],
        comment_patterns=[r'^\s*//', r'^\s*/\*'],
        extension='.ts'
    ),
    csharp=LanguageConfig(
        import_patterns=[r'^using\s+'],
        comment_patterns=[r'^\s*//', r'^\s*/\*'],
        extension='.cs'
    )
)
