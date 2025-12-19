"""
Tests for the CodeFinder class using pytest and pyfakefs.
"""

import pytest
import json
from pathlib import Path
from unittest.mock import patch

from code_utils.code_finder.code_finder import CodeFinder
from code_utils.code_finder.file_operator import FileOperator


class TestCodeFinderInit:
    """Test CodeFinder initialization."""

    def test_init_default_parameters(self, fs, code_defaults_content):
        """Test CodeFinder initialization with default parameters."""
        fs.create_file("code_defaults.json", contents=code_defaults_content)
        deserialized_code_config_defaults = json.loads(code_defaults_content)
        finder = CodeFinder()

        assert finder.matching_files == []
        assert finder.config.loaded_config == deserialized_code_config_defaults
        assert isinstance(finder.file_operator, FileOperator)
        assert finder.target_languages == set(["python", "javascript", "csharp"])
        assert finder.output_file.name == "files_with_code.txt"

    def test_init_custom_output_file_name(self):
        """Test CodeFinder initialization with custom output file name."""
        custom_output = "custom_output.txt"
        finder = CodeFinder(output_file_name=custom_output)

        assert finder.output_file.name == custom_output

    def test_init_single_target_language(self, fs, code_defaults_content):
        """Test CodeFinder initialization with single target language."""
        fs.create_file("code_defaults.json", contents=code_defaults_content)
        finder = CodeFinder(target_languages="python")

        assert finder.target_languages == {"python"}

    def test_init_multiple_target_language(self, fs, code_defaults_content):
        """Test CodeFinder initialization with single target language."""
        fs.create_file("code_defaults.json", contents=code_defaults_content)
        finder = CodeFinder(target_languages=["python", "javascript"])

        assert finder.target_languages == {"python", "javascript"}

    def test_init_with_target_language_not_in_config(self, fs, code_defaults_content):
        """Test that initialization handles missing custom config gracefully."""
        fs.create_file("code_defaults.json", contents=code_defaults_content)
        with pytest.raises(ValueError) as error_output:
            CodeFinder(target_languages="rust")
        assert "rust not specified in code_defaults.json" in str(error_output.value)

    def test_init_target_language_case_insensitive(self):
        """Test that target language is case insensitive."""
        finder = CodeFinder(target_languages="PYTHON")

        assert finder.target_languages == {"python"}

    def test_init_multiple_target_languages_normalized(self):
        """Test that multiple languages with different cases are normalized."""
        finder1 = CodeFinder(target_languages="Python")
        finder2 = CodeFinder(target_languages="python")

        assert finder1.target_languages == finder2.target_languages

    def test_init_custom_config(self, fs, code_defaults_content):
        """Test CodeFinder initialization with custom config."""
        custom_code_config_file_path = "code_custom.json"
        deserialized_code_config_defaults = json.loads(code_defaults_content)

        fs.create_file(custom_code_config_file_path, contents=code_defaults_content)

        finder = CodeFinder(config_override=custom_code_config_file_path)

        # Test configuration was applied correctly
        assert finder.config.loaded_config == deserialized_code_config_defaults
        assert finder.target_languages == {"python", "javascript", "csharp"}

        # Test that the custom patterns are accessible
        python_config = finder.config.get_language_config("python")
        assert python_config.extension == ".py"
        assert r"^import\s+" in python_config.import_patterns

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
        assert finder.temp_dir == finder.code_utils_dir / "temp"
        assert finder.project_root == finder.script_dir.parent.parent
        assert finder.docs_path == finder.project_root / "docs"
        assert finder.output_file.parent == finder.code_utils_dir

    def test_init_with_nonexistent_custom_config(self, fs):
        """Test that initialization handles missing custom config gracefully."""
        # This should raise an error or handle gracefully
        # Adjust based on actual implementation behavior
        with pytest.raises((FileNotFoundError, Exception)):
            CodeFinder(config_override="nonexistent_config.json")


