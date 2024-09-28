import type { Metadata } from "next";
import { HomePage } from "./_components/HomePage";
import { articles } from "data/articles/markdown";

function HomePageRoute() {
  return <HomePage articles={articles} />;
}

export const metadata: Metadata = {
  title: "Channel Positivity",
  description:
    "A blog dedicated to exploring inner peace, meditation and Buddhism",
};

export default HomePageRoute;
