import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export enum LayoutType {
  Default = "default",
  About = "about",
}

export const layouts: Record<LayoutType, ComponentType> = {
  [LayoutType.Default]: dynamic(async () => import("~layouts/templates/default")),
  [LayoutType.About]: dynamic(async () => import("~layouts/templates/about")),
} as const;