class TestCodeFinderIntegration:
    """Comprehensive integration tests using realistic project structures and workflows."""

    def test_find_all_languages_workflow(self, fake_project_structure):
        """Test complete workflow finding all supported languages."""
        paths = fake_project_structure
        finder = CodeFinder(output_file_name="all_languages.txt")

        # Run the workflow
        finder.find_files_with_code()

        # Verify files were found
        assert len(finder.matching_files) > 0

        # Expected files should include those with code blocks
        expected_files = {
            "python-guide.md",
            "js-sdk.mdx",
            "csharp-examples.md",
            "mixed-examples.md",
            "api/webhooks/setup.md",
        }

        found_files = set(finder.matching_files)
        assert expected_files.issubset(found_files)
        assert "no-code.md" not in found_files

        # Extract code
        finder.extract_code()

        # Verify temp directory structure was created
        temp_dir = paths["code_utils_dir"] / "temp"
        assert temp_dir.exists()

        # Check language subdirectories
        for lang in ["python", "javascript", "csharp"]:
            lang_dir = temp_dir / lang
            assert lang_dir.exists()
            assert (lang_dir / "complete").exists()
            assert (lang_dir / "incomplete").exists()

    def test_single_language_only_workflow(self, fake_project_structure):
        """Test workflow targeting only Python code."""
        paths = fake_project_structure
        finder = CodeFinder(
            target_languages="python", output_file_name="python_only.txt"
        )

        finder.find_files_with_code()

        # Should find files with Python code
        found_files = set(finder.matching_files)
        assert "python-guide.md" in found_files
        assert "mixed-examples.md" in found_files
        assert "api/webhooks/setup.md" in found_files

        # Extract code
        finder.extract_code()

        # Only Python directory should be created
        temp_dir = paths["code_utils_dir"] / "temp"
        assert (temp_dir / "python").exists()

    def test_extract_code_with_import_detection(self, fake_project_structure):
        """Test that code extraction correctly identifies complete vs incomplete snippets."""
        finder = CodeFinder()
        finder.find_files_with_code()
        finder.extract_code()

        # Check that code files were extracted correctly
        python_complete = finder.temp_dir / "python" / "complete"
        python_incomplete = finder.temp_dir / "python" / "incomplete"

        # Should have both complete and incomplete Python snippets
        complete_files = list(python_complete.glob("*.py"))
        incomplete_files = list(python_incomplete.glob("*.py"))

        assert len(complete_files) > 0  # Should have snippet with imports
        assert len(incomplete_files) > 0  # Should have snippet without imports

        # Verify content of extracted files
        for py_file in complete_files:
            with open(py_file, "r") as f:
                content = f.read()
                assert "import" in content  # Should contain import statements

        for py_file in incomplete_files:
            with open(py_file, "r") as f:
                content = f.read()
                # Should not start with import (this is the logic in FileOperator)
                lines = [line.strip() for line in content.split("\n") if line.strip()]
                if lines:
                    first_meaningful_line = lines[0]
                    # The incomplete snippets should not start with import
                    assert not first_meaningful_line.startswith("import")

    def test_output_file_creation(self, fake_project_structure):
        """Test that output file is created with correct content."""
        paths = fake_project_structure
        finder = CodeFinder(output_file_name="test_output.txt")
        finder.find_files_with_code()

        # Check output file was created
        output_file = paths["code_utils_dir"] / "test_output.txt"
        assert output_file.exists()

        # Read and verify content
        with open(output_file, "r", encoding="utf-8") as f:
            content = f.read()

        # Should contain the files we found
        assert "python-guide.md" in content
        assert "js-sdk.mdx" in content
        assert "csharp-examples.md" in content
        assert "mixed-examples.md" in content
        assert "no-code.md" not in content

    def test_output_file_content_format(self, fake_project_structure):
        """Test that output file has proper formatting."""
        paths = fake_project_structure
        finder = CodeFinder(output_file_name="formatted_output.txt")
        finder.find_files_with_code()

        output_file = paths["code_utils_dir"] / "formatted_output.txt"
        with open(output_file, "r", encoding="utf-8") as f:
            lines = f.readlines()

        # Verify each line contains a valid file path
        for line in lines:
            line = line.strip()
            if line:  # Skip empty lines
                assert line.endswith(".md") or line.endswith(".mdx")

    def test_sequential_workflow_calls(self, fake_project_structure):
        """Test calling find and extract multiple times."""
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

    def test_extract_before_find_handles_gracefully(self, fake_project_structure):
        """Test that calling extract_code before find_files_with_code is handled."""
        finder = CodeFinder()

        # Call extract without calling find first
        finder.extract_code()

        # Should not crash, but no files should be extracted
        # (matching_files is empty)
        assert finder.matching_files == []


