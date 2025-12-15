# Claude Code Project Instructions

This is the Codat documentation site, built with Docusaurus.

## Project Structure

- `docs/` - Main documentation content (Markdown/MDX)
- `blog/` - Blog posts
- `src/` - React components and custom pages
- `static/` - Static assets (images, files)
- `.github/workflows/` - CI/CD workflows

## Development

```sh
npm install
npm start
```

Requires Node.js v20+.

## Code Style

- Documentation is written in Markdown/MDX
- Use Prettier for formatting (`npm run format:js:check`, `npm run format:mdx:check`)
- Follow existing patterns for component structure

## Testing

- `npm run build` - Build the site
- Spell check runs via cspell
- Link checking via linkinator
- Readability checks via Lexi

## Key Files

- `docusaurus.config.js` - Main Docusaurus configuration
- `sidebars.js` - Sidebar navigation structure
- `cspell.json` - Spell check dictionary and settings
