"""
Code Checker for validating code snippets for a specified programming language.
This module builds and runs a Docker container to validate complete code snippets.
"""

import sys
from pathlib import Path
from typing import Dict, Optional

from .codat_code_checker_config_models import CodeCheckerConfig, DEFAULT_CONFIG
from .docker_operator import DockerOperator


class CodeChecker:
    """
    A class for validating code snippets by building and running validation commands
    in a Docker container for a specified programming language environment.
    """

    def __init__(self, target_language: str, config: Optional[CodeCheckerConfig] = None, base_dir: Optional[Path] = None, docker_operator: Optional[DockerOperator] = None):
        """
        Initialize the CodeChecker with dependency injection.
        
        Args:
            target_language: Specific language to check (required).
            config: Configuration object for Docker settings. Defaults to DEFAULT_CONFIG.
            base_dir: Base directory path. Defaults to the directory containing this file.
            docker_operator: DockerOperator instance. If None, creates DockerOperator(config, base_dir).
        """
        self.config = config or DEFAULT_CONFIG
        self.base_dir = base_dir or Path(__file__).parent
        self.docker_wrapper = docker_operator or DockerOperator(self.config, self.base_dir)
        self.target_language = target_language.lower()

    def _build_docker_images(self) -> Dict[str, Dict[str, any]]:
        """
        Build Docker image for the target language.
        
        Returns:
            Dictionary with build results for the target language
        """
        build_results = {}
        
        print(f"🔨 Building Docker images for: {self.target_language}...")
        print("=" * 60)
        
        success, message = self.docker_wrapper.build_language_image(self.target_language)
        build_results[self.target_language] = {
            'success': success,
            'message': message
        }
        
        if not success:
            print(f"❌ Failed to build {self.target_language} image: {message}")
        
        print("=" * 60)
    
        return build_results

    def _validate_language_snippets(self, language: str) -> Dict[str, any]:
        """
        Validate code snippets for a specific language using the DockerOperator.
        
        Args:
            language: The programming language to validate
        
        Returns:
            Dictionary with validation results
        """
        success, output = self.docker_wrapper.validate_language_snippets(language)
        return {
            'success': success,
            'output': output
        }

    def check_complete_snippets(self) -> Dict[str, Dict[str, any]]:
        """
        Build Docker image and validate complete code snippets for the target language.
        
        Returns:
            Dictionary with validation results for the target language:
            {
                'build': {language: {'success': bool, 'message': str}},
                'validation': {language: {'success': bool, 'output': str}}
            }
        """
        print(f"🚀 Starting code snippet validation for: {self.target_language}...")
        print("=" * 60)
        
        # Step 1: Build Docker images for target languages
        build_results = self._build_docker_images()
        
        # Check if all builds succeeded
        all_builds_successful = all(result['success'] for result in build_results.values())
        
        if not all_builds_successful:
            failed_builds = [lang for lang, result in build_results.items() if not result['success']]
            print(f"❌ Docker build failed for: {', '.join(failed_builds)}")
            return {
                'build': build_results,
                'validation': {}
            }
        
        print("=" * 60)
        
        # Step 2: Validate snippets for target languages
        validation_results = {}
        
        validation_results[self.target_language] = self._validate_language_snippets(self.target_language)
        
        # Summary
        print("=" * 60)
        print("📊 Validation Summary:")
        
        validation_result = validation_results[self.target_language]
        
        if validation_result['success']:
            print(f"🎉 {self.target_language.title()} validation passed!")
        else:
            print(f"❌ {self.target_language.title()} validation failed!")
        
        return {
            'build': build_results,
            'validation': validation_results
        }