class TestCodeFinderEdgeCases:
    """Test edge cases and error conditions."""

    def test_empty_docs_directory(self, make_code_finder_paths_in_fake_fs):
        """Test behavior with empty docs directory."""
        finder = CodeFinder()
        finder.find_files_with_code()

        assert finder.matching_files == []

        # Extract should still work (no-op)
        finder.extract_code()

    def test_docs_with_only_non_target_languages(
        self, make_code_finder_paths_in_fake_fs, fs, project_paths
    ):
        """Test with docs containing only non-target languages."""
        # Create a file with Ruby code (not in default config)
        docs_path = project_paths["docs_path"]
        fs.create_file(
            str(docs_path / "ruby-only.md"),
            contents="""
# Ruby Guide

```ruby
class Example
  def initialize
    @data = []
  end
end
```
""",
        )

        finder = CodeFinder(target_languages="python")
        finder.find_files_with_code()

        # Should find no files since none contain Python
        assert finder.matching_files == []

    def test_file_with_empty_code_blocks(
        self, make_code_finder_paths_in_fake_fs, fs, project_paths
    ):
        """Test handling of empty code blocks."""
        docs_path = project_paths["docs_path"]
        fs.create_file(
            str(docs_path / "empty-blocks.md"),
            contents="""
# Empty Code Blocks

```python
```

```javascript
```
""",
        )

        finder = CodeFinder()
        finder.find_files_with_code()

        # Should handle empty blocks gracefully
        # Behavior depends on implementation - adjust assertion accordingly
        finder.extract_code()

    def test_file_with_no_language_specified(
        self, make_code_finder_paths_in_fake_fs, fs, project_paths
    ):
        """Test code blocks without language specifier."""
        docs_path = project_paths["docs_path"]
        fs.create_file(
            str(docs_path / "no-lang.md"),
            contents="""
# Generic Code Block

```
some code here
```
""",
        )

        finder = CodeFinder()
        finder.find_files_with_code()

        # Should not match generic code blocks
        assert "no-lang.md" not in finder.matching_files

    def test_nested_subdirectories(
        self, make_code_finder_paths_in_fake_fs, fs, project_paths
    ):
        """Test finding files in deeply nested directory structures."""
        docs_path = project_paths["docs_path"]
        fs.create_dir(str(docs_path / "level1" / "level2" / "level3"))
        fs.create_file(
            str(docs_path / "level1" / "level2" / "level3" / "deep.md"),
            contents="""
# Deep File

```python
import os
print("deep")
```
""",
        )

        finder = CodeFinder(target_languages="python")
        finder.find_files_with_code()

        # Should find files in nested directories
        found_files = set(finder.matching_files)
        assert any("deep.md" in f for f in found_files)

    def test_file_with_multiple_code_blocks_same_language(
        self, make_code_finder_paths_in_fake_fs, fs, project_paths
    ):
        """Test file with multiple Python code blocks."""
        docs_path = project_paths["docs_path"]
        fs.create_file(
            str(docs_path / "multiple-blocks.md"),
            contents="""
# Multiple Blocks

```python
import requests
print("first")
```

Some text here.

```python
import json
print("second")
```

```python
# No imports
print("third")
```
""",
        )

        finder = CodeFinder(target_languages="python")
        finder.find_files_with_code()
        finder.extract_code()

        # Should find the file
        assert "multiple-blocks.md" in finder.matching_files

        # Should create multiple extracted files
        code_utils_dir = project_paths["code_utils_dir"]
        python_complete = code_utils_dir / "temp" / "python" / "complete"
        python_incomplete = code_utils_dir / "temp" / "python" / "incomplete"

        complete_count = len(list(python_complete.glob("*.py")))
        incomplete_count = len(list(python_incomplete.glob("*.py")))

        # Should have extracted all three blocks (2 complete, 1 incomplete)
        assert complete_count + incomplete_count >= 3

    def test_code_block_with_inline_comments(
        self, make_code_finder_paths_in_fake_fs, fs, project_paths
    ):
        """Test code blocks that start with comments."""
        docs_path = project_paths["docs_path"]
        fs.create_file(
            str(docs_path / "with-comments.md"),
            contents="""
# Code with Comments

```python
# This is a comment
# Another comment
import os
print("code")
```

```python
# Only comments, no imports
print("just code")
```
""",
        )

        finder = CodeFinder(target_languages="python")
        finder.find_files_with_code()
        finder.extract_code()

        # Should properly categorize based on import presence, not comments
        code_utils_dir = project_paths["code_utils_dir"]
        python_complete = code_utils_dir / "temp" / "python" / "complete"
        complete_files = list(python_complete.glob("*.py"))

        # At least one should be complete (has import after comments)
        assert len(complete_files) > 0


