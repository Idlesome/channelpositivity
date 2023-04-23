import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import articles from "data/articles/meditation";
import { getCategories } from "common/selectors/categories";
import { ArticlesList } from "common/components/Articles/ArticlesList";
import { Footer, Header } from "common/components/layout";

const CategoryPage: NextPage<{
  articles: Article[];
  params: { category: string };
}> = ({ articles, params }) => {
  const filteredArticles = articles.filter((article) =>
    article.categories.includes(params.category)
  );

  return (
    <div>
      <Head>
        <title>Categories</title>
        <meta
          name="description"
          content="Channel Positivity is here to bring original experiences to YouTube to help you develop spiritually and channel your positivity."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="prose prose-stone prose-blockquote:text-2xl prose-blockquote:font-bold prose-blockquote:text-slate-600 m-auto">
        <ArticlesList articles={filteredArticles} />
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      articles,
      params,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = getCategories();
  const paths = categories.map((category) => ({
    params: { category: category },
  }));

  return { paths, fallback: false };
};

export default CategoryPage;
