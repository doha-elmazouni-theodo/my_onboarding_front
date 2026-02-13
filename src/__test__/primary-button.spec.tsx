import { Button } from "~components/elements/button";

import { render, screen, userEvent } from "./test-utils";

const defaultProps = {
  children: "Click me",
  onClick: jest.fn(),
  fullWidth: false,
  variant: "primary" as const,
};

it("renders the primary button with text", () => {
  render(<Button {...defaultProps} />);
  expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
});
it("calls onClick when clicking the button", async () => {
  const user = userEvent.setup();

  render(<Button {...defaultProps} />);

  await user.click(screen.getByRole("button", { name: "Click me" }));
  expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
});

it("Style matching on hover and unhover", async () => {
  const user = userEvent.setup();
  render(<Button {...defaultProps} />);
  const button = screen.getByRole("button", { name: "Click me" });
  await user.hover(button);
  expect(button).toHaveClass("hover:bg-[var(--burnt-sienna)]");
  expect(button).toHaveClass("hover:text-white");
  await user.unhover(button);
  expect(button).toHaveClass("bg-white");
  expect(button).toHaveClass("text-black");
});
