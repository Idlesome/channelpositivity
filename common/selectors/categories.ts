import articles from "../../data/articles/meditation";

export const getCategories = () => {
  let set: Set<string> = new Set([]);
  for (let articleIndex = 0; articleIndex < articles.length; articleIndex++) {
    for (
      let categoryIndex = 0;
      categoryIndex < articles[articleIndex].categories.length;
      categoryIndex++
    ) {
      set.add(articles[articleIndex].categories[categoryIndex]);
    }
  }

  return Array.from(set);
};