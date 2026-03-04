"use client";

import { MySpaceThemeProvider } from "./MySpaceThemeProvider";

import type { ReactNode } from "react";

export default function MySpaceLayout({ children }: { children: ReactNode }): React.JSX.Element {
  return <MySpaceThemeProvider>{children}</MySpaceThemeProvider>;
}
