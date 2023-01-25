import React from "react";
import Image from "next/image";
import logo from "components/images/logo.png";

export const Header = () => (
  <header className="prose prose-stone m-auto">
    <a
      href="https://channelpositivity.com"
      className="flex items-center py-4 md:px-0 justify-center md:justify-start no-underline"
    >
      <Image
        className="my-0"
        src={logo}
        alt="Channel Positivity Logo"
        width={32}
        height={32}
      />
      <span className="px-4" style={{ fontFamily: "Skia" }}>
        Channel Positivity
      </span>
    </a>
  </header>
);
