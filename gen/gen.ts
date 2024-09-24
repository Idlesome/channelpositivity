import { createWriteStream } from "fs";
import path from "path";
import { Readable } from "stream";
import { articleIsPublished } from "../common/selectors/articles";
const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");
const JSON5 = require("json5");

function removeAllFilesInDir(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(dir, file), (err) => {
        if (err) throw err;
      });
    }
  });
}

function pageIsPublished(page) {
  if (!page.config.publish_date) return false;
  const publish_date = new Date(page.config.publish_date);
  return publish_date < new Date();
}

const pageToArticle = (page) =>
  page
    ? {
        title: page.child_page.title,
        slug: page.slug,
        markdown: "__MARKDOWN_IMPORT__",
        excerpt: page.excerpt,
        categories: ["meditation"],
        meta: {
          title: page.child_page.title,
          description: page.excerpt,
        },
        ...page.config,
      }
    : null;

const titleToSlug = (title) =>
  title
    .replaceAll(" ", "-")
    .replaceAll("#", "")
    .replaceAll("’", "")
    .toLowerCase();

const slugToFilename = (slug: string) => slug.replaceAll("-", "_");

const notion = new Client({
  auth: "secret_Yk7ggUMdHcUoYDTGF9uLbrSHozirTPuKx7zbFqbXAL6",
});

const n2m = new NotionToMarkdown({ notionClient: notion });
n2m.setCustomTransformer("embed", async (block) => {
  const { embed } = block as any;
  if (!embed?.url) {
    console.warn("Empty embed block");
    return "";
  }
  return `<iframe data-src="${embed?.url}" style="width:100%;height:400px;"></iframe>`;
});
n2m.setCustomTransformer("image", async (block) => {
  return `![${block.image.caption[0].plain_text}](${block.image.file.url})`;
});

function nthIndex(str: string, pat, n) {
  var L = str.length,
    i = -1;
  while (n-- && i++ < L) {
    i = str.indexOf(pat, i);
    if (i < 0) return str.length;
  }
  return i;
}

async function downloadImageAndSaveAsync(url: string, output_location: string) {
  const response: any = await fetch(url);

  const output_dir = output_location.split("/").slice(0, -1).join("/");
  await fs.mkdirSync("public" + output_dir, {
    recursive: true,
  });

  const readableStream = Readable.fromWeb(response.body);

  const fileWriteStream = createWriteStream("public/" + output_location);
  readableStream.pipe(fileWriteStream);
}

(async () => {
  removeAllFilesInDir("./data/articles/markdown/");

  const blockId = "5c805e3b-ecd1-486d-a1e7-e142e4151020";
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  const pages = response.results.filter((block) => block.type === "child_page");

  const slugs: string[] = [];
  for (const page of pages) {
    const mdBlocks: any[] = (await n2m.pageToMarkdown(page.id)).map((block) => {
      if (block.type === "image") {
        const caption = block.parent.slice(2).split("]")[0];
        const imageFileExtension = block.parent.includes(".png")
          ? ".png"
          : block.parent.includes(".jpg")
            ? ".jpg"
            : null;
        if (!imageFileExtension) {
          console.warn(
            "Unsupported image type for image block: " + block.parent
          );
        }
        const filename = titleToSlug(caption) + imageFileExtension;
        const localUrl = `/images/articles/${titleToSlug(page.child_page.title)}/${filename}`;
        const originalUrl = block.parent.split("(")[1].split(")")[0];
        downloadImageAndSaveAsync(originalUrl, localUrl);
        console.log(localUrl);

        return {
          ...block,
          parent: `![${caption}](${localUrl})`,
        };
      }
      return block;
    });
    const jsonConfigBlock = mdBlocks.shift();
    if (jsonConfigBlock.type !== "code") {
      throw new Error("Missing config block for " + page.child_page.title);
    }
    const jsonConfigString = jsonConfigBlock.parent
      .replace("```json\n", "")
      .replace("\n```", "");
    const mdString = n2m.toMarkdownString(mdBlocks);

    const slug = titleToSlug(page.child_page.title);
    slugs.push(slug);
    page.slug = slug;
    page.config = JSON5.parse(jsonConfigString);

    page.excerpt =
      mdBlocks[0].parent
        .trim()
        .substring(0, nthIndex(mdBlocks[0].parent.trim(), " ", 32)) + "...";

    if (!pageIsPublished(page)) {
      console.log("Skipping unpublished page " + page.slug);
      continue;
    }

    fs.writeFile(
      "./data/articles/markdown/" + slug + ".md",
      mdString.parent,
      (e) => console.error(e ?? "success")
    );
  }

  const importBlock = slugs
    .map((slug) => `import ${slugToFilename(slug)} from "./${slug}.md";`)
    .join("\n");

  const exportBlock =
    `const articles: Article[] = [` +
    pages
      .map((page, index) => ({
        ...pageToArticle(page),
        next_article: pageToArticle(pages[index + 1]),
      }))
      .filter((article) => articleIsPublished(article))
      .map((article) =>
        JSON5.stringify(article).replace(
          `'__MARKDOWN_IMPORT__'`,
          slugToFilename(article.slug)
        )
      )
      // .map(page => `{
      //   title: "${page.child_page.title}",
      //   markdown: ${page.slug.replaceAll('-', '_')},
      //   images: {
      //     cover: {
      //       src: "mountain_temple.jpg",
      //       alt: "Peaceful Mountain Temple",
      //       color: "#4F3A63",
      //     },
      //   },
      // },`)
      .join(",\n") +
    "];\n" +
    "export default articles;";

  fs.writeFileSync(
    "./data/articles/markdown/index.ts",
    [importBlock, exportBlock].join("\n")
  );

  fs.writeFileSync(
    "./public/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <url>
    <loc>https://channelpositivity.com</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    </url>
    
    ${pages
      .filter(pageIsPublished)
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
})();

export {};
