import { render, screen } from "@testing-library/react";
import HomePageRoute from "./page";

describe("<HomePageRoute/>", () => {
  it("renders a list of articles", () => {
    render(<HomePageRoute />);

    expect(screen.getAllByRole("heading").length).toBeGreaterThan(0);
  });
});
