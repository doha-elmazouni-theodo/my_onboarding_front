import Home from "~components/home";

import { Renderer } from "./Renderer";
import { screen, userEvent } from "./test-utils";

const mockRouter = {
  push: jest.fn(),
};
jest.mock("next/navigation", () => ({
  useRouter: () => mockRouter,
}));

it("should render Sign In button", async () => {
  new Renderer(<Home />).withTranslation().render();
  const signInButton = screen.getByRole("button", {
    name: /se connecter/iu,
  });
  await userEvent.click(signInButton);
  expect(mockRouter.push).toHaveBeenCalledWith("/signin");
});
