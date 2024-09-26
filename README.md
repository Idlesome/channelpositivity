# Overview

Channel Positivity is a blog website (channelpositivity.com) built with SSG in Next. One of the aims of this project was to run without a backend and to test the limitations of Next SSG. Using SSG means you can deliver the site as static assets directly to CDNs, this concept is also known as Jamstack and is often used by large blog websites and some ecommerce sites to improve time to first byte and overall speed for websites, which results in better user experience and better SEO. Serving directly from a CDN is also highly scalable and performant. This site is hosted on CloudFlare pages, which is essentially like AWS CloudFront. Pipelines are set up to run `npm run build` and then copy the `out` folder to the CDN.

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
