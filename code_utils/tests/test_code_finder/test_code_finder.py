"""
Tests for the CodeFinder class using pytest and pyfakefs.
"""

import pytest
from pathlib import Path
from unittest.mock import patch
from pyfakefs.fake_filesystem_unittest import TestCase

from code_utils.code_finder.code_finder import CodeFinder
from code_utils.code_finder.codat_code_config_models import CodeFinderConfig, LanguageConfig, DEFAULT_CONFIG
from code_utils.code_finder.file_operator import FileOperator


# Import sample docs from conftest
from ..conftest import get_sample_docs


class TestCodeFinderInit:
    """Test CodeFinder initialization."""

    def test_init_default_parameters(self):
        """Test CodeFinder initialization with default parameters."""
        finder = CodeFinder()
        
        assert finder.matching_files == []
        assert finder.config == DEFAULT_CONFIG
        assert isinstance(finder.file_operator, FileOperator)
        assert finder.target_languages == set(['python', 'javascript', 'csharp'])
        assert finder.output_file.name == "files_with_code.txt"

    def test_init_custom_output_file_name(self):
        """Test CodeFinder initialization with custom output file name."""
        custom_output = "custom_output.txt"
        finder = CodeFinder(output_file_name=custom_output)
        
        assert finder.output_file.name == custom_output

    def test_init_single_target_language(self):
        """Test CodeFinder initialization with single target language."""
        finder = CodeFinder(target_language="python")
        
        assert finder.target_languages == {"python"}

    def test_init_target_language_case_insensitive(self):
        """Test that target language is case insensitive."""
        finder = CodeFinder(target_language="PYTHON")
        
        assert finder.target_languages == {"python"}

    def test_init_custom_config(self):
        """Test CodeFinder initialization with custom config."""
        custom_config = CodeFinderConfig(
            python=LanguageConfig(
                import_patterns=[r'^import\s+', r'^from\s+'],
                comment_patterns=[r'^\s*#'],
                extension='.py'
            ),
            javascript=LanguageConfig(
                import_patterns=[r'^import\s+', r'^const\s+'],
                comment_patterns=[r'^\s*//'],
                extension='.js'
            ),
            csharp=LanguageConfig(
                import_patterns=[r'^using\s+'],
                comment_patterns=[r'^\s*//'],
                extension='.cs'
            )
        )
        finder = CodeFinder(config=custom_config)
        
        # Test configuration was applied correctly
        assert finder.config == custom_config
        assert finder.target_languages == {'python', 'javascript', 'csharp'}
        
        # Test that the custom patterns are accessible
        python_config = finder.config.get_language_config('python')
        assert python_config.extension == '.py'
        assert r'^import\s+' in python_config.import_patterns

    def test_init_custom_file_operator(self):
        """Test CodeFinder initialization with custom file operator."""
        custom_file_operator = FileOperator()
        finder = CodeFinder(file_operator=custom_file_operator)
        
        assert finder.file_operator == custom_file_operator
        assert finder.file_operator is custom_file_operator  # Same instance

    def test_init_path_configuration(self):
        """Test that paths are configured correctly."""
        finder = CodeFinder()
        
        # Test that paths are pathlib.Path objects
        assert isinstance(finder.script_dir, Path)
        assert isinstance(finder.code_utils_dir, Path)
        assert isinstance(finder.temp_dir, Path)
        assert isinstance(finder.project_root, Path)
        assert isinstance(finder.docs_path, Path)
        assert isinstance(finder.output_file, Path)
        
        # Test path relationships
        assert finder.code_utils_dir == finder.script_dir.parent
        assert finder.temp_dir == finder.code_utils_dir / 'temp'
        assert finder.project_root == finder.script_dir.parent.parent
        assert finder.docs_path == finder.project_root / 'docs'
        assert finder.output_file.parent == finder.code_utils_dir


