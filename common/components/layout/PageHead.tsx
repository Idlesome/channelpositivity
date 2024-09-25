import React, { useEffect } from "react";
import Head from "next/head";

function isElementNearViewport(element: any) {
  const rect = element.getBoundingClientRect();
  if (parseInt(rect.bottom) <= window.innerHeight + 600) {
    return true;
  }
}

export const PageHead = ({
  article,
  title,
  description,
}: {
  article?: Article;
  title: string;
  description?: string;
}) => {
  useEffect(() => {
    (window as any).lazyLoadElements = [];

    window.addEventListener("scroll", () => {
      (window as any).lazyLoadElements.forEach(
        (element: HTMLIFrameElement, index: number) => {
          if (isElementNearViewport(element)) {
            element.src = element.dataset.src ?? "";
            // Remove this element from the list
            (window as any).lazyLoadElements.splice(index, 1);
          }
        }
      );
    });
    document.querySelectorAll("iframe[data-src]").forEach((element, index) => {
      (window as any).lazyLoadElements[index] = element;
    });
  }, []);
  return (
    <Head>
      <title>{title}</title>
      {article ? (
        <>
          <meta name="description" content={article.meta.description} />
          <meta
            property="article:published_time"
            content={article.publish_date}
          />
        </>
      ) : (
        <meta name="description" content={description} />
      )}

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
