export function articleIsPublished(article: any) {
  if (!article.publish_date) return false;
  const publish_date = new Date(article.publish_date);
  return publish_date < new Date();
}
