import * as React from "react";

import { cn } from "~components/lib/utils";

import { Eye, EyeOff } from "lucide-react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "default" | "password";
  label?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", variant = "default", label, disabled, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const isPassword = variant === "password";

    let inputType = type;

    const inputId = React.useId();

    if (isPassword) {
      inputType = showPassword ? "text" : "password";
    }

    return (
      <div className="group relative w-full">
        <input
          id={inputId}
          ref={ref}
          type={inputType}
          placeholder=" "
          disabled={disabled}
          className={cn(
            `
            peer
            w-full
            rounded-none
            border-0
            border-b-2
            border-[#404040]
            bg-transparent
            px-0
            pt-6
            pb-2
            text-white
            transition-colors
            duration-200

            hover:border-[#606060]

            focus-visible:border-white
            focus-visible:ring-0
            focus-visible:outline-none

            disabled:cursor-not-allowed
            disabled:border-[#404040]
            `,
            isPassword && "pr-10",
            className,
          )}
          {...props}
        />

        {/* Floating Label */}
        {Boolean(label ?? "") && (
          <label
            htmlFor={inputId}
            className="
              absolute
              top-4
              left-0
              text-[16px]
              text-[#606060]
              transition-all
              duration-200

              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:text-[13px]
              peer-focus:top-0

              peer-focus:text-[13px]
              peer-focus:text-white
            "
          >
            {label}
          </label>
        )}

        {/* Password Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => {
              setShowPassword((prev) => !prev);
            }}
            className="
              absolute
              top-1/2
              right-0
              -translate-y-1/2
              text-[#606060]
              transition-colors
              group-focus-within:text-white
              active:text-white
            "
          >
            {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
          </button>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
