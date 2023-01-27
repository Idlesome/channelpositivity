declare module "*.md";

interface ArticleMetaData {
  title: string;
  description: string;
}

type ImageFileExtension = ".png" | ".jpg";

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
  category: string[];
  images: {
    cover: CoverImage;
  };
}
