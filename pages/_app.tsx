import "../styles/globals.css";

import React from "react";

import { LayoutProvider } from "~layouts";
import type { NextComponentType } from "~types/next";

import type { AppProps } from "next/app";

interface CustomAppProps extends AppProps {
  Component: NextComponentType;
  pageProps: Record<string, unknown>;
}

const MyApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  return (
    <LayoutProvider layout={Component.layout}>
      <Component {...pageProps} />
    </LayoutProvider>
  );
};

export default MyApp;
