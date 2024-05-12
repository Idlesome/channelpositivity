import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import articles from "data/articles/markdown/";
import { Footer, Header } from "common/components/layout";
import { CoverImage } from "common/components/CoverImage";
import { MarkdownDocument } from "common/components/MarkdownDocument";
import { ChevronRight } from "common/components/Icons/ChevronRight";
import { PageHead } from "common/components/layout/PageHead";

function NextArticle({ article }: { article: Article }) {
  if (!article.next_article) return null;

  return (
    <aside className="px-4 md:px-0 flex justify-center">
      <a
        href={`/articles/${article.next_article.slug}`}
        className="no-underline mb-8 flex flex-col bg-slate-100 p-8 rounded"
      >
        <span className="text-xs text-slate-500">Next article</span>
        <h5 className="text-xl mb-0 underline font-normal">
          {article.next_article.title}
          <ChevronRight className="inline ml-2" width="12px" height="18px" />
        </h5>
        <blockquote
          className="text-sm my-2 border-l-0 pl-0"
          cite={`/articles/${article.next_article.slug}`}
        >
          {article.next_article.excerpt}
        </blockquote>
      </a>
    </aside>
  );
}

const ArticlePage: NextPage<{ article: Article }> = ({ article }) => {
  const title = article.title + " - Channel Positivity";
  return (
    <div>
      <PageHead article={article} title={title} />

      <Header />

      <main className="prose prose-stone m-auto">
        <CoverImage image={article.images.cover} className="mt-0" />
        <article className="px-4 md:px-0 prose-blockquote:text-xl prose-blockquote:font-bold prose-blockquote:text-slate-600">
          <h1 className="mb-2">{article.title}</h1>
          <p className="text-slate-500 text-xs my-0">
            Published: {article.publish_date}
          </p>
          <MarkdownDocument markdown={article.markdown} />
        </article>
        <NextArticle article={article} />
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
