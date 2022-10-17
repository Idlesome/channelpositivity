import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import { MarkdownDocument } from "../components/MarkdownDocument";
import articles from "../data/articles.json";

interface Article {
  title: string;
  markdown: string;
  slug: string;
}

const Home: NextPage<{ articles: Article[]; article: Article[] }> = ({
  articles,
  article,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Channel Positivity</title>
        {/* <meta name="description" content="Channel Positivity relaxing music" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: "177.77777778vh",
          minWidth: "100%",
          height: "100%",
          minHeight: "56.25vw",
          zIndex: 1,
        }}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <main className={styles.main}>
        <div
          style={{ boxShadow: "0 2px 14px rgba(0,0,0,0.4)", height: "64px" }}
        >
          <Image
            src="/logo.png"
            alt="Channel Positivity Logo"
            width={64}
            height={64}
          />
        </div>
        <br />
        <h1 className={styles.title}>Coming Soon...</h1>
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            right: "2rem",
          }}
        >
          <a
            href="https://www.youtube.com/c/ChannelPositivity"
            rel="noreferrer"
            target="_blank"
          >
            YouTube
          </a>
          &nbsp; &nbsp;
          <a
            href="https://open.spotify.com/artist/2LFhC8vqTukDcbxa3xRJnh"
            rel="noreferrer"
            target="_blank"
          >
            Spotify
          </a>
        </div>

        {/* {articles.map((article, index) => (
          <React.Fragment key={index}>
            <h2>{article.title}</h2>
            <MarkdownDocument markdown={article.markdown} />
          </React.Fragment>
        ))} */}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.id) {
    return {
      props: {
        articles,
      },
    };
  }

  const article = articles.find(({ slug }) => slug === params.id);

  return {
    props: {
      article,
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
