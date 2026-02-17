import { Input } from "~components/elements/input";

import { render, screen } from "./test-utils";

const defaultProps = {
  label: "Email",
  defaultValue: "test@example.com",
  placeholder: "",
  type: "email",
};

it("renders the TextInput with the provided props", () => {
  render(<Input {...defaultProps} />);
  const input = screen.getByRole("textbox", { name: /email/iu });
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("type", "email");
});
