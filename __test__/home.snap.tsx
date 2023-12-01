import HomePage from "~app/page";

import { render } from "@testing-library/react";

describe("Testing page example", () => {
  it("should render home", () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
