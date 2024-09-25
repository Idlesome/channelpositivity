import { ArticleItem } from "./ArticleItem";

type Props = {
  articles: Article[];
};
export const ArticlesList = ({ articles }: Props) => {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className="mb-8">
          <ArticleItem article={article} key={index} />
        </div>
      ))}
    </>
  );
};
