import { ArticlesList } from "common/components/Articles/ArticlesList";

type Props = {
  articles: Article[];
};

function HomePage({ articles }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="prose prose-stone prose-headings:mt-4 prose-headings:mb-2 m-auto flex-grow">
        <ArticlesList articles={articles} />
      </main>
    </div>
  );
}

export { HomePage };
