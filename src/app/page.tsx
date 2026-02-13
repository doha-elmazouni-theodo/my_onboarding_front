import Home from "~components/home";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dojo Theodo",
};

const HomePage: React.FC = () => {
  return <Home />;
};

export default HomePage;
