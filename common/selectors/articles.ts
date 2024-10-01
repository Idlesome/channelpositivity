export function articleIsPublished(article: Article) {
  const publish_date = new Date(article.publish_date);
  return publish_date < new Date();
}
