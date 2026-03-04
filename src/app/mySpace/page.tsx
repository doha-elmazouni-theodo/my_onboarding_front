"use client";

import * as React from "react";

import Avatar from "~components/avatar/Avatar";
import { Button } from "~components/elements/button";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from "~components/elements/drawer";
import { Input } from "~components/elements/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~components/elements/select";
import ImageHolder from "~components/imageHolder";
import PurchaseList from "~components/purchaseList/PurchaseList";

import { useMySpaceTheme } from "./MySpaceThemeProvider";

import Image from "next/image";

export default function MySpacePage(): React.JSX.Element {
  const { mode } = useMySpaceTheme();
  const isDark = mode === "dark";

  const [isOpen, setIsOpen] = React.useState(false);

  const defaultLogo = isDark ? "/svg/Logo.svg" : "/svg/hovered_Logo.svg";
  const hoverLogo = isDark ? "/svg/hovered_Logo.svg" : "/svg/Logo.svg";
  const addIcon = isDark ? "/svg/Add.svg" : "/svg/Add-Light.svg";

  const handleDrawerToggle = (): void => {
    setIsOpen((prev) => !prev);
  };
  const handleDrawerClose = (): void => {
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="w-full">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="group relative h-8 w-32.5">
            <Image
              src={defaultLogo}
              alt="Theodo"
              fill
              priority
              className="object-contain transition-opacity duration-150 group-hover:opacity-0"
            />
            <Image
              src={hoverLogo}
              alt="Theodo hover"
              fill
              priority
              className="object-contain opacity-0 transition-opacity duration-150 group-hover:opacity-100"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleDrawerToggle}
              className="flex size-9 cursor-pointer items-center justify-center rounded-full transition hover:bg-white/10"
              aria-label="Add"
            >
              <Image src={addIcon} alt="Add" width={16} height={16} />
            </button>
            <Avatar fullname="Doha Elmazouni" position="Theodoer" />
          </div>
        </div>
        <div className="h-px w-full bg-ring" />
      </header>

      <div className="flex items-center gap-4 border-b border-ring px-6 py-4">
        <h1 className="text-sm font-semibold">My Purchases</h1>
      </div>

      <main className="p-6">
        <div>
          <h1 className="text-xl font-semibold">Purchases</h1>
          <PurchaseList />
        </div>
      </main>

      <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
        <DrawerContent
          className="
            fixed top-0 right-0
            z-[9999]
            flex h-screen
            min-w-112.5
            flex-col
            overflow-hidden
            border-l border-white/10
            bg-[#1a1a1a] py-10
            pt-8
            text-white
          "
        >
          {/* Fixed header */}
          <DrawerHeader className="shrink-0 px-6 pt-6 pb-4 text-left">
            <DrawerTitle className="text-left text-2xl font-semibold text-white">Add a product</DrawerTitle>
          </DrawerHeader>

          <DrawerClose asChild>
            <button
              type="button"
              aria-label="Fermer le drawer"
              onClick={() => {
                setIsOpen(false);
              }}
              className="absolute top-4 right-4 flex size-8 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10"
            >
              <Image src="/svg/exit.svg" alt="" width={10} height={10} />
            </button>
          </DrawerClose>

          {/* Scrollable form */}
          <div className="flex-1 overflow-y-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <form className="flex flex-col gap-0">
              {/* Brand */}
              <div className="flex flex-col gap-1 py-1">
                <label htmlFor="brand" className="text-sm text-white/60">
                  Brand
                </label>
                <Select>
                  <SelectTrigger
                    id="brand"
                    className="h-10 w-full rounded-none border-0 border-b border-white/15 bg-transparent px-0 text-sm text-white focus:ring-0"
                  >
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent className="z-[99999] border-white/10 bg-[#2a2a2a] text-white">
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="samsung">Samsung</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Model */}
              <div className="flex flex-col gap-1 py-1">
                <label htmlFor="model" className="text-sm text-white/60">
                  Model
                </label>
                <Select>
                  <SelectTrigger
                    id="model"
                    className="h-10 w-full rounded-none border-0 border-b border-white/15 bg-transparent px-0 text-sm text-white focus:ring-0"
                  >
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent className="z-[99999] border-white/10 bg-[#2a2a2a] text-white">
                    <SelectItem value="airpods">AirPods Pro</SelectItem>
                    <SelectItem value="iphone">iPhone</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price */}
              <div className="flex flex-col gap-1 py-1">
                <label htmlFor="price" className="text-sm text-white/60">
                  Price
                </label>
                <Input
                  type="number"
                  id="price"
                  placeholder=""
                  className="h-10 appearance-none rounded-none border-0 border-b border-white/15 bg-transparent px-0 text-sm text-white placeholder:text-white/40
    [&::-webkit-inner-spin-button]:appearance-none
    [&::-webkit-outer-spin-button]:appearance-none
"
                  endAdornment={
                    <span className="mr-1 inline-flex items-center">
                      <Image src="/svg/price-icon.svg" alt="" width={18} height={18} />
                    </span>
                  }
                />
              </div>

              {/* Store */}
              <div className="flex flex-col gap-1 py-1">
                <label htmlFor="store" className="text-sm text-white/60">
                  Store
                </label>
                <Select>
                  <SelectTrigger
                    id="store"
                    className="h-10 w-full rounded-none border-0 border-b border-white/15 bg-transparent px-0 text-sm text-white focus:ring-0"
                  >
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent className="z-[99999] border-white/10 bg-[#2a2a2a] text-white">
                    <SelectItem value="fnac">Fnac</SelectItem>
                    <SelectItem value="amazon">Amazon</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Invoice and media */}
              <div className="mt-5">
                <p className="text-xs font-semibold tracking-widest text-white/60 uppercase">Invoice and Media</p>

                {/* Image grid — both cells same aspect-square size */}
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {/* Preview image — full square */}
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-white/5">
                    {/* eslint-disable-next-line @typescript-eslint/no-empty-function*/}

                    {/* eslint-disable-next-line @typescript-eslint/no-empty-function*/}
                    <ImageHolder imgUrl="/Thumbnails.png" handleRemoveImage={() => {}}></ImageHolder>
                  </div>

                  {/* Add file square */}
                  <label className="flex aspect-square cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10">
                    <input type="file" className="hidden" multiple />
                    <span className="text-2xl text-white/30">+</span>
                  </label>
                </div>

                {/* Add multiple photos button */}
                <Button variant={"default"} fullWidth className="mt-3">
                  <span className="text-base leading-none">+</span>
                  Add multiple photos
                </Button>

                {/* Info text */}
                <div className="mt-3 flex items-start gap-2 text-xs text-white/30">
                  <Image src="/svg/info.svg" alt="" width={13} height={13} className="mt-0.5 shrink-0" />
                  <p className="leading-relaxed">
                    Adding more high-resolution photos will help the platform stay consistent and evolve in terms of
                    products imagery.
                  </p>
                </div>
              </div>

              {/* Footer buttons */}
              <div className="mt-8 flex items-center justify-center gap-3">
                {/* Cancel — outlined */}
                <Button variant={"default"} onClick={handleDrawerClose}>
                  Cancel
                </Button>

                {/* Confirm — solid white */}
                <Button variant={"primary"} type="submit">
                  Confirm
                </Button>
              </div>
            </form>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
