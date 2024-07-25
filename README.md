# Codat docs

The official [Codat](https://codat.io) documentation.

- [Browse the docs](https://docs.codat.io/)
- [Contributing Guide](./CONTRIBUTING.md)
- [OpenAPI Spec](https://github.com/codatio/oas)

[![Linkinator CI](https://github.com/codatio/codat-docs/actions/workflows/linknator.yml/badge.svg)](https://github.com/codatio/codat-docs/actions/workflows/linknator.yml)

---

## Running locally

### Prerequisites

#### Git LFS

This website uses [Git Large File Storage] (LFS) to efficiently store images. You need to install Git LFS.

```
brew install git-lfs
git lfs install
```

All `.jpg`, `.jpeg`, and `.png` files are tracked.

[Read more](https://git-lfs.com/)

#### Create a .env file

The docusaurus config expects certain environment variables to be defined. We've included `.env.example` - copy this and rename it to `.env`. You can enter any random string for the IDs.

```
copy .env.example .env # on Windows 
cp .env.example .env # on Mac
```

### Install npm dependencies

```sh
npm install
```

### Run the project

```sh
npm run start
```

### Editing article markdown files

`/docs`

---

Updates feed: <https://codat-docs.vercel.app/updates/rss.xml>

---

Built with [Docusaurus](https://docusaurus.io/).
