import { SITE_CONFIG } from "~config/site";
import Home from "~pages/index";

import { render } from "@testing-library/react";

describe("Testing page example", () => {
  it("should find the title", () => {
    const { getAllByText } = render(<Home />);
    const title = getAllByText(SITE_CONFIG.title.toUpperCase());
    expect(title.length).toBe(1);
  });
});
