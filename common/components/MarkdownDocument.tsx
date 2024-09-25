import React from "react";
import { marked } from "marked";

type Props = {
  markdown: string;
};

export function MarkdownDocument({ markdown }: Props) {
  const html = marked.parse(markdown);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
