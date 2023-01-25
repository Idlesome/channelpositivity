import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { MarkdownDocument } from "components/MarkdownDocument";
import articles from "data/articles/meditation";
import { CoverImage } from "components/CoverImage";
import { StaticImageData } from "next/image";
import { Footer } from "components/layout/Footer";
import { Header } from "components/layout/Header";

const ArticlePage: NextPage<{ article: Article<StaticImageData> }> = ({
  article,
}) => {
  return (
    <div>
      <Head>
        <title>{article.title} - Channel Positivity</title>
        <meta name="description" content={article.meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="prose prose-stone m-auto">
        <CoverImage image={article.images.cover} />
        <article className="px-4 md:px-0">
          <h1 className="text-center md:text-left">{article.title}</h1>
          <MarkdownDocument markdown={article.markdown} />
        </article>
      </main>

      <Footer />
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

export default ArticlePage;
