from dataclasses import dataclass
from typing import Dict
from pathlib import Path


@dataclass
class LanguageDockerConfig:
    """Configuration for a specific programming language's Docker setup."""
    docker_directory: str
    validation_command: str
    working_directory: str = ""
    
    def get_docker_path(self, base_dir: Path) -> Path:
        """Get the full path to the Docker directory for this language."""
        return base_dir / self.docker_directory


@dataclass 
class CodeCheckerConfig:
    """Complete configuration for the CodeChecker Docker utility."""
    python: LanguageDockerConfig
    javascript: LanguageDockerConfig
    csharp: LanguageDockerConfig
    container_name: str = "code-snippets:latest"
    
    def get_language_config(self, language: str) -> LanguageDockerConfig:
        """Get Docker configuration for a specific language."""
        language_map = {
            'python': self.python,
            'javascript': self.javascript, 
            'csharp': self.csharp
        }
        return language_map.get(language.lower())
    
    def get_all_languages(self) -> list[str]:
        """Get list of all supported language names."""
        return ['python', 'javascript', 'csharp']


# Default configuration instance based on current CodeChecker implementation
DEFAULT_CONFIG = CodeCheckerConfig(
    python=LanguageDockerConfig(
        docker_directory="docker/python",
        validation_command="bash -c 'cd snippets && pyright .'",
        working_directory="python/snippets"
    ),
    javascript=LanguageDockerConfig(
        docker_directory="docker/javascript", 
        validation_command="tsc --noEmit",
        working_directory="javascript"
    ),
    csharp=LanguageDockerConfig(
        docker_directory="docker/csharp",
        validation_command="bash -c 'cd /workspace/code-snippets/csharp && ./validate-csharp-snippets.sh'",
        working_directory="/workspace/code-snippets/csharp"
    ),
    container_name="code-snippets"
)
