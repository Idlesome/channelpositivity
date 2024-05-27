import { SocialMediaLink } from "common/components/SocialMediaLink";
import ExportedImage from "next-image-export-optimizer";

type Props = {
  children: React.ReactNode;
};

export const SidebarContainer = ({ children }: Props) => {
  return (
    <>
      <div className="flex">
        <ExportedImage
          className="my-0"
          src="/images/global/logo.png"
          alt="Channel Positivity Logo"
          width={42}
          height={42}
        />
        <h1 className="brand-font mx-3 text-2xl self-center">
          Channel Positivity
        </h1>
      </div>
      <main className="prose prose-stone">{children}</main>
      <footer className="mt-auto prose prose-stone w-full max-w-none flex flex-col items-center justify-center px-4 py-8 text-slate-500 bg-slate-50 flex-grow-0">
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
};
