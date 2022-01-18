import Home from "~pages/index";

import { render } from "@testing-library/react";

describe("Tesing page example", () => {
  it("should render home", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
