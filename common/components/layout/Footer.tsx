import React from "react";
import { SocialMediaLink } from "../SocialMediaLink";
import { Subscribe } from "../Subscribe";

export const Footer = () => (
  <>
    <footer className="prose prose-stone w-full max-w-none flex flex-col items-center justify-center px-4 py-8 text-slate-500 bg-slate-50 flex-grow-0">
      <Subscribe />
      <br />
      <div className="flex">
        <SocialMediaLink
          href="https://www.youtube.com/c/ChannelPositivity"
          text="YouTube"
        />
        &nbsp; &nbsp;
        <SocialMediaLink
          href="https://open.spotify.com/artist/2LFhC8vqTukDcbxa3xRJnh"
          text="Spotify"
        />
      </div>
      <small>&copy; Copyright Channel Positivity</small>
    </footer>
  </>
);
