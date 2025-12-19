import re
import sys
import click
from pathlib import Path
from typing import List, Set
from .code_config import CodeFinderConfig


class FileOperator:
    """File operations utility for CodeFinder."""

    def _open_file_and_get_contents(self, file_path: Path) -> str:
        try:
            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
            return content

        except Exception as e:
            click.echo(f"Error reading file {file_path}: {e}", err=True)
            return False

    def _has_code_snippets(
        self, file_path: Path, target_languages: Set[str], config: CodeFinderConfig
    ) -> bool:
        """
        Check if a markdown file contains code snippets with specified languages.

        Args:
            file_path (str): Path to the markdown file
            target_languages (set): Set of programming languages to look for
            config (CodeFinderConfig): Configuration containing all language definitions

        Returns:
            bool: True if file contains code snippets with target languages
        """
        file_contents = self._open_file_and_get_contents(file_path)

        # Look for code blocks that start with ``` followed by language name
        # Pattern matches: ```python, ```javascript, ```csharp ,etc
        pattern = r"```(" + "|".join(target_languages) + r")\b"

        matches = re.findall(pattern, file_contents, re.IGNORECASE)
        return len(matches) > 0

    def _get_markdown_files_with_code_snippets(
        self,
        root_path_for_all_docs: Path,
        markdown_files: list[Path],
        target_languages: Set[str],
        config: CodeFinderConfig,
    ) -> list[str]:
        # Find all markdown files recursively using pathlib
        markdown_files_with_code_snippets = []

        for file_path in markdown_files:
            # Get relative path from docs directory for output (using forward slashes)
            rel_path = file_path.relative_to(root_path_for_all_docs).as_posix()

            # Check if file contains target code snippets
            if self._has_code_snippets(file_path, target_languages, config):
                markdown_files_with_code_snippets.append(rel_path)
                click.echo(f"Found: {rel_path}")

        # Sort the paths for better readability
        markdown_files_with_code_snippets.sort()
        return markdown_files_with_code_snippets

    def _write_list_of_md_files_with_code_to_output_file(
        self, output_file: Path, markdown_files_with_code_snips: list[Path]
    ):
        # Write to output file
        try:
            with open(output_file, "w", encoding="utf-8") as f:
                for path in markdown_files_with_code_snips:
                    f.write(path + "\n")

        except Exception as e:
            click.echo(f"Error writing to output file: {e}", err=True)
            sys.exit(1)

    def _print_summary_of_md_files_with_code_to_stdout(
        self,
        total_number_of_md_files: int,
        total_number_of_md_files_with_code: int,
        output_file: Path,
    ):
        click.echo(f"\nSummary:")
        click.echo(f"- Total markdown files found: {total_number_of_md_files}")
        click.echo(
            f"- Files with target code snippets: {total_number_of_md_files_with_code}"
        )
        click.echo(f"- Results saved to: {output_file}")

    def find_markdown_files_with_code(
        self,
        root_path_for_all_docs: Path,
        target_languages: Set[str],
        config: CodeFinderConfig,
        output_file: Path,
    ) -> List[str]:
        """Find markdown files in docs directory that contain code snippets with specified languages."""
        # Check if docs directory exists
        if not root_path_for_all_docs.exists():
            click.echo(
                f"Error: docs directory not found at {root_path_for_all_docs}", err=True
            )
            sys.exit(1)

        click.echo(
            f"Searching for markdown files with code snippets in: {root_path_for_all_docs}"
        )
        click.echo(f"Looking for languages: {', '.join(sorted(target_languages))}")

        all_markdown_files = list(root_path_for_all_docs.rglob("*.md")) + list(
            root_path_for_all_docs.rglob("*.mdx")
        )
        total_number_of_all_markdown_files = len(all_markdown_files)

        markdown_files_with_code_snips = self._get_markdown_files_with_code_snippets(
            root_path_for_all_docs, all_markdown_files, target_languages, config
        )
        total_number_of_all_markdown_files_with_code_snips = len(
            markdown_files_with_code_snips
        )

        self._write_list_of_md_files_with_code_to_output_file(
            output_file, markdown_files_with_code_snips
        )
        self._print_summary_of_md_files_with_code_to_stdout(
            total_number_of_all_markdown_files,
            total_number_of_all_markdown_files_with_code_snips,
            output_file,
        )

        return markdown_files_with_code_snips

    def _has_imports(
        self, code_content: str, language: str, config: CodeFinderConfig
    ) -> bool:
        """
        Check if code snippet has import statements at the top.

        Args:
            code_content (str): The code content to check
            language (str): Programming language (python, javascript, csharp)
            config (CodeFinderConfig): Configuration containing language patterns

        Returns:
            bool: True if code has imports, False otherwise
        """

        list_of_lines = code_content.splitlines()

        # Get language config
        lang_config = config.get_language_config(language)
        if not lang_config:
            return False

        # Skip empty lines and comments at the top
        meaningful_lines = []
        for line in list_of_lines:
            stripped = line.strip()
            if stripped and not self._is_comment_line(stripped, language, config):
                meaningful_lines.append(stripped)

        if not meaningful_lines:
            return False

        # Check first few non-empty, non-comment lines for imports
        lines_to_check = meaningful_lines[:10]  # Check first 10 meaningful lines

        patterns = lang_config.import_patterns
        for line in lines_to_check:
            for pattern in patterns:
                if re.match(pattern, line, re.IGNORECASE):
                    return True

        return False

    def _has_ellipsis(self, code_content: str) -> bool:
        """
        Check if code snippet has ellipsis ... anywhere

        """

        list_of_lines = code_content.splitlines()

        # Skip empty lines and comments at the top
        lines_which_are_soley_ellipsis = []
        for line in list_of_lines:
            stripped = line.strip()
            if stripped == "...":
                lines_which_are_soley_ellipsis.append(stripped)

        if not lines_which_are_soley_ellipsis:
            return False

        else:
            return True

    def _is_comment_line(
        self, line: str, language: str, config: CodeFinderConfig
    ) -> bool:
        """Check if a line is a comment based on language syntax."""
        lang_config = config.get_language_config(language)
        if not lang_config:
            return False

        patterns = lang_config.comment_patterns
        for pattern in patterns:
            if re.match(pattern, line):
                return True
        return

    def _make_dirs_for_target_langs(
        self, temporary_directory: Path, target_languages: set[str]
    ) -> None:
        for lang in target_languages:
            lang_dir = temporary_directory / lang
            complete_dir = lang_dir / "complete"
            incomplete_dir = lang_dir / "incomplete"

            complete_dir.mkdir(parents=True, exist_ok=True)
            incomplete_dir.mkdir(parents=True, exist_ok=True)

        click.echo(f"Created temp directory structure at: {temporary_directory}")

    def _process_markdown_files(
        self,
        markdown_files_with_code_snippets: list[Path],
        root_path_for_all_docs: Path,
        target_languages: set[str],
        config: CodeFinderConfig,
        temp_dir: Path,
        lang_extensions: dict,
        total_snippets: int,
        snippets_by_lang: dict,
    ) -> None:
        # Process each markdown file we've found to contain a code snippet
        for file_path in markdown_files_with_code_snippets:
            full_file_path = root_path_for_all_docs / file_path

            try:
                with open(full_file_path, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()

                # Extract code blocks using regex
                # Pattern: ```language followed by code until closing ```
                pattern = r"```(" + "|".join(target_languages) + r")\b\n?(.*?)\n?```"
                matches = re.findall(pattern, content, re.DOTALL | re.IGNORECASE)

                for i, (language, code_content) in enumerate(matches):
                    language = language.lower()

                    if language in target_languages:
                        # Clean up the code content
                        code_content = code_content.strip()

                        if code_content:  # Only save non-empty snippets
                            # Check if snippet has imports
                            has_imports = self._has_imports(
                                code_content, language, config
                            )
                            has_ellipsis = self._has_ellipsis(code_content)
                            subdirectory = (
                                "complete"
                                if (has_imports and not has_ellipsis)
                                else "incomplete"
                            )

                            # Generate filename based on source file and snippet index
                            source_name = Path(file_path).stem
                            source_name = re.sub(
                                r"[^\w\-_]", "_", source_name
                            )  # Clean filename

                            filename = f"{source_name}_snippet_{i + 1}{lang_extensions[language]}"
                            snippet_path = temp_dir / language / subdirectory / filename

                            # Save the code snippet
                            with open(
                                snippet_path, "w", encoding="utf-8"
                            ) as snippet_file:
                                snippet_file.write(code_content)

                            total_snippets += 1
                            snippets_by_lang[language][subdirectory] += 1

                            click.echo(
                                f"Extracted {language} snippet ({subdirectory}): {Path(language) / subdirectory / filename}"
                            )

            except Exception as e:
                click.echo(f"Error processing file {file_path}: {e}", err=True)
                continue

    def _print_extraction_summary_to_stdout(
        self, total_number_code_snippets, snippets_by_language: dict, temp_dir: Path
    ):
        click.echo(f"\nExtraction Summary:")
        click.echo(f"- Total code snippets extracted: {total_number_code_snippets}")
        for lang, counts in snippets_by_language.items():
            total_lang_snippets = counts["complete"] + counts["incomplete"]
            if total_lang_snippets > 0:
                click.echo(f"- {lang.capitalize()} snippets: {total_lang_snippets}")
                click.echo(f"  - Complete (with imports): {counts['complete']}")
                click.echo(f"  - Incomplete (no imports): {counts['incomplete']}")
        click.echo(f"- Snippets saved to: {temp_dir}")
        click.echo(
            f"- Organization: Each language has 'complete' and 'incomplete' subdirectories"
        )

    def extract_code(
        self,
        markdown_files_with_code_snippets: List[str],
        target_languages: Set[str],
        temp_dir: Path,
        root_path_for_all_docs: Path,
        config: CodeFinderConfig,
    ) -> None:
        """
        Extract code snippets from matching files and save them to temp directory.
        Creates subdirectories for each programming language with complete/incomplete folders.
        """
        if not markdown_files_with_code_snippets:
            click.echo(
                "No markdown files found with code snippets. Run find_files_with_code() first."
            )
            return

        # Get language extensions from config
        lang_extensions = config.get_language_extensions()

        # Create subdirectories for each target language with complete/incomplete folders
        self._make_dirs_for_target_langs(temp_dir, target_languages)

        # Counters for summary
        total_snippets = 0
        snippets_by_lang = {
            lang: {"complete": 0, "incomplete": 0} for lang in target_languages
        }

        self._process_markdown_files(
            markdown_files_with_code_snippets,
            root_path_for_all_docs,
            target_languages,
            config,
            temp_dir,
            lang_extensions,
            total_snippets,
            snippets_by_lang,
        )

        self._print_extraction_summary_to_stdout(
            total_snippets, snippets_by_lang, temp_dir
        )
