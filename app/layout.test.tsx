import { render } from "@testing-library/react";
import RootLayout from "./layout";

describe("<RootLayout/>", () => {
  it("renders the root layout", () => {
    render(
      <RootLayout>
        <div>test</div>
      </RootLayout>
    );
  });
});
