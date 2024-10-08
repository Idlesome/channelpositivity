import React from "react";
import ExportedImage from "next-image-export-optimizer";

export const Header = () => {
  return (
    <header className="prose prose-stone m-auto width-65ch">
      <div className="flex items-center px-4 md:px-0 w-full justify-between">
        <a
          href="https://channelpositivity.com"
          className="flex items-center py-4 md:px-0 justify-center md:justify-start no-underline"
        >
          <ExportedImage
            className="my-0"
            src="/images/global/logo.png"
            alt="Channel Positivity Logo"
            width={32}
            height={32}
          />
          <span className="px-4 brand-font">Channel Positivity</span>
        </a>
      </div>
    </header>
  );
};
