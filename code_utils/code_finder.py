import os
import sys
import re
import shutil
from pathlib import Path


class CodeFinder:

    all_languages = {'python', 'javascript', 'csharp', 'go'}
    
    def __init__(self, output_file_name: str = "files_with_code.txt", 
                 target_languages: set = None, deprecated_languages: set = None):
        self.matching_files = []
        
        # Set default values for language sets
        self.target_languages = target_languages if target_languages is not None else {'python', 'javascript', 'csharp'}
        self.deprecated_languages = deprecated_languages if deprecated_languages is not None else {'go'}

        self.script_dir = Path(__file__).resolve().parent
        self.temp_dir = self.script_dir / 'temp'
        self.project_root = self.script_dir.parent
        self.docs_path = self.project_root / 'docs'
        self.output_file = self.script_dir / output_file_name
        
    def has_code_snippets(self, file_path:str, target_languages:set):
        """
        Check if a markdown file contains code snippets with specified languages.
        
        Args:
            file_path (str): Path to the markdown file
            target_languages (set): Set of programming languages to look for
            
        Returns:
            bool: True if file contains code snippets with target languages
        """
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            
            # Look for code blocks that start with ``` followed by language name
            # Pattern matches: ```python, ```javascript, ```csharp, ```go
            pattern = r'```(' + '|'.join(CodeFinder.all_languages) + r')\b'
            
            matches = re.findall(pattern, content, re.IGNORECASE)
            return len(matches) > 0
            
        except Exception as e:
            print(f"Error reading file {file_path}: {e}")
            return False

    def find_files_with_code(self):
        """Find markdown files in docs directory that contain code snippets with specified languages."""
        
        # Check if docs directory exists
        if not self.docs_path.exists():
            print(f"Error: docs directory not found at {self.docs_path}")
            sys.exit(1)
        
        print(f"Searching for markdown files with code snippets in: {self.docs_path}")
        print(f"Looking for languages: {', '.join(sorted(self.target_languages))}")
        
        # Find all markdown files recursively using pathlib
        markdown_files = list(self.docs_path.rglob('*.md')) + list(self.docs_path.rglob('*.mdx'))
        
        for file_path in markdown_files:
            # Get relative path from docs directory for output (using forward slashes)
            rel_path = file_path.relative_to(self.docs_path).as_posix()
            
            # Check if file contains target code snippets
            if self.has_code_snippets(file_path, self.target_languages):
                self.matching_files.append(rel_path)
                print(f"Found: {rel_path}")
        
        # Sort the paths for better readability
        self.matching_files.sort()
        
        # Write to output file
        try:
            with open(self.output_file, 'w', encoding='utf-8') as f:
                
                for path in self.matching_files:
                    f.write(path + '\n')
            
            print(f"\nSummary:")
            print(f"- Total markdown files processed: {len(self.matching_files)}")
            print(f"- Files with target code snippets: {len(self.matching_files)}")
            print(f"- Results saved to: {self.output_file}")
            
        except Exception as e:
            print(f"Error writing to output file: {e}")
            sys.exit(1)
            
    def has_imports(self, code_content:str, language:str):
        """
        Check if code snippet has import statements at the top.
        
        Args:
            code_content (str): The code content to check
            language (str): Programming language (python, javascript, csharp)
            
        Returns:
            bool: True if code has imports, False otherwise
        """
        lines = code_content.strip().split('\n')
        
        # Skip empty lines and comments at the top
        non_empty_lines = []
        for line in lines:
            stripped = line.strip()
            if stripped and not self._is_comment_line(stripped, language):
                non_empty_lines.append(stripped)
        
        if not non_empty_lines:
            return False
            
        # Check first few non-empty, non-comment lines for imports
        lines_to_check = non_empty_lines[:10]  # Check first 10 meaningful lines
        
        import_patterns = {
            'python': [r'^import\s+', r'^from\s+.+\s+import\s+'],
            'javascript': [r'^import\s+', r'^const\s+.+=\s+require\(', r'^require\('],
            'csharp': [r'^using\s+']
        }
        
        patterns = import_patterns.get(language, [])
        for line in lines_to_check:
            for pattern in patterns:
                if re.match(pattern, line, re.IGNORECASE):
                    return True
        
        return False
    
    def _is_comment_line(self, line:str, language:str):
        """Check if a line is a comment based on language syntax."""
        comment_patterns = {
            'python': [r'^\s*#'],
            'javascript': [r'^\s*//', r'^\s*/\*'],
            'csharp': [r'^\s*//', r'^\s*/\*']
        }
        
        patterns = comment_patterns.get(language, [])
        for pattern in patterns:
            if re.match(pattern, line):
                return True
        return False

    def extract_code(self):
        """
        Extract code snippets from matching files and save them to temp directory.
        Creates subdirectories for each programming language with complete/incomplete folders.
        """
        if not self.matching_files:
            print("No matching files found. Run find_files_with_code() first.")
            return
                    
        # Language to file extension mapping
        lang_extensions = {
            'python': '.py',
            'javascript': '.ts',
            'csharp': '.cs'
        }
        
        
        # Create subdirectories for each target language with complete/incomplete folders
        for lang in self.target_languages:
            lang_dir = self.temp_dir / lang
            complete_dir = lang_dir / 'complete'
            incomplete_dir = lang_dir / 'incomplete'
            
            complete_dir.mkdir(parents=True, exist_ok=True)
            incomplete_dir.mkdir(parents=True, exist_ok=True)
        
        print(f"Created temp directory structure at: {self.temp_dir}")
        
        # Counters for summary
        total_snippets = 0
        snippets_by_lang = {lang: {'complete': 0, 'incomplete': 0} for lang in self.target_languages}
        
        # Process each matching file
        for file_path in self.matching_files:
            full_file_path = self.docs_path / file_path
            
            try:
                with open(full_file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                
                # Extract code blocks using regex
                # Pattern: ```language followed by code until closing ```
                pattern = r'```(' + '|'.join(self.target_languages) + r')\b\n?(.*?)\n?```'
                matches = re.findall(pattern, content, re.DOTALL | re.IGNORECASE)
                
                for i, (language, code_content) in enumerate(matches):
                    language = language.lower()
                    
                    if language in self.target_languages:
                        # Clean up the code content
                        code_content = code_content.strip()
                        
                        if code_content:  # Only save non-empty snippets
                            # Check if snippet has imports
                            has_imports = self.has_imports(code_content, language)
                            subdirectory = 'complete' if has_imports else 'incomplete'
                            
                            # Generate filename based on source file and snippet index
                            source_name = Path(file_path).stem
                            source_name = re.sub(r'[^\w\-_]', '_', source_name)  # Clean filename
                            
                            filename = f"{source_name}_snippet_{i+1}{lang_extensions[language]}"
                            snippet_path = self.temp_dir / language / subdirectory / filename
                            
                            # Save the code snippet
                            with open(snippet_path, 'w', encoding='utf-8') as snippet_file:
                                snippet_file.write(code_content)
                            
                            total_snippets += 1
                            snippets_by_lang[language][subdirectory] += 1
                            
                            print(f"Extracted {language} snippet ({subdirectory}): {Path(language) / subdirectory / filename}")
                            
            except Exception as e:
                print(f"Error processing file {file_path}: {e}")
                continue
        
        # Print summary
        print(f"\nExtraction Summary:")
        print(f"- Total code snippets extracted: {total_snippets}")
        for lang, counts in snippets_by_lang.items():
            total_lang_snippets = counts['complete'] + counts['incomplete']
            if total_lang_snippets > 0:
                print(f"- {lang.capitalize()} snippets: {total_lang_snippets}")
                print(f"  - Complete (with imports): {counts['complete']}")
                print(f"  - Incomplete (no imports): {counts['incomplete']}")
        print(f"- Snippets saved to: {self.temp_dir}")
        print(f"- Organization: Each language has 'complete' and 'incomplete' subdirectories")