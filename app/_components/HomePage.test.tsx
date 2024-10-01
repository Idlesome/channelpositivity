import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";

const articles: Article[] = [
  {
    slug: "you-dont-need-to-meditate",
    excerpt:
      "This aim of this blog is to be a practical, no-nonsense guide to understanding and applying the fundamentals of Buddhism for greater resilience and inner peace in your life. It also aims...",
    published: true,
    markdown: "Page contents",
    title: "You Don’t Need To Meditate",
    categories: ["meditation"],
    meta: {
      title: "You Don’t Need To Meditate",
      description:
        "This aim of this blog is to be a practical, no-nonsense guide to understanding and applying the fundamentals of Buddhism for greater resilience and inner peace in your life. It also aims...",
    },
    images: {
      cover: {
        src: "mountain_temple.jpg",
        alt: "Peaceful Mountain Temple",
        color: "#4F3A63",
      },
    },
    publish_date: "2024-07-10",
  },
  {
    slug: "it-starts-with-you",
    excerpt:
      "Studying modern Buddhism is hard work. There are so many books on the topic, it’s actually very difficult to get to the core message of Buddhism. Even Reddit’s r/zen is a reportedly...",
    published: true,
    markdown: "Page contents",
    title: "It Starts With You",
    categories: ["meditation"],
    meta: {
      title: "It Starts With You",
      description:
        "Studying modern Buddhism is hard work. There are so many books on the topic, it’s actually very difficult to get to the core message of Buddhism. Even Reddit’s r/zen is a reportedly...",
    },
    images: {
      cover: {
        src: "mountains_tapestry.jpg",
        alt: "Peaceful Mountain Temple",
        color: "#4F3A63",
      },
    },
    publish_date: "2024-08-10",
  },
  {
    slug: "there-is-only-now",
    excerpt:
      "Understanding your relationship with time is one of the most important and liberating concepts you can explore. There’s a lot that we take for granted about time which, when understood, can instantly...",
    published: true,
    markdown: "Page contents",
    title: "There is Only Now",
    categories: ["meditation"],
    meta: {
      title: "There is Only Now",
      description:
        "Understanding your relationship with time is one of the most important and liberating concepts you can explore. There’s a lot that we take for granted about time which, when understood, can instantly...",
    },
    images: {
      cover: {
        src: "atmospheric_clock.jpg",
        alt: "Peaceful Mountain Temple",
        color: "#4F3A63",
      },
    },
    publish_date: "2024-09-10",
  },
];

describe("<HomePage/>", () => {
  it("renders a list of articles", () => {
    render(<HomePage articles={articles} />);

    expect(screen.getAllByRole("heading").length).toBe(3);
  });
});
