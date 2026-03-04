"use client";
import { createContext, useState } from "react";
import React from "react";

import { cn } from "~components/lib/utils";
import type { ThemeMode } from "~utils/theme-mode";
import { persistMode, readMode } from "~utils/theme-mode";

type ThemeContextType = {
  mode: ThemeMode;
  toggleMode: () => void;
};
export const MySpaceThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function useMySpaceTheme(): ThemeContextType {
  const context = React.useContext(MySpaceThemeContext);

  if (context === undefined) {
    throw new Error("useMySpaceTheme must be used within a MySpaceThemeProvider");
  }

  return context;
}
export function MySpaceThemeProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [mode, setMode] = useState<ThemeMode>(() => readMode());
  const toggleMode = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark";
      persistMode(newMode);
      return newMode;
    });
  };
  return (
    <MySpaceThemeContext.Provider value={{ mode, toggleMode }}>
      <div id="my-space-root" className={cn(mode === "dark" ? "my-spaceDark" : "")}>
        <div className="bg-background text-foreground transition-colors duration-300">{children}</div>
      </div>
    </MySpaceThemeContext.Provider>
  );
}
