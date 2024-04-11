import React from "react";

import { TestTranslationProvider } from "~i18n";

import type { RenderOptions, RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { ReactElement } from "react";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <TestTranslationProvider>{children}</TestTranslationProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