class TestCodeFinderLanguageSpecific:
    """Test language-specific functionality."""

    def test_python_import_variations(
        self, make_code_finder_paths_in_fake_fs, fs, project_paths
    ):
        """Test various Python import styles are detected."""
        docs_path = project_paths["docs_path"]
        fs.create_file(
            str(docs_path / "python-imports.md"),
            contents="""
# Python Imports

```python
import os
```

```python
from datetime import datetime
```

```python
from package.module import function
```
""",
        )

        finder = CodeFinder(target_languages="python")
        finder.find_files_with_code()
        finder.extract_code()

        code_utils_dir = project_paths["code_utils_dir"]
        python_complete = code_utils_dir / "temp" / "python" / "complete"
        complete_files = list(python_complete.glob("*.py"))

        # Should detect all import variations as complete
        assert len(complete_files) == 3

    def test_javascript_import_variations(
        self, make_code_finder_paths_in_fake_fs, fs, project_paths
    ):
        """Test various JavaScript import styles are detected."""
        docs_path = project_paths["docs_path"]
        fs.create_file(
            str(docs_path / "js-imports.md"),
            contents="""
# JavaScript Imports

```javascript
import React from 'react';
```

```javascript
const express = require('express');
```

```javascript
require('dotenv').config();
```
""",
        )

        finder = CodeFinder(target_languages="javascript")
        finder.find_files_with_code()
        finder.extract_code()

        code_utils_dir = project_paths["code_utils_dir"]
        js_complete = code_utils_dir / "temp" / "javascript" / "complete"
        complete_files = list(js_complete.glob("*.ts"))

        # Should detect all import variations as complete
        assert len(complete_files) == 3

    def test_csharp_using_statements(
        self, make_code_finder_paths_in_fake_fs, fs, project_paths
    ):
        """Test C# using statement detection."""
        docs_path = project_paths["docs_path"]
        fs.create_file(
            str(docs_path / "csharp-using.md"),
            contents="""
# C# Using Statements

```csharp
using System;
Console.WriteLine("Hello");
```

```csharp
using System.Collections.Generic;
using System.Linq;
var list = new List<int>();
```
""",
        )

        finder = CodeFinder(target_languages="csharp")
        finder.find_files_with_code()
        finder.extract_code()

        code_utils_dir = project_paths["code_utils_dir"]
        csharp_complete = code_utils_dir / "temp" / "csharp" / "complete"
        complete_files = list(csharp_complete.glob("*.cs"))

        # Should detect using statements as complete
        assert len(complete_files) == 2


class TestCodeFinderConfiguration:
    """Test configuration-related functionality."""

    def test_custom_config_with_new_language(self, fs):
        """Test adding a new language via custom configuration."""
        custom_config = {
            "ruby": {
                "import_patterns": [r"^require\s+"],
                "comment_patterns": [r"^\s*#"],
                "extension": ".rb",
            }
        }

        fs.create_file("custom_ruby.json", contents=json.dumps(custom_config))

        finder = CodeFinder(config_override="custom_ruby.json", target_languages="ruby")

        # Should have ruby as target language
        assert "ruby" in finder.target_languages

        # Should be able to get ruby config
        ruby_config = finder.config.get_language_config("ruby")
        assert ruby_config.extension == ".rb"

    def test_config_with_invalid_json(self, fs):
        """Test handling of malformed configuration file."""
        fs.create_file("bad_config.json", contents="{ invalid json")

        # Should raise an appropriate error
        with pytest.raises((json.JSONDecodeError, Exception)):
            CodeFinder(config_override="bad_config.json")


class TestCodeFinderFileExtensions:
    """Test handling of different markdown file extensions."""

    def test_finds_both_md_and_mdx_files(
        self, make_code_finder_paths_in_fake_fs, fs, project_paths
    ):
        """Test that both .md and .mdx files are found."""
        docs_path = project_paths["docs_path"]
        fs.create_file(
            str(docs_path / "regular.md"),
            contents="""
```python
import os
```
""",
        )
        fs.create_file(
            str(docs_path / "extended.mdx"),
            contents="""
```python
import sys
```
""",
        )

        finder = CodeFinder(target_languages="python")
        finder.find_files_with_code()

        found_files = set(finder.matching_files)
        assert "regular.md" in found_files
        assert "extended.mdx" in found_files

    def test_ignores_non_markdown_files(
        self, make_code_finder_paths_in_fake_fs, fs, project_paths
    ):
        """Test that non-markdown files are ignored."""
        docs_path = project_paths["docs_path"]
        fs.create_file(
            str(docs_path / "text.txt"),
            contents="""
```python
import os
```
""",
        )
        fs.create_file(
            str(docs_path / "readme.rst"),
            contents="""
```python
import sys
```
""",
        )

        finder = CodeFinder(target_languages="python")
        finder.find_files_with_code()

        # Should not find non-markdown files
        found_files = set(finder.matching_files)
        assert "text.txt" not in found_files
        assert "readme.rst" not in found_files
