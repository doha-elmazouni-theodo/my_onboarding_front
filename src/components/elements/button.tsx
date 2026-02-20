import * as React from "react";

import { cn } from "~components/lib/utils";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "flex  cursor-pointer place-items-center justify-center  gap-3  rounded-full p-4  font-medium transition-all",
  {
    variants: {
      variant: {
        primary: [
          "bg-white text-black",
          "hover:bg-[var(--burnt-sienna)] hover:text-white",
          "active:bg-[var(--burnt-sienna-dark)]",
          "disabled:bg-[var(--mineshaft)] disabled:text-[var(--mid-gray)]",
        ].join(" "),
        default: [
          "bg-transparent border-2 text-white border-white",
          "hover:bg-white/10 hover:outline-1 hover:outline-white",
          "active:bg-white/20 active:outline-1 active:outline-white",
          "disabled:border-white/30 disabled:text-white/40",
        ].join(" "),
      },

      fullWidth: {
        true: "w-full",
        false: "w-[138px]",
      },
    },

    defaultVariants: {
      variant: "primary",
      fullWidth: false,
    },
  },
);

function Button({
  className,
  variant,
  fullWidth,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }): React.ReactElement {
  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, fullWidth, className }))} {...props} />;
}

export { Button };
