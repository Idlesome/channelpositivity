# TODO

High level:

- How to easily add images to posts? Start simple, just add to /images/xyz.png
- Need to schedule 10 articles ideally (1 per month)
- Need a way for users to subscribe to a mailing list
- How will I add music? How will I find time to do all this stuff?
- Record time spent
- Basic application - google oauth login to record meditation streaks? Or a node application?

Pilot:

- Create one article, see how this process goes
- Add SEO
- Create 4 more articles if this seems good
- Publish/schedule these
- Monitor users (without a cookie banner?) to see if people are engaged with the content (bounce rate, etc.)
- From here, consider adding "sign up for mailing list" (wisdom to your inbox)
- Add category and date published with title on article (ArticleMeta component)

---

SEO:

- Meta data
- Do a report
- Links
- Sitemap

Related posts:

- Tags, how do we link them though?

Tags:

- Decide what tags will exist and how to categories content

Home page:

- Latest articles
- ?

Article view page:

- Display article content
- Images - convenient way to display and host them when creating articles
- How to crop and optimise images?

Article list page:

- List articles with title, header image and description
- Pagination (render each page individually)

Articles:

- Create blog content
- Where to get images? AI

---

Disallow using robots.txt
/cdn-cgi/ also can cause issues with various web crawlers.

Search engine crawlers can encounter errors when crawling these endpoints and — though these errors do not impact site rankings — they may surface in your webmaster dashboard.

SEO and other web crawlers may also mistakenly crawl these endpoints, thinking that they are part of your site’s content.

As a best practice, update your robots.txt file to include Disallow: /cdn-cgi/.

---

# Scripts

- `npm run serve:prod` - serve "out" folder in prod mode. To emulate static file production env

There appears to be no way to export a static site with images unless you import them within the files that use them. This means you can't generate a site from a list of articles for example.

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