class TestCodeFinderIntegration(TestCase):
    """Comprehensive integration tests using realistic project structures and workflows."""
    
    def setUp(self):
        """Set up fake filesystem with realistic project structure."""
        self.setUpPyfakefs()
        
        # Create project structure
        self.project_root = "/fake_project"
        self.fs.create_dir(f"{self.project_root}/code_utils/code_finder")
        self.fs.create_dir(f"{self.project_root}/docs")
        
        # Create required Python files
        self.fs.create_file(f"{self.project_root}/code_utils/__init__.py")
        self.fs.create_file(f"{self.project_root}/code_utils/code_finder/__init__.py")
        self.fs.create_file(f"{self.project_root}/code_utils/code_finder/code_finder.py")
        
        # Create comprehensive docs structure
        self.create_sample_docs()
        
    def create_sample_docs(self):
        """Create realistic documentation files with various code snippets."""
        sample_docs = get_sample_docs()
        
        # Python tutorial with imports
        self.fs.create_file(f"{self.project_root}/docs/python-guide.md", 
                          contents=sample_docs['python_guide'])
        
        # JavaScript tutorial
        self.fs.create_file(f"{self.project_root}/docs/js-sdk.mdx", 
                          contents=sample_docs['javascript_sdk'])
        
        # C# documentation
        self.fs.create_file(f"{self.project_root}/docs/csharp-examples.md", 
                          contents=sample_docs['csharp_examples'])
        
        # Mixed content file
        self.fs.create_file(f"{self.project_root}/docs/mixed-examples.md", 
                          contents=sample_docs['mixed_examples'])
        
        # File with no code
        self.fs.create_file(f"{self.project_root}/docs/no-code.md", 
                          contents=sample_docs['no_code'])
        
        # Nested directory structure
        self.fs.create_dir(f"{self.project_root}/docs/api/webhooks")
        self.fs.create_file(f"{self.project_root}/docs/api/webhooks/setup.md", 
                          contents=sample_docs['webhook_setup'])
    
    def test_find_all_languages_workflow(self):
        """Test complete workflow finding all supported languages."""
        with patch('code_utils.code_finder.code_finder.Path') as mock_path:
            mock_path.return_value.resolve.return_value.parent = Path(f"{self.project_root}/code_utils/code_finder")
            
            finder = CodeFinder(output_file_name="all_languages.txt")
            
            # Run the workflow
            finder.find_files_with_code()
            
            # Verify files were found
            assert len(finder.matching_files) > 0
            
            # Expected files should include those with code blocks
            expected_files = {
                'python-guide.md',
                'js-sdk.mdx', 
                'csharp-examples.md',
                'mixed-examples.md',
                'api/webhooks/setup.md'
            }
            
            found_files = set(finder.matching_files)
            assert expected_files.issubset(found_files)
            assert 'no-code.md' not in found_files
            
            # Extract code
            finder.extract_code()
            
            # Verify temp directory structure was created
            temp_dir = Path(f"{self.project_root}/code_utils/temp")
            assert temp_dir.exists()
            
            # Check language subdirectories
            for lang in ['python', 'javascript', 'csharp']:
                lang_dir = temp_dir / lang
                assert lang_dir.exists()
                assert (lang_dir / 'complete').exists()
                assert (lang_dir / 'incomplete').exists()
    
    def test_python_only_workflow(self):
        """Test workflow targeting only Python code."""
        with patch('code_utils.code_finder.code_finder.Path') as mock_path:
            mock_path.return_value.resolve.return_value.parent = Path(f"{self.project_root}/code_utils/code_finder")
            
            finder = CodeFinder(
                target_language="python",
                output_file_name="python_only.txt"
            )
            
            finder.find_files_with_code()
            
            # Should find files with Python code
            found_files = set(finder.matching_files)
            assert 'python-guide.md' in found_files
            assert 'mixed-examples.md' in found_files
            assert 'api/webhooks/setup.md' in found_files
            
            # Extract code
            finder.extract_code()
            
            # Only Python directory should be created
            temp_dir = Path(f"{self.project_root}/code_utils/temp")
            assert (temp_dir / 'python').exists()
    
    def test_javascript_workflow(self):
        """Test workflow targeting JavaScript/TypeScript code."""
        with patch('code_utils.code_finder.code_finder.Path') as mock_path:
            mock_path.return_value.resolve.return_value.parent = Path(f"{self.project_root}/code_utils/code_finder")
            
            finder = CodeFinder(
                target_language="javascript",
                output_file_name="js_files.txt"
            )
            
            finder.find_files_with_code()
            
            found_files = set(finder.matching_files)
            assert 'js-sdk.mdx' in found_files
            assert 'mixed-examples.md' in found_files
            
            finder.extract_code()
            
            temp_dir = Path(f"{self.project_root}/code_utils/temp")
            assert (temp_dir / 'javascript').exists()
    
    def test_csharp_workflow(self):
        """Test workflow targeting C# code."""
        with patch('code_utils.code_finder.code_finder.Path') as mock_path:
            mock_path.return_value.resolve.return_value.parent = Path(f"{self.project_root}/code_utils/code_finder")
            
            finder = CodeFinder(
                target_language="csharp",
                output_file_name="csharp_files.txt"
            )
            
            finder.find_files_with_code()
            
            found_files = set(finder.matching_files)
            assert 'csharp-examples.md' in found_files
            assert 'mixed-examples.md' in found_files
            
            finder.extract_code()
            
            temp_dir = Path(f"{self.project_root}/code_utils/temp")
            assert (temp_dir / 'csharp').exists()
    
    def test_extract_code_with_import_detection(self):
        """Test that code extraction correctly identifies complete vs incomplete snippets."""
        with patch('code_utils.code_finder.code_finder.Path') as mock_path:
            mock_path.return_value.resolve.return_value.parent = Path(f"{self.project_root}/code_utils/code_finder")
            
            finder = CodeFinder()
            finder.find_files_with_code()
            finder.extract_code()
        
        # Check that code files were extracted correctly
        python_complete = finder.temp_dir / 'python' / 'complete'
        python_incomplete = finder.temp_dir / 'python' / 'incomplete'
        
        # Should have both complete and incomplete Python snippets
        complete_files = list(python_complete.glob('*.py'))
        incomplete_files = list(python_incomplete.glob('*.py'))
        
        assert len(complete_files) > 0  # Should have snippet with imports
        assert len(incomplete_files) > 0  # Should have snippet without imports
        
        # Verify content of extracted files
        for py_file in complete_files:
            with open(py_file, 'r') as f:
                content = f.read()
                assert 'import' in content  # Should contain import statements
        
        for py_file in incomplete_files:
            with open(py_file, 'r') as f:
                content = f.read()
                # Should not start with import (this is the logic in FileOperator)
                lines = [line.strip() for line in content.split('\n') if line.strip()]
                if lines:
                    first_meaningful_line = lines[0]
                    # The incomplete snippets should not start with import
                    assert not first_meaningful_line.startswith('import')
    
    def test_output_file_creation(self):
        """Test that output file is created with correct content."""
        with patch('code_utils.code_finder.code_finder.Path') as mock_path:
            mock_path.return_value.resolve.return_value.parent = Path(f"{self.project_root}/code_utils/code_finder")
            
            finder = CodeFinder(output_file_name="test_output.txt")
            finder.find_files_with_code()
            
            # Check output file was created
            output_file = Path(f"{self.project_root}/code_utils/test_output.txt")
            assert output_file.exists()
            
            # Read and verify content
            with open(output_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Should contain the files we found
            assert 'python-guide.md' in content
            assert 'js-sdk.mdx' in content
            assert 'csharp-examples.md' in content
            assert 'mixed-examples.md' in content
            assert 'no-code.md' not in content
    
    def test_sequential_workflow_calls(self):
        """Test calling find and extract multiple times."""
        with patch('code_utils.code_finder.code_finder.Path') as mock_path:
            mock_path.return_value.resolve.return_value.parent = Path(f"{self.project_root}/code_utils/code_finder")
            
            finder = CodeFinder()
            
            # First run
            finder.find_files_with_code()
            first_run_files = finder.matching_files.copy()
            finder.extract_code()
            
            # Second run should give same results
            finder.find_files_with_code()
            second_run_files = finder.matching_files.copy()
            finder.extract_code()
            
            assert first_run_files == second_run_files
    
    def test_empty_docs_directory(self):
        """Test behavior with empty docs directory."""
        # Create empty docs directory
        empty_project = "/empty_project"
        self.fs.create_dir(f"{empty_project}/code_utils/code_finder")
        self.fs.create_dir(f"{empty_project}/docs")
        self.fs.create_file(f"{empty_project}/code_utils/code_finder/__init__.py")
        
        with patch('code_utils.code_finder.code_finder.Path') as mock_path:
            mock_path.return_value.resolve.return_value.parent = Path(f"{empty_project}/code_utils/code_finder")
            
            finder = CodeFinder()
            finder.find_files_with_code()
            
            assert finder.matching_files == []
            
            # Extract should still work (no-op)
            finder.extract_code()
    
    def test_docs_with_only_non_target_languages(self):
        """Test with docs containing only non-target languages."""
        # Create project with only non-target content
        special_project = "/special_project"
        self.fs.create_dir(f"{special_project}/code_utils/code_finder")
        self.fs.create_dir(f"{special_project}/docs")
        self.fs.create_file(f"{special_project}/code_utils/code_finder/__init__.py")
        
        # Create file with only non-target language
        sample_docs = get_sample_docs()
        self.fs.create_file(f"{special_project}/docs/ruby-guide.md", 
                          contents=sample_docs['ruby_guide'])
        
        with patch('code_utils.code_finder.code_finder.Path') as mock_path:
            mock_path.return_value.resolve.return_value.parent = Path(f"{special_project}/code_utils/code_finder")
            
            finder = CodeFinder(target_language="python")
            finder.find_files_with_code()
            
            # Should find no files since none contain Python
            assert finder.matching_files == []


class TestCodeFinderConfiguration:
    """Test CodeFinder configuration and initialization without filesystem operations."""
    
    def test_different_languages_configuration(self):
        """Test CodeFinder language configuration logic."""
        test_cases = [
            ("python", {"python"}),
            ("javascript", {"javascript"}),
            ("csharp", {"csharp"}),
            (None, {"python", "javascript", "csharp"}),
        ]
        
        for target_language, expected_languages in test_cases:
            finder = CodeFinder(target_language=target_language)
            assert finder.target_languages == expected_languages

    def test_custom_config_assignment(self):
        """Test that custom configuration is properly assigned."""
        custom_config = CodeFinderConfig(
            python=LanguageConfig(
                import_patterns=[r'^import\s+', r'^from\s+'],
                comment_patterns=[r'^\s*#'],
                extension='.py'
            ),
            javascript=LanguageConfig(
                import_patterns=[r'^import\s+', r'^const\s+'],
                comment_patterns=[r'^\s*//'],
                extension='.js'
            ),
            csharp=LanguageConfig(
                import_patterns=[r'^using\s+'],
                comment_patterns=[r'^\s*//'],
                extension='.cs'
            )
        )
        
        finder = CodeFinder(config=custom_config)
        
        # Verify custom config was assigned (no mocking needed!)
        assert finder.config == custom_config
        assert finder.config.python.extension == '.py'
        assert finder.config.javascript.extension == '.js'
        assert finder.config.csharp.extension == '.cs'