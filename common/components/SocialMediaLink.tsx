import React, { Children } from "react";

type Props = {
  href: string;
  text: string;
};

export const SocialMediaLink = ({ href, text }: Props) => (
  <a href={href} rel="noreferrer" target="_blank">
    {text}
  </a>
);
