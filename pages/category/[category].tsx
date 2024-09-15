import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import articles from "data/articles/markdown";
import { getCategories } from "common/selectors/categories";
import { ArticlesList } from "common/components/Articles/ArticlesList";
import { Footer, Header } from "common/components/layout";
import { PageHead } from "common/components/layout/PageHead";

const CategoryPage: NextPage<{
  articles: Article[];
  params: { category: string };
}> = ({ articles, params }) => {
  const filteredArticles = articles.filter((article) =>
    article.categories.includes(params.category)
  );

  return (
    <div>
      <PageHead
        title="Categories"
        description="Channel Positivity is here to bring original experiences to YouTube to help you develop spiritually and channel your positivity."
      />

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
