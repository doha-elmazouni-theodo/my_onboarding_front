import HomePage from "~app/page";
import { SITE_CONFIG } from "~config/site";

import { render } from "@testing-library/react";

describe("Testing page example", () => {
  it("should find the title", () => {
    const { getAllByText } = render(<HomePage />);
    const title = getAllByText(SITE_CONFIG.title.toUpperCase());
    expect(title.length).toBe(1);
  });
});
