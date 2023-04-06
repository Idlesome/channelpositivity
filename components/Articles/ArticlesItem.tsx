import { CoverImage } from "components/CoverImage";

type Props = {
  article: Article;
};
const ArticlesItem = ({ article }: Props) => {
  return (
    <>
      <a href={`/articles/${article.slug}`}>
        <CoverImage image={article.images.cover} className="my-0" />
        <h2 className="px-4 md:px-0">{article.title}</h2>
      </a>
      <div className="px-4 md:px-0">
        <em>{article.excerpt}</em>
      </div>
    </>
  );
};
export default ArticlesItem;
