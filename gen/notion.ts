import { createWriteStream } from "fs";
import { Readable } from "stream";
import { articleIsPublished } from "../common/selectors/articles";
const JSON5 = require("json5");
const fs = require("fs");
const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");

const BLOG_BLOCK_ID = "5c805e3b-ecd1-486d-a1e7-e142e4151020";

const notion = new Client({
  auth: "",
});

export const n2m = new NotionToMarkdown({ notionClient: notion });

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

async function getNotionBlogPages(): Promise<NotionBlock[]> {
  const response = await notion.blocks.children.list({
    block_id: BLOG_BLOCK_ID,
    page_size: 100,
  });
  return response.results.filter((block) => block.type === "child_page");
}

const titleToSlug = (title) =>
  title
    .replaceAll(" ", "-")
    .replaceAll("#", "")
    .replaceAll("’", "")
    .toLowerCase();

function nthIndex(str: string, pat, n) {
  let i = -1;
  while (n-- && i++ < str.length) {
    i = str.indexOf(pat, i);
    if (i < 0) return str.length;
  }
  return i;
}

/**
 * Asynchronously downloads an image at url and saves it at output_location
 *
 * Example usage: downloadImageAndSaveAsync("https://imgur.com/123.png", "./example.png")
 *
 * @param url the url to download
 * @param output_location the location to save the image
 */
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

/**
 * Gets articles from Notion API and converts them to
 * a list of Articles[]
 */
export async function getArticles(): Promise<Article[]> {
  const notionBlogPages = await getNotionBlogPages();

  const articleBlocks = await Promise.all(
    notionBlogPages.map(async (pageBlock) => {
      const mdBlocks = (await n2m.pageToMarkdown(pageBlock.id)).map(
        (block: NotionBlock) => {
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
            const localFilepath = `/images/articles/${titleToSlug(pageBlock.child_page.title)}/${filename}`;
            const originalUrl = block.parent.split("(")[1].split(")")[0];
            downloadImageAndSaveAsync(originalUrl, localFilepath);

            return {
              ...block,
              parent: `![${caption}](${localFilepath})`,
            };
          }
          return block;
        }
      );

      const slug = titleToSlug(pageBlock.child_page.title);

      const jsonConfigBlock = mdBlocks.shift();
      if (jsonConfigBlock?.type !== "code") {
        throw new Error(
          "Missing config block for " + pageBlock.child_page.title
        );
      }
      const jsonConfigString = jsonConfigBlock.parent
        .replace("```javascript\n", "")
        .replace("```json\n", "")
        .replace("\n```", "");
      let config: Partial<Article>;
      try {
        config = JSON5.parse(jsonConfigString);
      } catch (e) {
        throw new Error(
          `Invalid config block for ${slug}\n ${jsonConfigString}\n ${e}`
        );
      }
      const mdStringBlock = n2m.toMarkdownString(mdBlocks);

      const excerpt =
        mdBlocks[0]?.parent
          .trim()
          .substring(0, nthIndex(mdBlocks[0].parent.trim(), " ", 32)) + "..." ??
        "";

      return {
        slug,
        excerpt,
        published: articleIsPublished(config),
        markdown: mdStringBlock.parent,
        title: pageBlock.child_page.title,
        categories: ["meditation"],
        meta: {
          title: pageBlock.child_page.title,
          description: excerpt,
        },
        images: config.images,
        publish_date: config.publish_date,
        ...config,
      };
    })
  );

  return articleBlocks as Article[];
}
