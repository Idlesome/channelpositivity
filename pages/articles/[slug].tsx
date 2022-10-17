import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import styles from "../../styles/Home.module.css";
import { MarkdownDocument } from "../../components/MarkdownDocument";
import articles from "../../data/articles.json";

interface Article {
  title: string;
  markdown: string;
  slug: string;
}

const Home: NextPage<{ article: Article }> = ({ article }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <React.Fragment>
          <h2>{article.title}</h2>
          <MarkdownDocument markdown={article.markdown} />
        </React.Fragment>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = articles.find(({ slug }) => slug === params?.slug);

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: false };
};

export default Home;
