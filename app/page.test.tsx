import { render, screen } from "@testing-library/react";
import HomePageRoute from "./page";
import { articles } from "data/articles/markdown";

describe("<HomePageRoute/>", () => {
  it("renders more than one article", () => {
    render(<HomePageRoute />);

    screen.getByText(articles[0].title);
    expect(screen.getAllByRole("heading").length).toBeGreaterThan(1);
  });
});
