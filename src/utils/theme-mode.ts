import { getFromLocalStorage, setToLocalStorage } from "./local-storage";
export type ThemeMode = "dark" | "light";

export const MODE_KEY = "mode";
export function readMode(): ThemeMode {
  return getFromLocalStorage<ThemeMode>(MODE_KEY) ?? "dark";
}
export function persistMode(mode: ThemeMode): void {
  setToLocalStorage<ThemeMode>(MODE_KEY, mode);
}
