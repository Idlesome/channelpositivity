import { articles } from "data/articles/markdown/";
import { ArticlePage } from "./_components/ArticlePage";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

function ArticlePageRoute({ params }: Props) {
  const article = articles.find(({ slug }) => slug === params.slug) as Article;

  return <ArticlePage article={article} />;
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find(({ slug }) => slug === params.slug) as Article;
  return {
    title: article.meta.title,
    description: article.meta.description,
    openGraph: {
      images: [article.images.cover.src],
      publishedTime: article.publish_date,
    },
  };
}

export default ArticlePageRoute;
