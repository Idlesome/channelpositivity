# TODO

- Review Next Image Exporter library - patch upgrade causes a module error
- More test coverage with vitest
- Review and improve ESLint config, upgrade ESLint
- Upgrade to Next 14
- Environment variable set up for Notion auth token
- See [trello](https://trello.com/b/Mwr0nSgP/channel-positivity-kanban)

# Images

Images referenced as `mountain_temple.jpg` in an article will point to `public/mountain_temple.jpg`. Images in this public folder will be bundled and optimised during build so they can be progressively enhanced with the article. Currently this only works for the cover image, but could be extended to other images, however, non-enhanced images can still be included directly in articles in Notion.

---

# Local dev

```bash
npm run dev
```

# Full build and serve (as static site)

This will closely resemble how the site will be served on the CDN (no SSR, only SSG).

```bash
npm run build:serve:prod
```

# Full build

```bash
npm run build:full
```

# Article Generation

```bash
npm run gen
```

# Scripts

- `npm run serve:prod` - serve "out" folder in prod mode. To emulate static file production env

## Getting Started

```bash
npm run dev
```
