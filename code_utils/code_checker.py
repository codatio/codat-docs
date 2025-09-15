"""
Code Checker for validating code snippets across Python, TypeScript, and C#.
This module builds and runs a Docker container to validate complete code snippets.
"""

import os
import subprocess
import sys
from pathlib import Path
from typing import Dict, List, Tuple, Optional


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
        self.build_script = self.docker_dir / "build.bat"
        self.container_name = "code-snippets:latest"
        
    def _run_command(self, command: List[str], cwd: Optional[Path] = None, capture_output: bool = True) -> Tuple[int, str, str]:
        """
        Run a command and return the exit code, stdout, and stderr.
        
        Args:
            command: Command and arguments to run
            cwd: Working directory for the command
            capture_output: Whether to capture output or let it stream to console
            
        Returns:
            Tuple of (exit_code, stdout, stderr)
        """
        try:
            if capture_output:
                result = subprocess.run(
                    command,
                    cwd=cwd,
                    capture_output=True,
                    text=True,
                    timeout=300  # 5 minute timeout
                )
                return result.returncode, result.stdout, result.stderr
            else:
                # Stream output to console
                result = subprocess.run(command, cwd=cwd, timeout=300)
                return result.returncode, "", ""
        except subprocess.TimeoutExpired:
            return 124, "", "Command timed out after 300 seconds"
        except Exception as e:
            return 1, "", f"Failed to run command: {str(e)}"

    def _build_docker_image(self) -> Tuple[bool, str]:
        """
        Build the Docker image using build.bat.
        
        Returns:
            Tuple of (success, message)
        """
        print("🔨 Building Docker image...")
        
        if not self.build_script.exists():
            return False, f"Build script not found: {self.build_script}"
        
        # Run build.bat from the docker directory
        exit_code, stdout, stderr = self._run_command(
            [str(self.build_script)], 
            cwd=self.docker_dir,
            capture_output=True
        )
        
        if exit_code == 0:
            print("✅ Docker image built successfully!")
            return True, "Docker build completed successfully"
        else:
            error_msg = f"Docker build failed with exit code {exit_code}"
            if stderr:
                error_msg += f"\nSTDERR: {stderr}"
            if stdout:
                error_msg += f"\nSTDOUT: {stdout}"
            return False, error_msg

    def _validate_python_snippets(self) -> Tuple[bool, str]:
        """
        Run pyright validation on Python snippets inside the container.
        
        Returns:
            Tuple of (success, output/error message)
        """
        print("🐍 Validating Python snippets with pyright...")
        print("-" * 60)
        
        command = [
            "docker", "run", "--rm", self.container_name,
            "bash", "-c", "cd python/snippets && pyright ."
        ]
        
        exit_code, _, _ = self._run_command(command, capture_output=False)
        
        print("-" * 60)
        if exit_code == 0:
            print("  ✅ Python validation passed!")
            return True, "Validation passed"
        else:
            print(f"  ❌ Python validation failed (exit code {exit_code})")
            return False, f"Validation failed with exit code {exit_code}"

    def _validate_typescript_snippets(self) -> Tuple[bool, str]:
        """
        Run TypeScript compiler on JavaScript/TypeScript snippets inside the container.
        
        Returns:
            Tuple of (success, output/error message)
        """
        print("📜 Validating TypeScript snippets with tsc...")
        print("-" * 60)
        
        command = [
            "docker", "run", "--rm", self.container_name,
            "bash", "-c", "cd javascript && tsc --noEmit"
        ]
        
        exit_code, _, _ = self._run_command(command, capture_output=False)
        
        print("-" * 60)
        if exit_code == 0:
            print("  ✅ TypeScript validation passed!")
            return True, "Validation passed"
        else:
            print(f"  ❌ TypeScript validation failed (exit code {exit_code})")
            return False, f"Validation failed with exit code {exit_code}"

    def _validate_csharp_snippets(self) -> Tuple[bool, str]:
        """
        Run C# validation script inside the container.
        
        Returns:
            Tuple of (success, output/error message)
        """
        print("🔷 Validating C# snippets...")
        print("-" * 60)
        
        command = [
            "docker", "run", "--rm", self.container_name,
            "bash", "-c", "cd /workspace/code-snippets/csharp && ./validate-csharp-snippets.sh"
        ]
        
        exit_code, _, _ = self._run_command(command, capture_output=False)
        
        print("-" * 60)
        if exit_code == 0:
            print("  ✅ C# validation passed!")
            return True, "Validation passed"
        else:
            print(f"  ❌ C# validation failed (exit code {exit_code})")
            return False, f"Validation failed with exit code {exit_code}"

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


