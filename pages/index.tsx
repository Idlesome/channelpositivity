import { CoverImage } from "components/CoverImage";
import { Footer, Header } from "components/layout";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { StaticImageData } from "next/image";
import React from "react";
import articles from "../data/articles/meditation";

const Home: NextPage<{
  articles: Article<StaticImageData>[];
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

      <main className="prose prose-stone m-auto flex-grow">
        {articles.map((article, index) => (
          <div key={index} className="mb-8">
            <a href={`/articles/${article.slug}`}>
              <CoverImage image={article.images.cover} />
              <h2>{article.title}</h2>
            </a>
            <em>{article.excerpt}</em>
          </div>
        ))}
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
