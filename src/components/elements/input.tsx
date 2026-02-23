import * as React from "react";

import { cn } from "~components/lib/utils";
import TranslateMessage from "~i18n/TranslateMessage";

import type { ReactNode } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "default" | "password";
  label?: ReactNode | string;

  error?: boolean;
  errorMessage?: ReactNode;
  endAdornment?: ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",

      label,
      disabled,
      error = false,
      errorMessage,
      endAdornment,
      ...props
    },
    ref,
  ) => {
    const inputId = React.useId();

    const borderClass = error
      ? "border-[var(--burnt-sienna)] focus-visible:border-[var(--burnt-sienna)]"
      : "border-[#404040] hover:border-[#606060] focus-visible:border-white";

    const labelColorClass = error ? "text-[var(--burnt-sienna)]" : "text-white";

    return (
      <div className="group relative w-full">
        <input
          id={inputId}
          ref={ref}
          type={type}
          placeholder=" "
          disabled={disabled}
          className={cn(
            `
            peer w-full rounded-none border-0 border-b-2 bg-transparent
            px-0 pt-6 pb-2 text-white transition-colors duration-200
            focus-visible:ring-0 focus-visible:outline-none
            disabled:cursor-not-allowed disabled:border-[#404040]
            `,
            borderClass,
            Boolean(endAdornment) && "pr-10",
            className,
          )}
          {...props}
        />

        {/* Floating Label */}
        {Boolean(label) && (
          <label
            htmlFor={inputId}
            className={cn(
              `
              absolute top-4 left-0 text-[16px] font-light
              transition-all duration-200
              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:text-[13px]
              peer-focus:top-0 peer-focus:text-[13px]
              `,
              labelColorClass,
            )}
          >
            {label}
          </label>
        )}

        {/* Error message */}
        {Boolean(errorMessage) && (
          <p className="mt-2 text-[13px] font-light text-(--burnt-sienna)">
            <TranslateMessage txKey={errorMessage as string} />
          </p>
        )}

        {/* Right adornment (eg: eye icon for password visibility) */}
        {Boolean(endAdornment) && (
          <div
            className="
              absolute top-1/2 right-0 -translate-y-1/2
              text-[#606060] transition-colors
              group-focus-within:text-white active:text-white
            "
          >
            {endAdornment}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
