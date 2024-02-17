# TODO

- Link at bottom to next page (automatically?)
- Email sign up - what's the plan for this? 8 week meditation course?


- See [trello](https://trello.com/b/Mwr0nSgP/channel-positivity-kanban)

# Images

Images referenced as `mountain_temple.jpg` in an article will point to `public/mountain_temple.jpg`. Images in this public folder will be bundled and optimised during build so they can be progressively enhanced with the article. Currently this only works for the cover image, but could be extended to other images.

However, non-enhanced images can still be included directly in articles in Notion.

---

Disallow using robots.txt
/cdn-cgi/ also can cause issues with various web crawlers.

Search engine crawlers can encounter errors when crawling these endpoints and — though these errors do not impact site rankings — they may surface in your webmaster dashboard.

SEO and other web crawlers may also mistakenly crawl these endpoints, thinking that they are part of your site’s content.

// Do this for the optimised images folder
As a best practice, update your robots.txt file to include Disallow: /cdn-cgi/.

---

# Scripts

- `npm run serve:prod` - serve "out" folder in prod mode. To emulate static file production env

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
