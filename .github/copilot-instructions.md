# Codat Documentation Site

Codat documentation is a Docusaurus 3.4.0-based website that provides comprehensive documentation for Codat's APIs and products. The site includes a Python-based code utility system for extracting and validating code snippets across multiple programming languages.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Prerequisites and Environment Setup
- **Node.js**: Requires Node.js 20+ (v20.19.5 tested and working)
- **npm**: Requires npm 8+ (v10.8.2 tested and working)
- **Python**: Python 3.12+ available for code utilities
- **Git LFS**: Required for image assets. Install with `brew install git-lfs && git lfs install`

### Bootstrap the Repository
Always run these commands in order for a fresh setup:

1. **Environment setup**:
   ```bash
   cp .env.example .env
   ```
   You can use placeholder values for the environment variables in development.

2. **Install dependencies**:
   ```bash
   npm install
   ```
   Takes ~1m15s. Expect warnings about peer dependencies (@react-types conflicts with React 18) - these are harmless.

3. **Build the site** (for production):
   ```bash
   npm run build
   ```
   Takes ~2m30s. NEVER CANCEL. Set timeout to 5+ minutes. Expect warnings about CSS calc parsing and broken anchor links - these are normal.

4. **Run development server**:
   ```bash
   npm start
   ```
   Takes ~40s to compile. Starts at http://localhost:3000/. NEVER CANCEL compilation.

5. **Serve production build** (optional):
   ```bash
   npm run serve
   ```
   Serves the built site at http://localhost:3000/.

### Python Code Utilities Setup
Set up the Python environment for code snippet extraction and validation:

1. **Install uv** (if not available):
   ```bash
   pip install uv
   ```

2. **Install Python dependencies**:
   ```bash
   cd code_utils && uv sync
   ```
   Takes ~30s.

3. **Test CLI availability**:
   ```bash
   uv run code-util --help
   ```

## Build and Test Commands

### Core Development Commands
- `npm start` - Start development server (~40s compile time)
- `npm run build` - Production build (~2m30s, NEVER CANCEL)
- `npm run serve` - Serve production build
- `npm run clear` - Clear Docusaurus cache

### Formatting and Linting
- `npm run format:check` - Check all files formatting (~10s)
- `npm run format:js:check` - Check JS/TS formatting only (~2s)
- `npm run format` - Fix all formatting issues
- `npm run format:js` - Fix JS/TS formatting only
- `npm run format:mdx` - Fix Markdown/MDX formatting only

### Quality Assurance
- `cspell "**/*.md" "**/*.mdx" --words-only cspell-words.txt` - Spell check (~4s)
  - Install with: `npm install -g cspell`
  - Expect ~331 spelling issues in 132 files (this is normal for technical documentation)

### Python Code Utilities
- `cd code_utils && uv run code-util extract` - Extract code snippets (CURRENTLY BROKEN: has parameter name mismatch)
- `cd code_utils && uv run code-util check` - Validate extracted code snippets (~2m30s, builds Docker container)

## Validation Scenarios

### Manual Testing Requirements
After making changes, ALWAYS test these scenarios:

1. **Development Server Functionality**:
   - Run `npm start` and verify the server starts at localhost:3000
   - Navigate to the homepage - should see "Build deeper connections with business customers"
   - Test sidebar navigation by clicking "Get started" -> should navigate to /get-started/overview
   - Verify search functionality works (Ctrl-K or search button)

2. **Production Build Validation**:
   - Run `npm run build` and ensure it completes without errors
   - Run `npm run serve` and test the same navigation scenarios
   - Check that all assets load properly

3. **Code Quality Validation**:
   - Run `npm run format:js:check` - should pass with no formatting issues
   - Run `npm run format:check` - will show ~18 files needing formatting (this is expected)
   - After making code changes, run formatting checks to ensure compliance

## Known Issues and Limitations

### Code Utilities
- **Bug in extract command**: The `--remove` option parameter name doesn't match the function signature (uses 'remove' vs 'exclude'). The extract command will fail until this is fixed.
- **Docker dependency**: The check command requires Docker for validation and builds a container with Python 3.11, Node.js 18, and .NET 8.0 SDK.

