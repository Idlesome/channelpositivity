import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Footer, Header } from "components/layout";
import articles from "data/articles/meditation";
import { CoverImage } from "components/CoverImage";
import ArticlesList from "components/Articles/ArticlesList";

// do we want to filter by multiple categories at the same time? (catch all routes https://nextjs.org/docs/routing/dynamic-routes)
const CategoryPage: NextPage<{
  articles: Article[];
  params: { category: string };
}> = ({ articles, params }) => {
  const filteredArticles = articles.filter((article) =>
    article.category.includes(params.category)
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
        <ArticlesList articles={filteredArticles}/>
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
  // better way to list all categories that exist?
  // perhaps don't use fallback: false and if no items exist within a category we display 404 not found, or create a set list of all available categories?
  // for (let i:number = 0; i < article.category.length; i++) {
  // }
  // const paths = articles.map((article) => ({
  //     params: { category: article.category[0] },
  //     }
  // ));

  const paths: { params: { category: string } }[] = [];
  // Categories: ["meditation", "running", "pro"] (short for procrastination)

  for (let article: number = 0; article < articles.length; article++) {
    for (let i = 0; i < articles[article].category.length; i++) {
      paths.push({
        params: {
          category: articles[article].category[i],
        },
      });
    }
  }

  return { paths, fallback: false };
};

export default CategoryPage;
