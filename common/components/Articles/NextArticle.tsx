import React from "react";
import { ChevronRight } from "common/components/Icons/ChevronRight";
import { articleIsPublished } from "common/selectors/articles";

export function NextArticle({ article }: { article: Article }) {
  if (!article.next_article) return null;

  const nextArticleIsPublished = articleIsPublished(article.next_article);

  return (
    <aside className="px-4 md:px-0 flex justify-center">
      <a
        onClick={nextArticleIsPublished ? undefined : (e) => e.preventDefault()}
        href={
          nextArticleIsPublished
            ? `/articles/${article.next_article.slug}`
            : "#"
        }
        className="no-underline mb-8 flex flex-col bg-slate-100 p-8 rounded"
      >
        <span className="text-xs text-slate-500">Next article</span>
        <h5
          className={`text-xl mb-0 ${nextArticleIsPublished ? "underline" : ""} font-normal`}
        >
          {article.next_article.title}
          {nextArticleIsPublished && (
            <ChevronRight className="inline ml-2" width="12px" height="18px" />
          )}
        </h5>
        {nextArticleIsPublished ? (
          <blockquote
            className="text-sm my-2 border-l-0 pl-0"
            cite={`/articles/${article.next_article.slug}`}
          >
            {article.next_article.excerpt}
          </blockquote>
        ) : (
          <>Coming {article.next_article.publish_date}</>
        )}
      </a>
    </aside>
  );
}
