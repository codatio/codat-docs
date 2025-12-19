"""
Shared pytest fixtures for code_utils tests.
"""

import pytest
import json
from pathlib import Path
from unittest.mock import patch


@pytest.fixture
def code_utils_real_project_paths():
    """Helper function to provide real project paths for use in fake filesystem.
    code_utils does some specific things with paths, so we need precision"""
    from code_utils.code_finder import code_finder as cf_module

    real_code_finder_path = Path(cf_module.__file__).resolve().parent
    real_code_utils_dir = real_code_finder_path.parent
    real_project_root = real_code_utils_dir.parent

    return {
        "code_finder_path": real_code_finder_path,
        "code_utils_dir": real_code_utils_dir,
        "project_root": real_project_root,
        "docs_path": real_project_root / "docs",
    }


@pytest.fixture
def code_defaults_content():
    """Returns the JSON string content for code_defaults.json.
    Use this fixture for the contents when you need to create a code_defaults.json file"""
    data = {
        "python": {
            "import_patterns": [r"^import\s+", r"^from\s+.+\s+import\s+"],
            "comment_patterns": [r"^\s*#"],
            "extension": ".py",
        },
        "javascript": {
            "import_patterns": [
                r"^import\s+",
                r"^const\s+.+=\s+require\(",
                r"^require\(",
            ],
            "comment_patterns": [r"^\s*//", r"^\s*/\*"],
            "extension": ".ts",
        },
        "csharp": {
            "import_patterns": [r"^using\s+"],
            "comment_patterns": [r"^\s*//", r"^\s*/\*"],
            "extension": ".cs",
        },
    }
    return json.dumps(data, indent=2)


@pytest.fixture
def sample_docs():
    """Sample documentation content for various languages.
    Use this fixture for the contents when you need to create markdown files
    with language specific code snippets
    Example:
    def test_example(sample_docs):
        content = sample_docs['python_guide']
    """
    return {
        "python_guide": """# Python SDK Guide

## Installation

```python
import requests
import json
from datetime import datetime

def get_company_data(company_id):
    url = f"https://api.codat.io/companies/{company_id}"
    response = requests.get(url)
    return response.json()
```

## Error Handling

```python
# Simple example without imports
try:
    result = get_data()
    print(result)
except Exception as e:
    print(f"Error: {e}")
```
""",
        "javascript_sdk": """# JavaScript SDK

## Setup

```javascript
import { CodatSDK } from '@codat/sdk';
import axios from 'axios';

const client = new CodatSDK({
    authHeader: 'Bearer your-token'
});
```

## Making Requests

```javascript
// Simple function without imports
const fetchData = async (id) => {
    return await client.companies.get(id);
};
```
""",
        "csharp_examples": """# C# Examples

## Basic Usage

```csharp
using System;
using System.Threading.Tasks;
using Codat.Sync.Payables;

namespace CodatExample
{
    public class PayablesService
    {
        private readonly CodatSyncPayables _client;
        
        public PayablesService()
        {
            _client = new CodatSyncPayables(security: new Security()
            {
                AuthHeader = "Bearer YOUR_TOKEN"
            });
        }
    }
}
```

## Helper Methods

```csharp
// Simple method without using statements
public void ProcessData()
{
    Console.WriteLine("Processing...");
}
```
""",
        "mixed_examples": """# Mixed Examples

## Python

```python
import os
print("Python example")
```

## JavaScript

```javascript
const express = require('express');
app.listen(3000);
```

## C#

```csharp
using System;
Console.WriteLine("C# example");
```

## Text block (not code)

```
This is just a text block, not a programming language.
```
""",
        "no_code": """# Documentation Only

This file contains no code blocks.
Just regular markdown documentation.

## Features

- Feature 1
- Feature 2
- Feature 3
""",
        "webhook_setup": """# Webhook Setup

```python
from flask import Flask, request
import hmac
import hashlib

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def handle_webhook():
    payload = request.get_data()
    return 'OK'
```
""",
        "ruby_guide": """# Ruby Guide

```ruby
class Example
  def initialize
    @data = []
  end
end
```

```bash
#!/bin/bash
echo "Shell script"
```
""",
    }


@pytest.fixture
def sample_docs_files(fs, sample_docs, code_utils_real_project_paths):
    """Create sample documentation files in the fake filesystem."""
    paths = code_utils_real_project_paths
    docs_path = paths["docs_path"]

    # Main docs
    fs.create_file(
        str(docs_path / "python-guide.md"), contents=sample_docs["python_guide"]
    )
    fs.create_file(
        str(docs_path / "js-sdk.mdx"), contents=sample_docs["javascript_sdk"]
    )
    fs.create_file(
        str(docs_path / "csharp-examples.md"), contents=sample_docs["csharp_examples"]
    )
    fs.create_file(
        str(docs_path / "mixed-examples.md"), contents=sample_docs["mixed_examples"]
    )
    fs.create_file(str(docs_path / "no-code.md"), contents=sample_docs["no_code"])

    # Nested directory structure
    fs.create_dir(str(docs_path / "api" / "webhooks"))
    fs.create_file(
        str(docs_path / "api" / "webhooks" / "setup.md"),
        contents=sample_docs["webhook_setup"],
    )


@pytest.fixture
def make_code_finder_paths_in_fake_fs(
    fs, code_defaults_content, code_utils_real_project_paths
):
    """
    Setup basic project structure in fake filesystem.
    Pyfakefs automatically handles Path operations.
    """
    paths = code_utils_real_project_paths

    # Create the directory structure in the fake filesystem at the real locations
    fs.create_file(
        str(paths["code_utils_dir"] / "code_defaults.json"),
        contents=code_defaults_content,
    )
    fs.create_dir(str(paths["code_finder_path"]))
    fs.create_file(str(paths["code_finder_path"] / "__init__.py"), contents="")
    fs.create_dir(str(paths["docs_path"]))

    # Also create code_defaults.json in the current working directory for CodeFinderConfig
    import os

    cwd = os.getcwd()
    fs.create_file(
        os.path.join(cwd, "code_defaults.json"), contents=code_defaults_content
    )

    yield paths


@pytest.fixture
def project_paths(code_utils_real_project_paths):
    """Provide real project paths for tests that need to create custom files."""
    return code_utils_real_project_paths


@pytest.fixture
def fake_project_structure(make_code_finder_paths_in_fake_fs, sample_docs_files):
    """
    Create a complete realistic fake project structure.
    Combines path mocking and sample docs for convenience.
    """
    # Both fixtures have already done their setup
    yield make_code_finder_paths_in_fake_fs
