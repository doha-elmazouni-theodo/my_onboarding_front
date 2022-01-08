import "../styles/globals.css";

import React from "react";

import type { NextComponentType } from "next";
import type { AppProps } from "next/app";

interface CustomAppProps extends AppProps {
  Component: NextComponentType;
  pageProps: Record<string, unknown>;
}

const MyApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
