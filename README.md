# Codat docs

The official [Codat](https://codat.io) documentation.

- [Browse the docs](https://docs.codat.io/)
- [Contributing Guide](./CONTRIBUTING.md)
- [OpenAPI Spec](https://github.com/codatio/oas)
- [Product roadmap](https://bit.ly/codatpbroadmap1) | [DX roadmap](https://bit.ly/devexroadmap)

---

## Running locally

### Create a .env file

The docusaurus config expects certain environment variables to be defined. We've included `.env.example` - copy this and rename it to `.env`. You can enter any random string for the IDs.

```
copy .env.example .env # on Windows 
cp .env.example .env # on Mac
```

### Run the project

```sh
npm install
npm run start
```

### Editing article markdown files

`/docs`

---

Updates feed: <https://codat-docs.vercel.app/updates/rss.xml>

---

Built with [Docusaurus](https://docusaurus.io/).
