import { render, screen } from "@testing-library/react";
import { ArticlePage } from "./ArticlePage";

describe("<ArticlePage/>", () => {
  it("renders a title, markdown and published date", () => {
    render(
      <ArticlePage
        article={{
          title: "Test Title",
          markdown: "# Markdown Title",
          slug: "test-slug",
          meta: {
            title: "test meta title",
            description: "test meta description",
          },
          excerpt: "Article excerpt",
          categories: ["category"],
          images: {
            cover: {
              src: "mountain_temple.jpg",
              alt: "Peaceful Mountain Temple",
              color: "#4F3A63",
            },
          },
          publish_date: "2024-07-10",
        }}
      />
    );
    screen.getByText("Test Title");
    screen.getByText("Markdown Title");
    screen.getByText("Published: 2024-07-10");
  });

  it("renders the next article", () => {
    render(
      <ArticlePage
        article={{
          title: "Test Title",
          markdown: "# Markdown Title",
          slug: "test-slug",
          meta: {
            title: "test meta title",
            description: "test meta description",
          },
          excerpt: "Article excerpt",
          categories: ["category"],
          images: {
            cover: {
              src: "mountain_temple.jpg",
              alt: "Peaceful Mountain Temple",
              color: "#4F3A63",
            },
          },
          publish_date: "2024-07-10",

          next_article: {
            title: "Next Article Title",
            markdown: "# Markdown Title",
            slug: "test-slug",
            meta: {
              title: "test meta title",
              description: "test meta description",
            },
            excerpt: "Article excerpt",
            categories: ["category"],
            images: {
              cover: {
                src: "mountain_temple.jpg",
                alt: "Peaceful Mountain Temple",
                color: "#4F3A63",
              },
            },
            publish_date: "2024-07-10",
          },
        }}
      />
    );
    screen.getByText("Next Article Title");
  });
});
