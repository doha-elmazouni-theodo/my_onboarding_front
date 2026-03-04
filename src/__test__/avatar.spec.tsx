import { MySpaceThemeProvider } from "~app/mySpace/MySpaceThemeProvider";
import Avatar from "~components/avatar/Avatar";

import { fireEvent, render, screen } from "./test-utils";
const mockRouter = {
  push: jest.fn(),
};
jest.mock("next/navigation", () => ({
  useRouter: () => mockRouter,
}));

describe.skip("Avatar component", () => {
  const defaultProps = {
    fullname: "Doha El Mazouni",
    position: "Frontend Developer",
  };
  const ThemeWrapper = ({ children }: { children: React.ReactNode }) => (
    <MySpaceThemeProvider>{children}</MySpaceThemeProvider>
  );
  it("check if opens and closes popover on click", () => {
    render(<Avatar {...defaultProps} />, { wrapper: ThemeWrapper });

    const avatar = screen.getByText("DE");

    expect(screen.queryByText("Frontend Developer")).not.toBeInTheDocument();

    fireEvent.click(avatar);

    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();

    fireEvent.click(avatar);

    expect(screen.queryByText("Frontend Developer")).not.toBeInTheDocument();
  });
});
