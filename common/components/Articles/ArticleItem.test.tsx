import { render, screen } from "@testing-library/react";
import { ArticleItem } from "./ArticleItem";
import "@testing-library/jest-dom/vitest";

describe("<ArticleItem/>", () => {
  it("renders without error", async () => {
    render(
      <ArticleItem
        article={{
          title: "Test Title",
          markdown: "# Title",
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

    expect(screen.getByRole("heading")).toHaveTextContent("Test Title");
    screen.getByText("Article excerpt");
  });
});
