"""
Code Checker for validating code snippets across Python, TypeScript, and C#.
This module builds and runs a Docker container to validate complete code snippets.
"""

import os
import sys
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


