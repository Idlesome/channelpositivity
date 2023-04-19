import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Footer, Header } from "components/layout";
import articles, { categories } from "data/articles/meditation";
import { ArticlesList } from "components/Articles/ArticlesList";

// do we want to filter by multiple categories at the same time? (catch all routes https://nextjs.org/docs/routing/dynamic-routes)
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
  // const paths: { params: { category: string } }[] = [];

  // There can be duplicate categories in "paths" as a result of this loop
  // for (let article = 0; article < articles.length; article++) {
  //   for (
  //     let categoryIndex = 0;
  //     categoryIndex < articles[article].category.length;
  //     categoryIndex++
  //   ) {
  //     paths.push({
  //       params: {
  //         category: articles[article].category[categoryIndex],
  //       },
  //     });
  //   }
  // }

  // Using database of existing categories which we will list in a menu
  const paths = categories.map((category) => ({
    params: { category: category },
  }));

  return { paths, fallback: false };
};

export default CategoryPage;
