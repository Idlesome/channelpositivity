/**
 * gen.ts
 *
 * Script for generating blog markdown files and saving images from Notion pages
 */
import path from "path";
import { articleIsPublished } from "../common/selectors/articles";
import { getArticles } from "./notion";
const fs = require("fs");
const util = require("util");
const JSON5 = require("json5");

const readdir = util.promisify(fs.readdir);
const unlink = util.promisify(fs.unlink);
const writeFile = util.promisify(fs.writeFile);

async function removeAllFilesInDir(dir: string) {
  const files = await readdir(dir);

  for (const file of files) {
    unlink(path.join(dir, file));
  }
}

const slugToFilename = (slug: string) => slug.replaceAll("-", "_");

function writeArticlesToMarkdownFiles(articles: Article[]) {
  for (const block of articles) {
    if (!block.published) {
      console.log("Skipping unpublished page " + block.slug);
      continue;
    }

    const filename = "./data/articles/markdown/" + block.slug + ".md";
    writeFile(filename, block.markdown);
    console.log("Successfully wrote " + filename);
  }
}

/**
 * Writes the articles to a module to be imported by Next
 */
function writeArticlesToModule(articles: Article[]) {
  const importBlock = articles
    .filter(articleIsPublished)
    .map(({ slug }) => slug)
    .map((slug) => `import ${slugToFilename(slug)} from "./${slug}.md?raw";`)
    .join("\n");

  const exportBlock =
    `const articles: Article[] = [` +
    articles
      .map((article, index) => ({
        ...article,
        next_article: articles[index + 1] ?? null,
        markdown: "__MARKDOWN_IMPORT__",
      }))
      .filter((article) => articleIsPublished(article))
      .map((article) =>
        JSON5.stringify(article).replace(
          `'__MARKDOWN_IMPORT__'`,
          slugToFilename(article.slug)
        )
      )
      .join(",\n") +
    "];\n" +
    "export { articles };";

  fs.writeFileSync(
    "./data/articles/markdown/index.ts",
    [importBlock, exportBlock].join("\n")
  );
}

function writeSitemap(articles: Article[]) {
  fs.writeFileSync(
    "./public/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <url>
    <loc>https://channelpositivity.com</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    </url>
    
    ${articles
      .filter((articleBlock) => articleBlock.published)
      .map(
        (p) =>
          `
    <url>
    <loc>https://channelpositivity.com/articles/${p.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    </url>`
      )
      .join("")}
    
    </urlset>`
  );
}

(async () => {
  removeAllFilesInDir("./data/articles/markdown/");

  const articles = await getArticles();

  writeArticlesToMarkdownFiles(articles);
  writeArticlesToModule(articles);
  writeSitemap(articles);
})();

export {};
