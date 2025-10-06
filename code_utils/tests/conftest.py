"""
Shared pytest fixtures for code_utils tests.
"""

import pytest
from pathlib import Path
from unittest.mock import Mock

from code_utils.code_finder.codat_code_config_models import CodeFinderConfig, LanguageConfig
from code_utils.code_finder.file_operator import FileOperator


@pytest.fixture
def sample_config():
    """Provide a sample configuration for testing."""
    return CodeFinderConfig(
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





def get_sample_docs():
    """Get comprehensive sample docs dictionary."""
    return {
        'python_guide': """# Python SDK Guide

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
        'javascript_sdk': """# JavaScript SDK

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
        'csharp_examples': """# C# Examples

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
        'mixed_examples': """# Mixed Examples

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
        'no_code': """# Documentation Only

This file contains no code blocks.
Just regular markdown documentation.

## Features

- Feature 1
- Feature 2
- Feature 3
""",
        'webhook_setup': """# Webhook Setup

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
        'ruby_guide': """# Ruby Guide

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
"""
    }


@pytest.fixture
def fake_project_structure(fs):
    """Create a realistic fake project structure using pyfakefs."""
    # Create main project directories
    fs.create_dir("/fake_project/code_utils/code_finder")
    fs.create_dir("/fake_project/docs")
    
    # Create essential files
    fs.create_file("/fake_project/code_utils/__init__.py")
    fs.create_file("/fake_project/code_utils/code_finder/__init__.py")
    fs.create_file("/fake_project/code_utils/code_finder/code_finder.py")
    fs.create_file("/fake_project/code_utils/code_finder/file_operator.py")
    fs.create_file("/fake_project/code_utils/code_finder/codat_code_config_models.py")
    
    # Create sample markdown files with code blocks
    fs.create_file("/fake_project/docs/guide.md", contents="""
# Python Guide

Here's some Python code:

```python
import os
import sys

def hello():
    print("Hello World")
```

And some JavaScript:

```javascript
import React from 'react';
const greeting = () => {
    console.log("Hello from JS");
}
```
""")
    
    fs.create_file("/fake_project/docs/tutorial.mdx", contents="""
# C# Tutorial

```csharp
using System;
using System.Collections.Generic;

namespace Example {
    class Program {
        static void Main() {
            Console.WriteLine("Hello C#");
        }
    }
}
```
""")
    
    fs.create_file("/fake_project/docs/no-code.md", contents="""
# Documentation

This file has no code blocks.
Just regular markdown content.
""")
    
    return Path("/fake_project")




@pytest.fixture
def sample_markdown_files():
    """Provide sample markdown file paths for testing."""
    return [
        "guide.md",
        "tutorial.mdx", 
        "api/endpoints.md",
        "examples/python-examples.md"
    ]


@pytest.fixture
def sample_code_snippets():
    """Provide sample code snippets for testing."""
    return {
        "python": """
import requests
import json

def fetch_data():
    response = requests.get("https://api.example.com")
    return response.json()
""",
        "javascript": """
import axios from 'axios';

const fetchData = async () => {
    const response = await axios.get('https://api.example.com');
    return response.data;
};
""",
        "csharp": """
using System;
using System.Net.Http;
using System.Threading.Tasks;

public class DataService {
    private readonly HttpClient _client;
    
    public DataService() {
        _client = new HttpClient();
    }
}
"""
    }
