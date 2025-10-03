"""
Simple unit tests for CodeChecker using DockerOperator stub.
"""

import pytest
from code_utils.code_checker.code_checker import CodeChecker


class TestCodeChecker:
    """Simple unit tests for CodeChecker class."""
    
    def test_successful_single_language_validation(self, docker_operator_stub):
        """Test successful validation for a single language."""
        # Configure stub for success
        docker_operator_stub.set_build_response('python', True, 'Build successful')
        docker_operator_stub.set_validation_response('python', True, 'Validation passed')
        
        # Create CodeChecker with injected stub
        checker = CodeChecker(target_language='python', docker_operator=docker_operator_stub)
        
        # Run validation
        results = checker.check_complete_snippets()
        
        # Assert success
        assert results['build']['python']['success'] is True
        assert results['validation']['python']['success'] is True
        assert 'Build successful' in results['build']['python']['message']
        assert 'Validation passed' in results['validation']['python']['output']
    
    def test_build_failure_prevents_validation(self, docker_operator_stub):
        """Test that build failure prevents validation from running."""
        # Configure stub for build failure
        docker_operator_stub.set_build_response('javascript', False, 'Build failed - missing deps')
        
        # Create CodeChecker with injected stub
        checker = CodeChecker(target_language='javascript', docker_operator=docker_operator_stub)
        
        # Run validation
        results = checker.check_complete_snippets()
        
        # Assert build failed and no validation ran
        assert results['build']['javascript']['success'] is False
        assert 'Build failed' in results['build']['javascript']['message']
        assert len(results['validation']) == 0  # No validation due to build failure
    
    def test_validation_failure_after_successful_build(self, docker_operator_stub):
        """Test validation failure after successful build."""
        # Configure stub for build success but validation failure
        docker_operator_stub.set_build_response('csharp', True, 'Build OK')
        docker_operator_stub.set_validation_response('csharp', False, 'Compilation errors found')
        
        # Create CodeChecker with injected stub
        checker = CodeChecker(target_language='csharp', docker_operator=docker_operator_stub)
        
        # Run validation
        results = checker.check_complete_snippets()
        
        # Assert build succeeded but validation failed
        assert results['build']['csharp']['success'] is True
        assert results['validation']['csharp']['success'] is False
        assert 'Compilation errors found' in results['validation']['csharp']['output']
    
    def test_all_failing_scenario(self, failing_docker_operator_stub):
        """Test scenario where all operations fail."""
        # Create CodeChecker with injected failing stub
        checker = CodeChecker(target_language='python', docker_operator=failing_docker_operator_stub)
        
        # Run validation
        results = checker.check_complete_snippets()
        
        # Assert build failed and no validation ran
        assert results['build']['python']['success'] is False
        assert len(results['validation']) == 0
    
