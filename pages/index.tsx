import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import articles from "../data/articles/markdown";
import { Footer, Header } from "common/components/layout";
import { ArticlesList } from "common/components/Articles/ArticlesList";

const Home: NextPage<{
  articles: Article[];
}> = ({ articles }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Channel Positivity</title>
        <meta
          name="description"
          content="Channel Positivity is here to bring original experiences to YouTube to help you develop spiritually and channel your positivity."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="prose prose-stone prose-headings:mt-4 prose-headings:mb-2 m-auto flex-grow">
        <ArticlesList articles={articles} />
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      articles,
    },
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = articles.map((article) => ({
//     params: { id: article.slug },
//   }));

//   return { paths, fallback: false };
// };

export default Home;
