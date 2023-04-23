import React from "react";
import { marked } from "marked";

type Props = {
  markdown: string;
};

export function MarkdownDocument({ markdown }: Props) {
  const html = marked.parse(markdown);
  // const cleanHtml = DOMPurify.sanitize(html);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
