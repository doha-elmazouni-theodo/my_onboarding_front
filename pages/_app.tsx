import "../styles/globals.css";

import React, { StrictMode } from "react";

import { LayoutProvider } from "~layouts";
import { StoreProvider } from "~store/provider";
import type { NextComponentType } from "~types/next";
import notistackRef from "~utils/notistackRef";
import { queryClient } from "~utils/queryClient";

import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { QueryClientProvider } from "react-query";

interface CustomAppProps extends AppProps {
  Component: NextComponentType;
  pageProps: Record<string, unknown>;
}

const MyApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  return (
    <StrictMode>
      <StoreProvider>
        <SnackbarProvider ref={notistackRef} maxSnack={2}>
          <QueryClientProvider client={queryClient}>
            <LayoutProvider layout={Component.layout}>
              <Component {...pageProps} />
            </LayoutProvider>
          </QueryClientProvider>
        </SnackbarProvider>
      </StoreProvider>
    </StrictMode>
  );
};

export default MyApp;
