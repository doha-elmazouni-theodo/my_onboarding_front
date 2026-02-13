import HomePage from "~app/page";

import { render } from "./test-utils";

describe("Testing page example", () => {
  it("should render background image div", () => {
    const { container } = render(<HomePage />);

    const backgroundDiv = container.getElementsByClassName("homepage-background");

    expect(backgroundDiv.length).toBe(1);
  });
});
