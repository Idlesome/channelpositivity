declare module "*.md";
declare module "*?raw" {
  const content: string;
  export default content;
}

interface ArticleMetaData {
  title: string;
  description: string;
}

type ImageFileExtension = ".png" | ".jpg" | ".webp";

type CoverImage = {
  src: `${string}${ImageFileExtension}`;
  alt: string;
  color: string;
};

interface Article {
  title: string;
  markdown: string;
  slug: string;
  meta: ArticleMetaData;
  excerpt: string;
  categories: string[];
  images: {
    cover: CoverImage;
  };
  publish_date: string;
  published?: boolean;
  next_article?: Article | null;
}
