import foreword from "./foreword.md";
import chapter_1___start_the_conversation from "./chapter-1---start-the-conversation.md";
import chapter_2 from "./chapter-2.md";
import chapter_3 from "./chapter-3.md";
const articles: Article[] = [
  {
    title: "Foreword",
    slug: "foreword",
    markdown: foreword,
    excerpt:
      "At a time when the word ‘mindfulness’ has taken on a meaning that is contradictory to the spirit of it’s original conception, we are overloaded with information about Buddhism, meditation and basic...",
    categories: ["meditation"],
    meta: {
      title: "Foreword",
      description:
        "At a time when the word ‘mindfulness’ has taken on a meaning that is contradictory to the spirit of it’s original conception, we are overloaded with information about Buddhism, meditation and basic...",
    },
    images: {
      cover: {
        src: "mountain_temple.jpg",
        alt: "Peaceful Mountain Temple",
        color: "#4F3A63",
      },
    },
  },
  {
    title: "Chapter 1 - Start the Conversation",
    slug: "chapter-1---start-the-conversation",
    markdown: chapter_1___start_the_conversation,
    excerpt:
      "Studying modern Buddhism is hard work. There are so many books on the topic, it’s actually very difficult to get to the core message of Buddhism....",
    categories: ["meditation"],
    meta: {
      title: "Chapter 1 - Start the Conversation",
      description:
        "Studying modern Buddhism is hard work. There are so many books on the topic, it’s actually very difficult to get to the core message of Buddhism....",
    },
    images: {
      cover: {
        src: "mountain_temple.jpg",
        alt: "Peaceful Mountain Temple",
        color: "#4F3A63",
      },
    },
  },
  {
    title: "Chapter 2",
    slug: "chapter-2",
    markdown: chapter_2,
    excerpt: "…...",
    categories: ["meditation"],
    meta: { title: "Chapter 2", description: "…..." },
    images: {
      cover: {
        src: "mountain_temple.jpg",
        alt: "Peaceful Mountain Temple",
        color: "#4F3A63",
      },
    },
  },
  {
    title: "Chapter 3",
    slug: "chapter-3",
    markdown: chapter_3,
    excerpt: "…...",
    categories: ["meditation"],
    meta: { title: "Chapter 3", description: "…..." },
    images: {
      cover: {
        src: "mountain_temple.jpg",
        alt: "Peaceful Mountain Temple",
        color: "#4F3A63",
      },
    },
  },
];
export default articles;
