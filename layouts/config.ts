import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export enum LayoutType {
  Default = "default",
}

export const layouts: Record<LayoutType, ComponentType> = {
  [LayoutType.Default]: dynamic(
    async () => import("~layouts/templates/default")
  ),
} as const;
