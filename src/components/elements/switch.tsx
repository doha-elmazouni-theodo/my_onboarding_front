"use client";

import * as React from "react";

import { cn } from "~components/lib/utils";

import { Switch as SwitchPrimitive } from "radix-ui";
import type { ReactElement } from "react";

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>): ReactElement {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "group relative inline-flex h-4.5 w-[35px] shrink-0 items-center rounded-full",
        "transition-colors duration-200",
        "data-[state=checked]:bg-background-switch-light-secondary data-[state=unchecked]:bg-background-switch-dark-secondary",
        "focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "-top-0.2 pointer-events-none absolute -left-0.5 grid size-4.5  place-items-center rounded-full",
          "shadow-md transition-transform duration-200",
          "data-[state=unchecked]:bg-background-switch-dark-primary data-[state=unchecked]:text-text-switch-dark",
          "data-[state=checked]:bg-background-switch-light-primary data-[state=checked]:text-text-switch-light",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
        )}
      >
        <span className="text-xs leading-none group-data-[state=checked]:hidden">×</span>
        <span className="hidden text-xs leading-none group-data-[state=checked]:inline">✓</span>
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };
