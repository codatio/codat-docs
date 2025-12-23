"""
Configuration and fixtures for code_checker tests.
"""

import pytest
from pathlib import Path
from typing import Tuple, List

from code_utils.code_checker.codat_code_checker_config_models import CodeCheckerConfig, DEFAULT_CONFIG


class DockerOperatorStub:
    """
    A simplified stub for DockerOperator that provides controllable responses
    for testing CodeChecker in isolation from Docker daemon.
    """
    
    def __init__(self, config: CodeCheckerConfig = None, base_dir: Path = None):
        self.config = config or DEFAULT_CONFIG
        self.base_dir = base_dir or Path(__file__).parent
        
        # Default responses - can be overridden in tests
        self._build_responses = {}  # language -> (success, message)
        self._validation_responses = {}  # language -> (success, output)
        
        # Default to successful responses
        self._default_build_success = True
        self._default_build_message = "Build successful"
        self._default_validation_success = True
        self._default_validation_output = "Validation passed"
        
    def set_build_response(self, language: str, success: bool, message: str):
        """Set specific response for build_language_image calls."""
        self._build_responses[language] = (success, message)
        
    def set_validation_response(self, language: str, success: bool, output: str):
        """Set specific response for validate_language_snippets calls."""
        self._validation_responses[language] = (success, output)
        
    def set_default_responses(self, build_success: bool = True, validation_success: bool = True):
        """Set default responses for all languages."""
        self._default_build_success = build_success
        self._default_validation_success = validation_success
        
    def build_language_image(self, language: str) -> Tuple[bool, str]:
        """
        Stub for building Docker images.
        Returns configurable success/failure responses.
        """
        if language in self._build_responses:
            return self._build_responses[language]
        
        if self._default_build_success:
            return True, f"{self._default_build_message} for {language}"
        else:
            return False, f"Build failed for {language}"
    
    def validate_language_snippets(self, language: str) -> Tuple[bool, str]:
        """
        Stub for validating code snippets.
        Returns configurable success/failure responses.
        """
        if language in self._validation_responses:
            return self._validation_responses[language]
            
        if self._default_validation_success:
            return True, f"{self._default_validation_output} for {language}"
        else:
            return False, f"Validation failed for {language}"
    


@pytest.fixture
def docker_operator_stub():
    """
    Fixture providing a DockerOperator stub for testing.
    
    Usage in tests:
        def test_code_checker_with_stub(docker_operator_stub):
            # Configure responses
            docker_operator_stub.set_build_response('python', True, 'Python build ok')
            docker_operator_stub.set_validation_response('python', False, 'Python validation failed')
            
            # Inject into CodeChecker during initialization
            checker = CodeChecker(target_language='python', docker_operator=docker_operator_stub)
            
            # Run tests
            results = checker.check_complete_snippets()
            
            # Assert results
            assert results['build']['python']['success'] is True
            assert results['validation']['python']['success'] is False
    """
    stub = DockerOperatorStub()
    return stub


@pytest.fixture
def failing_docker_operator_stub():
    """
    Fixture providing a DockerOperator stub that fails by default.
    Useful for testing error handling scenarios.
    """
    stub = DockerOperatorStub()
    stub.set_default_responses(build_success=False, validation_success=False)
    return stub


@pytest.fixture
def mock_config():
    """Fixture providing a mock configuration for testing."""
    return DEFAULT_CONFIG


@pytest.fixture  
def test_base_dir():
    """Fixture providing a test base directory path."""
    return Path(__file__).parent.parent.parent / "code_checker"
