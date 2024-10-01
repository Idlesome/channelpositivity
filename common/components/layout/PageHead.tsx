"use client";
import React, { useEffect } from "react";
import Head from "next/head";

function isElementNearViewport(element: Element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom <= window.innerHeight + 600;
}

let lazyLoadElements: HTMLIFrameElement[] = [];

export const PageHead = ({ title }: { title: string }) => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      lazyLoadElements.forEach((element: HTMLIFrameElement, index: number) => {
        if (isElementNearViewport(element)) {
          element.src = element.dataset.src ?? "";
          // Remove this element from the list
          lazyLoadElements.splice(index, 1);
        }
      });
    });

    lazyLoadElements = Array.from(
      document.querySelectorAll("iframe[data-src]")
    ) as HTMLIFrameElement[];
  }, []);
  return (
    <Head>
      <title>{title}</title>

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
