const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require('fs')
const JSON5 = require('json5')

const notion = new Client({
  auth: "secret_Yk7ggUMdHcUoYDTGF9uLbrSHozirTPuKx7zbFqbXAL6",
});

const n2m = new NotionToMarkdown({ notionClient: notion });

function nthIndex(str: string, pat, n) {
  var L = str.length, i = -1;
  while (n-- && i++ < L) {
    i = str.indexOf(pat, i);
    if (i < 0) return str.length;
  }
  return i;
}

(async () => {
  const blockId = '5c805e3b-ecd1-486d-a1e7-e142e4151020';
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  const pages = response.results.filter((block) => block.type === 'child_page')
  // console.log(pages)
  const slugs: string[] = []
  for (const page of pages) {
    const mdBlocks: any[] = await n2m.pageToMarkdown(page.id);
    const jsonConfigBlock = mdBlocks.shift();
    if (jsonConfigBlock.type !== 'code') {
      throw new Error("Missing config block for " + page.child_page.title)
    }
    const jsonConfigString = jsonConfigBlock.parent.replace('```json\n', '').replace('\n```', '');
    const mdString = n2m.toMarkdownString(mdBlocks);

    const slug = page.child_page.title.split(' ').join('-').toLowerCase()
    slugs.push(slug);
    page.slug = slug;
    page.config = JSON5.parse(jsonConfigString);
    page.mdFilename = page.slug.replaceAll('-', '_')

    page.excerpt = mdBlocks[0].parent.trim().substring(0, nthIndex(mdBlocks[0].parent.trim(), ' ', 32)) + "...";
    fs.writeFile('./data/articles/markdown/' + slug + '.md', mdString.parent, e => console.error(e ?? 'success'))
  }

  const importBlock = slugs.map(slug =>
    `import ${slug.replaceAll('-', '_')} from "./${slug}.md";`
  ).join('\n');

  const exportBlock = `const articles: Article[] = [` + pages
    .map(page =>
      JSON5.stringify({
        title: page.child_page.title,
        slug: page.slug,
        markdown: "__MARKDOWN_IMPORT__",
        excerpt: page.excerpt,
        categories: ["meditation"],
        meta: {
          title: page.child_page.title,
          description: page.excerpt
        },
        ...page.config
      })
      .replace(`'__MARKDOWN_IMPORT__'`, page.mdFilename)
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
    .join(',\n')
    + '];\n'
    + 'export default articles;'

  fs.writeFileSync('./data/articles/markdown/index.ts', [importBlock, exportBlock].join('\n'))
})();

export { }