"""
Code Checker for validating code snippets across Python, TypeScript, and C#.
This module builds and runs a Docker container to validate complete code snippets.
"""

import os
import sys
import subprocess
from pathlib import Path
from typing import Dict, List, Tuple, Optional
import docker


class CodeChecker:
    """
    A class for validating code snippets by building and running validation commands
    in a Docker container across Python, TypeScript, and C# environments.
    """

    def __init__(self, base_dir: Optional[Path] = None):
        """
        Initialize the CodeChecker.
        
        Args:
            base_dir: Base directory path. Defaults to the directory containing this file.
        """
        self.base_dir = base_dir or Path(__file__).parent
        self.docker_dir = self.base_dir / "docker"
        self.container_name = "code-snippets:latest"
        
        try:
            self.docker_client = docker.from_env()
        except docker.errors.DockerException as e:
            raise RuntimeError(f"Failed to connect to Docker: {str(e)}. Make sure Docker is running.")

    def _build_docker_image(self) -> Tuple[bool, str]:
        """
        Build the Docker image using docker-py with real-time streaming output.
        
        Returns:
            Tuple of (success, message)
        """
        print("🔨 Building Docker image...")
        print("This container includes:")
        print("  - Python 3.11")
        print("  - Node.js 18.x with TypeScript")
        print("  - .NET 8.0 SDK")
        print("  - Complete code snippets organized by language")
        print()
        sys.stdout.flush()  # Ensure output is shown immediately
        
        dockerfile_path = self.docker_dir / "Dockerfile"
        if not dockerfile_path.exists():
            return False, f"Dockerfile not found: {dockerfile_path}"
        
        try:
            # Build the image with streaming output
            # Use decode=True to get a streaming generator
            build_logs = self.docker_client.api.build(
                path=str(self.base_dir),
                dockerfile="docker/Dockerfile",
                tag=self.container_name,
                rm=True,
                forcerm=True,
                decode=True  # This enables streaming
            )
            
            # Stream build logs in real-time
            image_id = None
            for log_entry in build_logs:
                if 'stream' in log_entry:
                    # Print build output in real-time
                    output = log_entry['stream'].rstrip('\n')
                    if output:
                        print(output)
                        sys.stdout.flush()  # Ensure immediate output
                        
                elif 'aux' in log_entry and 'ID' in log_entry['aux']:
                    # Capture the final image ID
                    image_id = log_entry['aux']['ID']
                    
                elif 'error' in log_entry:
                    error_msg = log_entry['error']
                    print(f"ERROR: {error_msg}")
                    sys.stdout.flush()
                    return False, f"Docker build failed: {error_msg}"
            
            print()
            print("✅ Docker image built successfully!")
            return True, f"Docker build completed successfully. Image ID: {image_id[:12] if image_id else 'unknown'}"
            
        except docker.errors.BuildError as e:
            print()
            print("❌ Docker build failed!")
            error_msg = f"Docker build failed: {str(e)}"
            
            # Try to get detailed error information
            if hasattr(e, 'build_log') and e.build_log:
                print("\nBuild log details:")
                for log_entry in e.build_log:
                    if isinstance(log_entry, dict):
                        if 'stream' in log_entry:
                            print(log_entry['stream'].rstrip('\n'))
                        elif 'error' in log_entry:
                            print(f"ERROR: {log_entry['error']}")
                            
            return False, error_msg
            
        except docker.errors.APIError as e:
            print(f"❌ Docker API error: {str(e)}")
            return False, f"Docker API error: {str(e)}"
        except Exception as e:
            print(f"❌ Unexpected error during build: {str(e)}")
            return False, f"Unexpected error during build: {str(e)}"

    def _validate_python_snippets(self) -> Tuple[bool, str]:
        """
        Run pyright validation on Python snippets inside the container.
        
        Returns:
            Tuple of (success, output/error message)
        """
        print("🐍 Validating Python snippets with pyright...")
        print("-" * 60)
        
        container = None
        try:
            # Run the container in detached mode so we can get logs
            container = self.docker_client.containers.run(
                self.container_name,
                "bash -c 'cd python/snippets && pyright .'",
                detach=True,
                stdout=True,
                stderr=True
            )
            
            # Wait for completion and get logs
            result = container.wait()
            logs = container.logs(stdout=True, stderr=True).decode('utf-8')
            
            # Print the output
            if logs.strip():
                print(logs)
            
            print("-" * 60)
            
            # Check exit status
            exit_code = result['StatusCode']
            if exit_code == 0:
                print("  ✅ Python validation passed!")
                return True, "Validation passed"
            else:
                print(f"  ❌ Python validation failed (exit code {exit_code})")
                return False, f"Validation failed with exit code {exit_code}"
            
        except Exception as e:
            print(f"  ❌ Python validation failed with error: {str(e)}")
            return False, f"Validation failed with error: {str(e)}"
        finally:
            # Clean up the container
            if container:
                try:
                    container.remove()
                except:
                    pass  # Container might already be removed

    def _validate_typescript_snippets(self) -> Tuple[bool, str]:
        """
        Run TypeScript compiler on JavaScript/TypeScript snippets inside the container.
        
        Returns:
            Tuple of (success, output/error message)
        """
        print("📜 Validating TypeScript snippets with tsc...")
        print("-" * 60)
        
        container = None
        try:
            # Run the container in detached mode so we can get logs
            container = self.docker_client.containers.run(
                self.container_name,
                "bash -c 'cd javascript && tsc --noEmit'",
                detach=True,
                stdout=True,
                stderr=True
            )
            
            # Wait for completion and get logs
            result = container.wait()
            logs = container.logs(stdout=True, stderr=True).decode('utf-8')
            
            # Print the output
            if logs.strip():
                print(logs)
            
            print("-" * 60)
            
            # Check exit status
            exit_code = result['StatusCode']
            if exit_code == 0:
                print("  ✅ TypeScript validation passed!")
                return True, "Validation passed"
            else:
                print(f"  ❌ TypeScript validation failed (exit code {exit_code})")
                return False, f"Validation failed with exit code {exit_code}"
            
        except Exception as e:
            print(f"  ❌ TypeScript validation failed with error: {str(e)}")
            return False, f"Validation failed with error: {str(e)}"
        finally:
            # Clean up the container
            if container:
                try:
                    container.remove()
                except:
                    pass  # Container might already be removed

    def _validate_csharp_snippets(self) -> Tuple[bool, str]:
        """
        Run C# validation script inside the container.
        
        Returns:
            Tuple of (success, output/error message)
        """
        print("🔷 Validating C# snippets...")
        print("-" * 60)
        
        container = None
        try:
            # Run the container in detached mode so we can get logs
            container = self.docker_client.containers.run(
                self.container_name,
                "bash -c 'cd /workspace/code-snippets/csharp && ./validate-csharp-snippets.sh'",
                detach=True,
                stdout=True,
                stderr=True
            )
            
            # Wait for completion and get logs
            result = container.wait()
            logs = container.logs(stdout=True, stderr=True).decode('utf-8')
            
            # Print the output
            if logs.strip():
                print(logs)
            
            print("-" * 60)
            
            # Check exit status
            exit_code = result['StatusCode']
            if exit_code == 0:
                print("  ✅ C# validation passed!")
                return True, "Validation passed"
            else:
                print(f"  ❌ C# validation failed (exit code {exit_code})")
                return False, f"Validation failed with exit code {exit_code}"
            
        except Exception as e:
            print(f"  ❌ C# validation failed with error: {str(e)}")
            return False, f"Validation failed with error: {str(e)}"
        finally:
            # Clean up the container
            if container:
                try:
                    container.remove()
                except:
                    pass  # Container might already be removed

    def check_complete_snippets(self) -> Dict[str, Dict[str, any]]:
        """
        Build Docker image and validate all complete code snippets.
        
        Returns:
            Dictionary with validation results for each language:
            {
                'build': {'success': bool, 'message': str},
                'python': {'success': bool, 'output': str},
                'typescript': {'success': bool, 'output': str},
                'csharp': {'success': bool, 'output': str}
            }
        """
        results = {
            'build': {'success': False, 'message': ''},
            'python': {'success': False, 'output': ''},
            'typescript': {'success': False, 'output': ''},
            'csharp': {'success': False, 'output': ''}
        }
        
        print("🚀 Starting code snippet validation...")
        print("=" * 60)
        
        # Step 1: Build Docker image
        build_success, build_message = self._build_docker_image()
        results['build']['success'] = build_success
        results['build']['message'] = build_message
        
        if not build_success:
            print(f"❌ Docker build failed: {build_message}")
            return results
        
        print("=" * 60)
        
        # Step 2: Validate Python snippets
        python_success, python_output = self._validate_python_snippets()
        results['python']['success'] = python_success
        results['python']['output'] = python_output
        
        # Step 3: Validate TypeScript snippets
        typescript_success, typescript_output = self._validate_typescript_snippets()
        results['typescript']['success'] = typescript_success
        results['typescript']['output'] = typescript_output
        
        # Step 4: Validate C# snippets
        csharp_success, csharp_output = self._validate_csharp_snippets()
        results['csharp']['success'] = csharp_success
        results['csharp']['output'] = csharp_output
        
        # Summary
        print("=" * 60)
        print("📊 Validation Summary:")
        
        total_passed = sum([
            python_success, 
            typescript_success, 
            csharp_success
        ])
        
        if total_passed == 3:
            print("🎉 All validations passed!")
        else:
            print(f"⚠️  {total_passed}/3 validations passed")
            
            # Show which validations failed (details already shown above)
            failed_validations = []
            if not python_success:
                failed_validations.append("Python")
            if not typescript_success:
                failed_validations.append("TypeScript")
            if not csharp_success:
                failed_validations.append("C#")
            
            print(f"❌ Failed: {', '.join(failed_validations)}")
        
        return results

    def check_incomplete_snippets(self, limit: int = 10, languages: Optional[set] = None) -> Dict[str, Dict[str, any]]:
        """
        Check and analyze incomplete code snippets that are missing imports or have incomplete structure.
        
        Args:
            limit: Maximum number of files to analyze per language (default: 10)
            languages: Set of programming languages to analyze. If None, analyzes all languages.
                      Valid options: {'python', 'typescript', 'csharp'}
        
        Returns:
            Dictionary with analysis results for each language:
            {
                'python': {'count': int, 'files': List[str], 'issues': List[str]},
                'typescript': {'count': int, 'files': List[str], 'issues': List[str]},
                'csharp': {'count': int, 'files': List[str], 'issues': List[str]}
            }
        """
        print("🔍 Analyzing incomplete code snippets...")
        print(f"📋 Analysis limit: {limit} files per language")
        if languages:
            print(f"🎯 Target languages: {', '.join(sorted(languages))}")
        else:
            print("🎯 Target languages: all (python, typescript, csharp)")
        
        # Check WSL and Cursor CLI prerequisites
        print("\n🔧 Checking prerequisites...")
        wsl_ready = self._check_wsl_cursor_prerequisites()
        if not wsl_ready:
            print("❌ Prerequisites not met. Cannot proceed with analysis.")
            return {
                'python': {'count': 0, 'files': [], 'issues': ['Prerequisites not met']},
                'typescript': {'count': 0, 'files': [], 'issues': ['Prerequisites not met']},
                'csharp': {'count': 0, 'files': [], 'issues': ['Prerequisites not met']}
            }
        
        print("=" * 60)
        
        results = {
            'python': {'count': 0, 'files': [], 'issues': []},
            'typescript': {'count': 0, 'files': [], 'issues': []},
            'csharp': {'count': 0, 'files': [], 'issues': []}
        }
        
        # Define the languages and their corresponding directories/extensions
        all_languages = {
            'python': {'dir': 'python', 'extension': '.py'},
            'typescript': {'dir': 'javascript', 'extension': '.ts'},
            'csharp': {'dir': 'csharp', 'extension': '.cs'}
        }
        
        # Filter languages based on user selection
        if languages:
            # Validate language names
            invalid_languages = languages - set(all_languages.keys())
            if invalid_languages:
                print(f"⚠️  Warning: Invalid language(s) specified: {', '.join(invalid_languages)}")
                print(f"   Valid options are: {', '.join(all_languages.keys())}")
            
            # Filter to only requested languages
            target_languages = {lang: info for lang, info in all_languages.items() if lang in languages}
        else:
            target_languages = all_languages
        
        temp_dir = self.base_dir / "temp"
        
        for lang_name, lang_info in target_languages.items():
            incomplete_dir = temp_dir / lang_info['dir'] / 'incomplete'
            
            print(f"📁 {lang_name.upper()} incomplete snippets:")
            
            if incomplete_dir.exists() and incomplete_dir.is_dir():
                # Get all files with the appropriate extension
                all_files = list(incomplete_dir.glob(f"*{lang_info['extension']}"))
                all_files.sort()  # Sort for consistent output
                
                # Apply limit to files to analyze
                files_to_analyze = all_files[:limit]
                
                total_count = len(all_files)
                analyzed_count = len(files_to_analyze)
                
                results[lang_name]['count'] = analyzed_count
                results[lang_name]['files'] = [f.name for f in files_to_analyze]
                
                if all_files:
                    if total_count > limit:
                        print(f"   Found {total_count} incomplete {lang_name} files (analyzing first {analyzed_count}):")
                    else:
                        print(f"   Found {total_count} incomplete {lang_name} files:")
                    
                    # Analyze each file within the limit
                    for file in files_to_analyze:
                        print(f"   - {file.name}")
                        # Perform actual analysis of the incomplete snippet
                        issues = self._analyze_incomplete_snippet(file, lang_name)
                        if issues:
                            results[lang_name]['issues'].extend(issues)
                    
                    if total_count > limit:
                        print(f"   ... and {total_count - limit} more files (not analyzed due to limit)")
                else:
                    print(f"   No incomplete {lang_name} files found")
            else:
                print(f"   Directory not found: {incomplete_dir}")
            
            print()  # Add spacing between languages
        
        # Summary
        analyzed_languages = list(target_languages.keys())
        total_analyzed = sum(results[lang]['count'] for lang in analyzed_languages)
        print("=" * 60)
        print("📊 Summary:")
        print(f"   Total incomplete snippets analyzed: {total_analyzed}")
        for lang in analyzed_languages:
            count = results[lang]['count']
            print(f"   {lang.capitalize()}: {count} files analyzed")
        
        return results

    def _check_wsl_cursor_prerequisites(self) -> bool:
        """
        Check that WSL is available, cursor CLI is installed, and user is signed in.
        
        Returns:
            bool: True if all prerequisites are met, False otherwise
        """
        try:
            # Step 1: Check WSL is available
            print("   🔍 Testing WSL availability...")
            wsl_test = subprocess.run(
                ["wsl", "echo", "WSL is working"],
                capture_output=True,
                text=True,
                timeout=10
            )
            
            if wsl_test.returncode != 0:
                print("   ❌ WSL is not available or not working properly")
                print(f"      Error: {wsl_test.stderr.strip()}")
                return False
            else:
                print("   ✅ WSL is available and working")
            
            # Step 2: Check cursor CLI is installed
            print("   🔍 Checking cursor CLI installation...")
            cursor_check = subprocess.run(
                ["wsl", "cursor", "--version"],
                capture_output=True,
                text=True,
                timeout=10
            )
            
            if cursor_check.returncode != 0:
                print("   ❌ Cursor CLI is not installed in WSL")
                print("      Please install cursor CLI in your WSL environment")
                print("      You can install it with: curl -fsSL https://cursor.sh/install | sh")
                return False
            else:
                version = cursor_check.stdout.strip()
                print(f"   ✅ Cursor CLI is installed: {version}")
                
            # Step 2b: Check cursor chat command is available
            print("   🔍 Checking cursor chat command...")
            chat_check = subprocess.run(
                ["wsl", "cursor", "chat", "--help"],
                capture_output=True,
                text=True,
                timeout=10
            )
            
            if chat_check.returncode != 0:
                print("   ❌ Cursor chat command not available")
                print("      Please ensure you have the latest version of cursor CLI")
                return False
            else:
                print("   ✅ Cursor chat command is available")
            
            # Step 3: Check if user is signed in
            print("   🔍 Checking cursor authentication...")
            auth_check = subprocess.run(
                ["wsl", "cursor", "auth", "status"],
                capture_output=True,
                text=True,
                timeout=10
            )
            
            if auth_check.returncode != 0:
                print("   ❌ Not signed in to cursor")
                print("      Please sign in with: cursor auth login")
                return False
            else:
                auth_info = auth_check.stdout.strip()
                print(f"   ✅ Signed in to cursor: {auth_info}")
            
            print("   🎉 All prerequisites met!")
            return True
            
        except subprocess.TimeoutExpired:
            print("   ❌ Timeout while checking prerequisites")
            return False
        except FileNotFoundError:
            print("   ❌ WSL command not found. Please ensure WSL is installed.")
            return False
        except Exception as e:
            print(f"   ❌ Error checking prerequisites: {str(e)}")
            return False

    def _analyze_incomplete_snippet(self, file_path: Path, language: str) -> List[str]:
        """
        Analyze a single incomplete code snippet file to identify issues.
        
        Args:
            file_path: Path to the incomplete snippet file
            language: Programming language (python, typescript, csharp)
            
        Returns:
            List of issues found in the snippet (e.g., missing imports, syntax errors, etc.)
        """
        # Copy file to WSL, echo name, then remove it
        try:
            # Convert Windows path to WSL-accessible path
            windows_path = str(file_path).replace('\\', '/')
            wsl_windows_path = f"/mnt/c{windows_path[2:]}"  # Convert C:\... to /mnt/c/...
            wsl_temp_path = f"/tmp/{file_path.name}"
            
            # Step 1: Copy file to WSL temp directory
            copy_result = subprocess.run(
                ["wsl", "cp", wsl_windows_path, wsl_temp_path],
                capture_output=True,
                text=True,
                timeout=10
            )
            
            if copy_result.returncode == 0:
                print(f"     ✅ Copied {file_path.name} to WSL")
                
                # Step 2: Read the file content and analyze with cursor CLI
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        file_content = f.read()
                except Exception as e:
                    print(f"     ❌ Error reading file: {e}")
                    return [f"Failed to read {file_path.name}"]
                
                analysis_question = (
                    f"IMPORTANT: DO NOT EXECUTE OR RUN THIS CODE. Please perform STATIC ANALYSIS ONLY.\n\n"
                    f"The following is an incomplete snippet of {language} code from {file_path.name}. "
                    f"Please analyze the code WITHOUT running it. As best you can infer, is the code "
                    f"syntactically correct and logically sound, bearing in mind that imports and some "
                    f"variable assignments may be missing? The code will be utilizing the appropriate "
                    f"codat sdk for the given extension @https://github.com/codatio\n\n"
                    f"Please provide STATIC ANALYSIS only - check for:\n"
                    f"- Syntax correctness\n"
                    f"- Logical flow\n"
                    f"- Potential issues\n"
                    f"- Missing imports that would be needed\n\n"
                    f"Code to analyze:\n```{language}\n{file_content}\n```"
                )
                
                # Try cursor CLI without the problematic flags first
                print(f"     🔍 Testing cursor CLI command structure...")
                
                # Test 1: Try basic cursor chat command
                test_result = subprocess.run(
                    ["wsl", "cursor", "chat", "--help"],
                    capture_output=True,
                    text=True,
                    timeout=10
                )
                print(f"     🔍 Help command result: {test_result.returncode}")
                if test_result.stdout:
                    print(f"     🔍 Available options: {test_result.stdout[:200]}...")
                
                # Try the analysis with just basic chat command
                analysis_result = subprocess.run(
                    ["wsl", "cursor", "chat", analysis_question],
                    capture_output=True,
                    text=True,
                    timeout=60  # Increased timeout for LLM response
                )
                
                # If that doesn't work, try using a temp file approach
                if analysis_result.returncode != 0 or not analysis_result.stdout.strip():
                    print(f"     🔍 Basic chat failed, trying file-based approach...")
                    
                    # Write question to a temp file in WSL
                    question_file = f"/tmp/question_{file_path.name}.txt"
                    
                    # Create the question file
                    write_result = subprocess.run(
                        ["wsl", "bash", "-c", f"echo '{analysis_question}' > {question_file}"],
                        capture_output=True,
                        text=True,
                        timeout=10
                    )
                    
                    if write_result.returncode == 0:
                        # Try cursor with file input (if such option exists)
                        analysis_result = subprocess.run(
                            ["wsl", "cursor", "chat", f"$(cat {question_file})"],
                            capture_output=True,
                            text=True,
                            timeout=60
                        )
                        
                        # Clean up question file
                        subprocess.run(["wsl", "rm", question_file], capture_output=True, timeout=5)
                
                if analysis_result.returncode == 0:
                    analysis_output = analysis_result.stdout.strip()
                    print(f"     🤖 Cursor Analysis:")
                    print(f"     🔍 Debug: Return code: {analysis_result.returncode}")
                    print(f"     🔍 Debug: Stdout length: {len(analysis_output)}")
                    print(f"     🔍 Debug: Stderr: '{analysis_result.stderr.strip()}'")
                    
                    if analysis_output:
                        # Format the output for better readability
                        for line in analysis_output.split('\n'):
                            if line.strip():
                                print(f"         {line.strip()}")
                        
                        # Extract potential issues for return value
                        if "error" in analysis_output.lower() or "issue" in analysis_output.lower():
                            issues_found = [f"Cursor identified potential issues in {file_path.name}"]
                        else:
                            issues_found = []
                    else:
                        print(f"         ⚠️  No output received from cursor CLI")
                        print(f"         🔍 Command was: cursor chat -p --output-format text '{analysis_question}'")
                        issues_found = [f"No analysis output for {file_path.name}"]
                else:
                    print(f"     ❌ Analysis Error: {analysis_result.stderr.strip()}")
                    print(f"     🔍 Debug: Return code: {analysis_result.returncode}")
                    issues_found = [f"Failed to analyze {file_path.name}"]
                
                # Step 3: Remove the file from WSL
                rm_result = subprocess.run(
                    ["wsl", "rm", wsl_temp_path],
                    capture_output=True,
                    text=True,
                    timeout=10
                )
                
                if rm_result.returncode == 0:
                    print(f"     🗑️  Removed {file_path.name} from WSL")
                    return issues_found
                else:
                    print(f"     Remove Error: {rm_result.stderr.strip()}")
                    return issues_found  # Still return analysis results even if cleanup fails
                    
            else:
                print(f"     Copy Error: {copy_result.stderr.strip()}")
                return [f"Failed to copy {file_path.name} to WSL"]
                
        except subprocess.TimeoutExpired:
            print(f"     CLI Timeout when processing {file_path.name}")
            # Attempt cleanup on timeout
            try:
                subprocess.run(["wsl", "rm", f"/tmp/{file_path.name}"], 
                             capture_output=True, timeout=5)
            except:
                pass  # Ignore cleanup errors
            return [f"Timeout analyzing {file_path.name}"]
        except Exception as e:
            print(f"     CLI Exception: {str(e)}")
            # Attempt cleanup on exception
            try:
                subprocess.run(["wsl", "rm", f"/tmp/{file_path.name}"], 
                             capture_output=True, timeout=5)
            except:
                pass  # Ignore cleanup errors
            return [f"Exception analyzing {file_path.name}: {str(e)}"]