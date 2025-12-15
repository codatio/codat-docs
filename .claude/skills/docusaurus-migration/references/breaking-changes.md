# Docusaurus v2 to v3 Breaking Changes

## Required Dependency Updates

### Core Packages

- `@docusaurus/core`: ^2.x.x → ^3.0.0
- `@docusaurus/preset-classic`: ^2.x.x → ^3.0.0
- `@mdx-js/react`: ^1.6.22 → ^3.0.0
- `prism-react-renderer`: ^1.3.5 → ^2.1.0

### Runtime Requirements

- **Node.js**: >=16.14 → >=18.0
- **React**: ^17.0.2 → ^18.2.0
- **TypeScript**: ~4.7.4 → ~5.2.2

### TypeScript Configuration

Replace `@tsconfig/docusaurus` with `@docusaurus/tsconfig`:

```json
{
  "extends": "@docusaurus/tsconfig",
  "compilerOptions": {
    // your custom options
  }
}
```

## MDX v1 to v3 Migration

The transition from MDX v1 to MDX v3 is the main challenge in adopting Docusaurus v3.

### Common MDX Issues

#### Invalid `{` Characters

**Problem**: Bare braces are now invalid in MDX unless part of JSX expressions.

**Bad**:

```md
Use the {key} to access the value
```

**Good**:

```md
Use the `{key}` to access the value
Use the \{key\} to access the value
```

#### Invalid `<` Characters

**Problem**: Bare angle brackets are invalid unless part of HTML/JSX.

**Bad**:

```md
If x < 5, then...
```

**Good**:

```md
If `x < 5`, then...
If x \< 5, then...
```

#### GFM Autolinks Removed

**Problem**: `<email@example.com>` and `<https://example.com>` no longer work.

**Bad**:

```md
Contact us at <support@example.com>
```

**Good**:

```md
Contact us at [support@example.com](mailto:support@example.com)
Visit [https://example.com](https://example.com)
```

#### Indented Code Blocks

**Problem**: Indented code blocks (4 spaces) are no longer recognized.

**Bad**:

```md
Example code:

    const foo = 'bar';
```

**Good**:

```md
Example code:

\`\`\`js
const foo = 'bar';
\`\`\`
```

#### Emphasis Adjacent to Spaces

**Problem**: Emphasis marks next to spaces may not work as expected.

**Bad**:

```md
This is _really _ important
```

**Good**:

```md
This is _really_ important
```

## Prism React Renderer Changes

### Theme Import Syntax

**Old (v1)**:

```js
const lightTheme = require('prism-react-renderer/themes/github');
const darkTheme = require('prism-react-renderer/themes/dracula');
```

**New (v2)**:

```js
const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;
```

### Additional Languages

Prism React Renderer v2 includes fewer languages by default. Add required languages:

```js
module.exports = {
  themeConfig: {
    prism: {
      additionalLanguages: ['bash', 'diff', 'json'],
    },
  },
};
```

## React 18 Migration

### Automatic JSX Runtime

React imports are no longer required in files using JSX:

**Before**:

```jsx
import React from 'react';

export default function MyComponent() {
  return <div>Hello</div>;
}
```

**After**:

```jsx
// No React import needed
export default function MyComponent() {
  return <div>Hello</div>;
}
```

### Hydration Changes

React 18 has stricter hydration requirements. Ensure:

- Server and client render the same content
- No conditional rendering based on `typeof window`
- Use `useEffect` for client-only code

## Pre-Migration Checklist

1. **Check Node.js version**: `node --version` (must be >=18.0)
2. **Scan for MDX issues**: `npx docusaurus-mdx-checker`
3. **Backup your project**: Commit all changes to git
4. **Review dependencies**: Check for custom plugins that may need updates
5. **Test in staging**: Don't upgrade production directly

## Migration Steps

### 1. Update package.json

```json
{
  "dependencies": {
    "@docusaurus/core": "^3.0.0",
    "@docusaurus/preset-classic": "^3.0.0",
    "@mdx-js/react": "^3.0.0",
    "prism-react-renderer": "^2.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@docusaurus/tsconfig": "^3.0.0",
    "@docusaurus/types": "^3.0.0",
    "typescript": "~5.2.2"
  },
  "engines": {
    "node": ">=18.0"
  }
}
```

### 2. Update TypeScript Config

```json
{
  "extends": "@docusaurus/tsconfig",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@site/*": ["./*"]
    }
  }
}
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Fix MDX Files

Run the checker and fix reported issues:

```bash
npx docusaurus-mdx-checker
```

Common fixes:

- Wrap `{` and `<` in backticks or escape them
- Convert GFM autolinks to standard Markdown links
- Replace indented code blocks with fenced code blocks

### 5. Update docusaurus.config.js

Update Prism configuration:

```js
const { themes } = require('prism-react-renderer');

module.exports = {
  themeConfig: {
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ['bash', 'diff', 'json'],
    },
  },
};
```

### 6. Test Locally

```bash
npm start
```

Visit http://localhost:3000 and check:

- All pages load without errors
- MDX components render correctly
- Code blocks display properly
- Navigation works

### 7. Production Build

```bash
npm run build
```

Fix any build errors before deploying.

## Optional Improvements

### Migrate to ESM

Convert `docusaurus.config.js` to `docusaurus.config.mjs`:

```js
import { themes } from 'prism-react-renderer';

export default {
  // config
};
```

### Use TypeScript Config

Rename to `docusaurus.config.ts`:

```typescript
import type { Config } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';

const config: Config = {
  // config
};

export default config;
```

### Rename MD to MDX

For files containing JSX, rename `.md` → `.mdx`:

```bash
# Example
mv blog/my-post.md blog/my-post.mdx
```

### Update Math Packages

If using math support:

```json
{
  "remark-math": "^6.0.0",
  "rehype-katex": "^7.0.0"
}
```

## Troubleshooting

### MDX Parse Errors

Use the [MDX Playground](https://mdxjs.com/playground/) to debug:

1. Enable "remark-gfm" plugin
2. Enable "remark-directive" plugin
3. Paste your MDX content
4. Fix reported errors

### Build Failures

Common causes:

- Outdated plugins or themes
- Custom components using React 17 APIs
- Invalid MDX syntax not caught by checker

### Hydration Mismatches

React 18 is stricter about hydration. Check for:

- Client-only code in render
- Conditional rendering based on `window`
- Inconsistent server/client output

### Missing Prism Languages

If code blocks don't highlight properly, add to `additionalLanguages`:

```js
prism: {
  additionalLanguages: ['java', 'php', 'ruby', 'python'],
}
```

## Getting Help

- **Official Docs**: https://docusaurus.io/docs/migration/v3
- **GitHub Discussions**: https://github.com/facebook/docusaurus/discussions
- **Discord**: Join the Docusaurus Discord for real-time help
- **MDX Docs**: https://mdxjs.com/docs/

## Resources

- [MDX v3 Migration Guide](https://mdxjs.com/migrating/v3/)
- [React 18 Upgrade Guide](https://react.dev/blog/2022/03/08/react-18-upgrade-guide)
- [Prism React Renderer Changelog](https://github.com/FormidableLabs/prism-react-renderer/blob/master/CHANGELOG.md)
