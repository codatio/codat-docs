"""
Docker Wrapper for code validation across multiple programming languages.
This module provides a configurable Docker interface for building and running validation containers.
"""

import sys
import os
from pathlib import Path
from typing import Tuple, Optional
import docker
from docker.errors import DockerException, BuildError, APIError, ImageNotFound

from .codat_code_checker_config_models import CodeCheckerConfig, LanguageDockerConfig


class DockerOperator:
    """
    A configurable wrapper around Docker functionality for code validation.
    This class uses dependency injection via a configuration object to support
    multiple languages and Docker setups.
    """

    def __init__(self, config: CodeCheckerConfig, base_dir: Optional[Path] = None):
        """
        Initialize the DockerOperator with configuration.
        
        Args:
            config: Configuration object containing Docker settings for each language
            base_dir: Base directory path. Defaults to the directory containing this file.
        """
        self.config = config
        self.base_dir = base_dir or Path(__file__).parent
        
        try:
            self.docker_client = docker.from_env()
        except DockerException as e:
            raise RuntimeError(f"Failed to connect to Docker: {str(e)}. Make sure Docker is running.")

    def build_language_image(self, language: str) -> Tuple[bool, str]:
        """
        Build a Docker image for a specific language.
        
        Args:
            language: The programming language ('python', 'javascript', 'csharp')
            
        Returns:
            Tuple of (success, message)
        """
        lang_config = self.config.get_language_config(language)
        if not lang_config:
            return False, f"Unsupported language: {language}"
        
        docker_path = lang_config.get_docker_path(self.base_dir)
        dockerfile_path = docker_path / "Dockerfile"
        
        if not dockerfile_path.exists():
            return False, f"Dockerfile not found: {dockerfile_path}"
        
        # For build context, use the parent directory so we can access temp files
        build_context = self.base_dir.parent
        
        container_name = f"{self.config.container_name}-{language}"
        
        print(f"🔨 Building Docker image for {language.capitalize()}...")
        print(f"Docker directory: {docker_path}")
        print(f"Container name: {container_name}")
        print()
        sys.stdout.flush()
        
        try:
            # Get PAT_TOKEN and CODAT_EMAIL from environment for Azure DevOps authentication
            build_args = {}
            pat_token = os.getenv('PAT_TOKEN')
            codat_email = os.getenv('CODAT_EMAIL')
            
            if pat_token:
                build_args['PAT_TOKEN'] = pat_token
                print(f"Using PAT_TOKEN from environment for Azure DevOps authentication")
            else:
                print(f"⚠️  Warning: PAT_TOKEN not found in environment. Azure DevOps packages may not be accessible.")
                
            if codat_email:
                build_args['CODAT_EMAIL'] = codat_email
                print(f"Using CODAT_EMAIL from environment: {codat_email}")
            else:
                print(f"⚠️  Warning: CODAT_EMAIL not found in environment. Azure DevOps authentication may not work properly.")
            
            # Build the image with streaming output
            # Use relative dockerfile path from build context (convert to forward slashes for Docker)
            dockerfile_relative = docker_path.relative_to(build_context) / "Dockerfile"
            dockerfile_relative_str = str(dockerfile_relative).replace("\\", "/")
            build_logs = self.docker_client.api.build(
                path=str(build_context),
                dockerfile=dockerfile_relative_str,
                tag=container_name,
                buildargs=build_args,
                rm=True,
                forcerm=True,
                decode=True
            )
            
            # Stream build logs in real-time
            image_id = None
            build_failed = False
            error_details = []
            
            for log_entry in build_logs:
                if 'stream' in log_entry:
                    output = log_entry['stream'].rstrip('\n')
                    if output:
                        print(output)
                        sys.stdout.flush()
                        # Check for npm/authentication errors in stream output
                        if ('npm error' in output.lower() or 'authentication' in output.lower() or 
                            'E401' in output or 'failed' in output.lower()):
                            build_failed = True
                            error_details.append(output)
                        
                elif 'aux' in log_entry and 'ID' in log_entry['aux']:
                    image_id = log_entry['aux']['ID']
                    
                elif 'error' in log_entry:
                    error_msg = log_entry['error']
                    print(f"ERROR: {error_msg}")
                    sys.stdout.flush()
                    build_failed = True
                    error_details.append(error_msg)
                    
                elif 'errorDetail' in log_entry:
                    error_detail = log_entry['errorDetail']
                    print(f"ERROR DETAIL: {error_detail}")
                    sys.stdout.flush()
                    build_failed = True
                    error_details.append(str(error_detail))
            
            # If we detected build errors during streaming, return failure immediately
            if build_failed and error_details:
                error_summary = "; ".join(error_details[-3:])  # Last 3 errors
                return False, f"Docker build failed: {error_summary}"
            
            print()
            
            # Verify the image was actually created successfully
            try:
                created_image = self.docker_client.images.get(container_name)
                print(f"✅ {language.capitalize()} Docker image built successfully!")
                return True, f"Docker build completed successfully. Image ID: {created_image.short_id}"
            except ImageNotFound:
                print(f"❌ {language.capitalize()} Docker build reported success but image was not created!")
                return False, f"Docker build completed but image '{container_name}' was not found. This may indicate build errors were not properly reported."
            
        except BuildError as e:
            print()
            print(f"❌ {language.capitalize()} Docker build failed!")
            error_msg = f"Docker build failed: {str(e)}"
            
            if hasattr(e, 'build_log') and e.build_log:
                print("\nBuild log details:")
                for log_entry in e.build_log:
                    if isinstance(log_entry, dict):
                        if 'stream' in log_entry:
                            print(log_entry['stream'].rstrip('\n'))
                        elif 'error' in log_entry:
                            print(f"ERROR: {log_entry['error']}")
                            
            return False, error_msg
            
        except APIError as e:
            print(f"❌ Docker API error: {str(e)}")
            return False, f"Docker API error: {str(e)}"
        except Exception as e:
            print(f"❌ Unexpected error during build: {str(e)}")
            return False, f"Unexpected error during build: {str(e)}"

    def validate_language_snippets(self, language: str) -> Tuple[bool, str]:
        """
        Run validation for a specific language using its configured command.
        
        Args:
            language: The programming language to validate
            
        Returns:
            Tuple of (success, output/error message)
        """
        lang_config = self.config.get_language_config(language)
        if not lang_config:
            return False, f"Unsupported language: {language}"
        
        container_name = f"{self.config.container_name}-{language}"
        
        print(f"🔍 Validating {language.capitalize()} snippets...")
        print("-" * 60)
        
        # Check if Docker image exists locally before trying to run it
        try:
            self.docker_client.images.get(container_name)
        except ImageNotFound:
            error_msg = f"Docker image '{container_name}' not found locally."
            if language.lower() == 'javascript':
                error_msg += " JavaScript validation requires Azure DevOps credentials (PAT_TOKEN and CODAT_EMAIL environment variables) to build the Docker image."
            else:
                error_msg += f" Please ensure the {language} Docker image was built successfully."
            print(f"  ❌ {error_msg}")
            return False, error_msg
        
        container = None
        try:
            # Run the container in detached mode so we can get logs
            container = self.docker_client.containers.run(
                container_name,
                lang_config.validation_command,
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
                print(f"  ✅ {language.capitalize()} validation passed!")
                return True, "Validation passed"
            else:
                print(f"  ❌ {language.capitalize()} validation failed (exit code {exit_code})")
                return False, f"Validation failed with exit code {exit_code}"
            
        except Exception as e:
            print(f"  ❌ {language.capitalize()} validation failed with error: {str(e)}")
            return False, f"Validation failed with error: {str(e)}"
        finally:
            # Clean up the container
            if container:
                try:
                    container.remove()
                except:
                    pass  # Container might already be removed