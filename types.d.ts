declare module "*.md";

interface ArticleMetaData {
  title: string;
  description: string;
}

type ImageFileExtension = ".png" | ".jpg";

interface Article<ImageType> {
  title: string;
  markdown: string;
  slug: string;
  meta: ArticleMetaData;
  excerpt: string;
  category: string[];
  images: {
    cover: {
      src: string;
      alt: string;
    };
  };
}
