import { Button } from "~components/elements/button";

import { fireEvent, render, screen } from "./test-utils";

const defaultProps = {
  children: "Click me",
  onClick: jest.fn(),
};

it("renders default button and handles interactions", () => {
  render(<Button {...defaultProps} variant="default" />);

  const button = screen.getByRole("button", { name: "Click me" });

  // text check
  expect(button).toBeInTheDocument();

  // click
  fireEvent.click(button);
  expect(defaultProps.onClick).toHaveBeenCalledTimes(1);

  // hover
  fireEvent.mouseOver(button);
  expect(button).toHaveClass("hover:bg-white/10");

  // unhover
  fireEvent.mouseOut(button);
  expect(button).toHaveClass("bg-transparent");
});
