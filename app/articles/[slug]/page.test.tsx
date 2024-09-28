import { render, screen } from "@testing-library/react";
import ArticlePageRoute, {
  generateMetadata,
  generateStaticParams,
} from "./page";

describe("<ArticlePageRoute/>", () => {
  it("renders an article", () => {
    render(
      <ArticlePageRoute
        params={{
          slug: "it-starts-with-you",
        }}
      />
    );

    screen.getByRole("article");
  });

  it("generates metadata", async () => {
    const metadata = await generateMetadata({
      params: { slug: "it-starts-with-you" },
    });

    expect(metadata).toHaveProperty("title");
    expect(metadata).toHaveProperty("description");
    expect(metadata).toHaveProperty("openGraph");
  });

  it("provides route parameters", async () => {
    const params = await generateStaticParams();
    expect(params.length).toBeGreaterThan(0);
  });
});
