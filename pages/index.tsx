import type { GetStaticProps, NextPage } from "next";
import { articles } from "../data/articles/markdown";
import { Footer, Header } from "common/components/layout";
import { ArticlesList } from "common/components/Articles/ArticlesList";
import { PageHead } from "common/components/layout/PageHead";

const Home: NextPage<{
  articles: Article[];
}> = ({ articles }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHead
        title="Channel Positivity"
        description="Channel Positivity is here to bring original experiences to YouTube to help you develop spiritually and channel your positivity."
      />

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

export default Home;
