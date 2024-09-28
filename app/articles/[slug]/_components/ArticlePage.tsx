import { CoverImage } from "common/components/CoverImage";
import { MarkdownDocument } from "common/components/MarkdownDocument";
import { PageHead } from "common/components/layout/PageHead";
import { NextArticle } from "common/components/Articles/NextArticle";

type Props = {
  article: Article;
};

function ArticlePage({ article }: Props) {
  const title = article.title + " - Channel Positivity";
  return (
    <>
      <PageHead title={title} />

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
    </>
  );
}

export { ArticlePage };