### Build Warnings (Normal)
- Peer dependency warnings about @react-types and React version conflicts
- CSS calc parsing warnings during build
- Webpack cache failures related to './redirects.config'
- Image file warnings for PNG files in xero integration folder

### Development Warnings (Expected)
- Amplitude API key not found (expected in development)
- Browserslist outdated warnings
- Unused Markdown directive in docs/using-the-api/querying.md

## Repository Structure

### Key Directories
- `/docs/` - Main documentation content (Markdown/MDX files)
- `/blog/` - Blog posts and updates
- `/src/` - React components and custom Docusaurus code
- `/static/` - Static assets (images, CSS, JS)
- `/code_utils/` - Python utilities for code snippet management
- `/.github/workflows/` - CI/CD workflows
- `/sidebars/` - Sidebar configuration

### Configuration Files
- `docusaurus.config.js` - Main Docusaurus configuration
- `package.json` - Node.js dependencies and scripts
- `nav.config.js` - Navigation configuration
- `redirects.config.js` - URL redirects
- `sidebars.js` - Sidebar structure
- `.env` - Environment variables (copy from .env.example)

### Python Code Utils
- `code_utils/main.py` - CLI entrypoint
- `code_utils/code_finder.py` - Code extraction logic
- `code_utils/code_checker.py` - Code validation logic
- `code_utils/pyproject.toml` - Python project configuration
- `code_utils/docker/` - Docker configuration for validation

## CI/CD Integration

### GitHub Workflows
The repository has several automated checks that run on PRs:
- **Formatting check**: Runs `npm run format:js:check`
- **Spell check**: Runs cspell on all markdown files
- **Link check**: Validates internal and external links
- **Markdown lint**: Checks markdown formatting

### Pre-commit Validation
Before committing changes, always run:
```bash
npm run format:js:check  # Must pass
npm run format:check     # Review any formatting issues
```

## Common Development Tasks

### Adding New Documentation
1. Create `.md` or `.mdx` files in `/docs/`
2. Update sidebars configuration if needed
3. Test locally with `npm start`
4. Run formatting check: `npm run format:check`

### Working with Code Snippets
1. Extract snippets: `cd code_utils && uv run code-util extract` (currently broken)
2. Validate snippets: `cd code_utils && uv run code-util check`
3. Docker container builds with Python, Node.js, and .NET for validation

### Updating Dependencies
1. Update package.json as needed
2. Run `npm install`
3. Test build: `npm run build`
4. Test development: `npm start`

## Troubleshooting

### Build Issues
- If build fails, try `npm run clear` then rebuild
- Ensure Node.js 20+ and npm 8+ are installed
- Check that .env file exists (copy from .env.example)

### Development Server Issues
- If server won't start, check port 3000 availability
- Clear cache with `npm run clear`
- Check for Git LFS issues with images

### Python Utilities Issues
- Ensure Docker is available for code checking
- Install uv with `pip install uv` if missing
- The extract command has a known bug with parameter naming

## Time Expectations

### Command Timing (with recommended timeouts)
- `npm install`: ~1m15s (timeout: 3+ minutes)
- `npm run build`: ~2m30s (timeout: 5+ minutes) - NEVER CANCEL
- `npm start`: ~40s compilation (timeout: 2+ minutes)
- `npm run serve`: ~5s startup
- `npm run format:check`: ~10s
- `npm run format:js:check`: ~2s
- `cspell`: ~4s
- `uv sync`: ~30s
- `uv run code-util check`: ~2m30s (Docker build time)

### Critical Timing Rules
- **NEVER CANCEL** long-running commands like `npm run build`
- Always set adequate timeouts (5+ minutes for builds)
- Wait for full compilation before testing functionality
- Docker builds can take several minutes - this is normal

## Testing and Validation Checklist

Before completing any work:
- [ ] `npm start` successfully starts development server
- [ ] Homepage loads correctly at localhost:3000
- [ ] Navigation works (test clicking sidebar links)
- [ ] `npm run build` completes successfully
- [ ] `npm run serve` serves the built site correctly
- [ ] `npm run format:js:check` passes
- [ ] No new console errors in browser during manual testing

This ensures the documentation site is fully functional and ready for users.