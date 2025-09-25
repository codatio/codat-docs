import re
import sys
from pathlib import Path
from typing import List, Set, Dict
from .codat_code_config_models import CodeFinderConfig


class FileOperator:
    """Stateless file operations utility for CodeFinder."""

    def _has_code_snippets(self, file_path: str, target_languages: Set[str], config: CodeFinderConfig) -> bool:
        """
        Check if a markdown file contains code snippets with specified languages.
        
        Args:
            file_path (str): Path to the markdown file
            target_languages (set): Set of programming languages to look for
            config (CodeFinderConfig): Configuration containing all language definitions
            
        Returns:
            bool: True if file contains code snippets with target languages
        """
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            
            # Look for code blocks that start with ``` followed by language name
            # Pattern matches: ```python, ```javascript, ```csharp
            pattern = r'```(' + '|'.join(config.get_all_languages()) + r')\b'
            
            matches = re.findall(pattern, content, re.IGNORECASE)
            return len(matches) > 0
            
        except Exception as e:
            print(f"Error reading file {file_path}: {e}")
            return False
    
    def find_markdown_files_with_code(self, root_path_for_all_docs: Path, target_languages: Set[str], 
                                      config: CodeFinderConfig, output_file: Path = None) -> List[str]:
        """Find markdown files in docs directory that contain code snippets with specified languages."""
        # Check if docs directory exists
        if not root_path_for_all_docs.exists():
            print(f"Error: docs directory not found at {root_path_for_all_docs}")
            sys.exit(1)
        
        print(f"Searching for markdown files with code snippets in: {root_path_for_all_docs}")
        print(f"Looking for languages: {', '.join(sorted(target_languages))}")
        
        matching_files = []
        
        # Find all markdown files recursively using pathlib
        markdown_files = list(root_path_for_all_docs.rglob('*.md')) + list(root_path_for_all_docs.rglob('*.mdx'))
        
        for file_path in markdown_files:
            # Get relative path from docs directory for output (using forward slashes)
            rel_path = file_path.relative_to(root_path_for_all_docs).as_posix()
            
            # Check if file contains target code snippets
            if self._has_code_snippets(file_path, target_languages, config):
                matching_files.append(rel_path)
                print(f"Found: {rel_path}")
        
        # Sort the paths for better readability
        matching_files.sort()
        
        # Write to output file if provided
        if output_file:
            try:
                with open(output_file, 'w', encoding='utf-8') as f:
                    for path in matching_files:
                        f.write(path + '\n')
                
                print(f"\nSummary:")
                print(f"- Total markdown files processed: {len(matching_files)}")
                print(f"- Files with target code snippets: {len(matching_files)}")
                print(f"- Results saved to: {output_file}")
                
            except Exception as e:
                print(f"Error writing to output file: {e}")
                sys.exit(1)
        
        return matching_files
    
    def _has_imports(self, code_content: str, language: str, config: CodeFinderConfig) -> bool:
        """
        Check if code snippet has import statements at the top.
        
        Args:
            code_content (str): The code content to check
            language (str): Programming language (python, javascript, csharp)
            config (CodeFinderConfig): Configuration containing language patterns
            
        Returns:
            bool: True if code has imports, False otherwise
        """
        lines = code_content.strip().split('\n')
        
        # Get language config
        lang_config = config.get_language_config(language)
        if not lang_config:
            return False
        
        # Skip empty lines and comments at the top
        non_empty_lines = []
        for line in lines:
            stripped = line.strip()
            if stripped and not self._is_comment_line(stripped, language, config):
                non_empty_lines.append(stripped)
        
        if not non_empty_lines:
            return False
            
        # Check first few non-empty, non-comment lines for imports
        lines_to_check = non_empty_lines[:10]  # Check first 10 meaningful lines
        
        patterns = lang_config.import_patterns
        for line in lines_to_check:
            for pattern in patterns:
                if re.match(pattern, line, re.IGNORECASE):
                    return True
        
        return False
    
    def _is_comment_line(self, line: str, language: str, config: CodeFinderConfig) -> bool:
        """Check if a line is a comment based on language syntax."""
        lang_config = config.get_language_config(language)
        if not lang_config:
            return False
            
        patterns = lang_config.comment_patterns
        for pattern in patterns:
            if re.match(pattern, line):
                return True
        return False

    def extract_code(self, matching_files: List[str], target_languages: Set[str], temp_dir: Path, 
                     root_path_for_all_docs: Path, config: CodeFinderConfig) -> None:
        """
        Extract code snippets from matching files and save them to temp directory.
        Creates subdirectories for each programming language with complete/incomplete folders.
        """
        if not matching_files:
            print("No matching files found. Run find_files_with_code() first.")
            return
                           
        # Get language extensions from config
        lang_extensions = config.get_language_extensions()
        
        # Create subdirectories for each target language with complete/incomplete folders
        for lang in target_languages:
            lang_dir = temp_dir / lang
            complete_dir = lang_dir / 'complete'
            incomplete_dir = lang_dir / 'incomplete'
            
            complete_dir.mkdir(parents=True, exist_ok=True)
            incomplete_dir.mkdir(parents=True, exist_ok=True)
        
        print(f"Created temp directory structure at: {temp_dir}")
        
        # Counters for summary
        total_snippets = 0
        snippets_by_lang = {lang: {'complete': 0, 'incomplete': 0} for lang in target_languages}
        
        # Process each matching file
        for file_path in matching_files:
            full_file_path = root_path_for_all_docs / file_path
            
            try:
                with open(full_file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                
                # Extract code blocks using regex
                # Pattern: ```language followed by code until closing ```
                pattern = r'```(' + '|'.join(target_languages) + r')\b\n?(.*?)\n?```'
                matches = re.findall(pattern, content, re.DOTALL | re.IGNORECASE)
                
                for i, (language, code_content) in enumerate(matches):
                    language = language.lower()
                    
                    if language in target_languages:
                        # Clean up the code content
                        code_content = code_content.strip()
                        
                        if code_content:  # Only save non-empty snippets
                            # Check if snippet has imports
                            has_imports = self._has_imports(code_content, language, config)
                            subdirectory = 'complete' if has_imports else 'incomplete'
                            
                            # Generate filename based on source file and snippet index
                            source_name = Path(file_path).stem
                            source_name = re.sub(r'[^\w\-_]', '_', source_name)  # Clean filename
                            
                            filename = f"{source_name}_snippet_{i+1}{lang_extensions[language]}"
                            snippet_path = temp_dir / language / subdirectory / filename
                            
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
        print(f"- Snippets saved to: {temp_dir}")
        print(f"- Organization: Each language has 'complete' and 'incomplete' subdirectories")