"use client";

import * as React from "react";

import { useMySpaceTheme } from "~app/mySpace/MySpaceThemeProvider";
import { Popover, PopoverContent, PopoverTrigger } from "~components/elements/popover";
import { Switch } from "~components/elements/switch";
import { cn } from "~components/lib/utils";
import { useLogout } from "~hooks/signin.hook";

import Image from "next/image";

type AvatarProps = {
  id?: string;
  fullname: string;
  position: string;
  src?: string;
};

export default function Avatar({ id = "user-avatar", fullname, position, src }: AvatarProps): React.JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const { mode, toggleMode } = useMySpaceTheme();
  const { mutate: logout } = useLogout();
  const container = typeof document === "undefined" ? null : document.getElementById("my-space-root");

  const initials = fullname
    .split(" ")
    .slice(0, 2)
    .map((name) => name[0]?.toUpperCase())
    .join("");

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          id={id}
          type="button"
          onClick={handleClick}
          className="relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-red-500 text-xs font-semibold text-white hover:opacity-90"
          aria-label="Open user menu"
        >
          {src !== undefined && src !== "" ? (
            <Image src={src} alt={fullname} fill className="object-cover" sizes="40px" />
          ) : (
            <span>{initials}</span>
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent
        side="bottom"
        align="end"
        container={container}
        sideOffset={10}
        className={cn("w-65 rounded-xl border border-white/10 bg-black shadow-lg", "p-4")}
      >
        {/* Header */}
        <div className="flex flex-col gap-1">
          <p className="text-base leading-none font-semibold text-white">{fullname}</p>
          <p className="text-sm text-ring">{position}</p>
        </div>

        <div className="my-4 h-px w-full bg-white/10" />

        {/* Menu */}
        <div className="flex flex-col">
          <button type="button" className="py-2 text-left text-sm text-ring hover:opacity-90">
            Settings
          </button>

          <div className="flex items-center justify-between py-2">
            <p className="text-sm text-ring">Dark mode</p>
            <Switch checked={mode === "dark"} onCheckedChange={toggleMode} />
          </div>

          <button type="button" className="py-2 text-left text-sm text-ring hover:opacity-90">
            Help
          </button>
        </div>

        <div className="my-4 h-px w-full bg-white/10" />

        {/* Logout */}
        <button
          type="button"
          onClick={() => {
            logout();
          }}
          className="text-left text-sm text-ring hover:opacity-90"
        >
          Log out
        </button>
      </PopoverContent>
    </Popover>
  );
}
