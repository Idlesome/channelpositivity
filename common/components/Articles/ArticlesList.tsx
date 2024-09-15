import { ArticlesItem } from "./ArticlesItem";

type Props = {
  articles: Article[];
};
export const ArticlesList = ({ articles }: Props) => {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className="mb-8">
          <ArticlesItem article={article} key={index} />
        </div>
      ))}
    </>
  );
};
