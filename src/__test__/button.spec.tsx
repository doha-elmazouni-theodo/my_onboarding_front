import { Button } from "~components/elements/button";

import { render, userEvent } from "./test-utils";

// eslint-disable-next-line no-restricted-imports
import { screen } from "@testing-library/react";

const defaultProps = {
  children: "Click me",
  onClick: jest.fn(),
};

it("renders the button with text", () => {
  render(<Button {...defaultProps} />);
  expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
});

it("calls onClick when clicking the button", async () => {
  const user = userEvent.setup();

  render(<Button {...defaultProps} />);

  await user.click(screen.getByRole("button", { name: "Click me" }));
  expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
});
