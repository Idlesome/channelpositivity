/**
 * A block as returned from the Notion API
 */
type NotionBlock = {
  parent: string;
  type: string;
  id: string;
  child_page: {
    title: string;
  };
};

type ArticleBlock = NotionBlock & {
  slug: string;
  config?: Article;
  excerpt: string;
  markdown: string;
  published: boolean;
};
