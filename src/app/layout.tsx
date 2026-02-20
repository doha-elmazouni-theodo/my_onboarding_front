import "../styles/globals.css";

import { SITE_CONFIG } from "~config/site";

import { Providers } from "./providers";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const BUILD_ID = process.env["NEXT_PUBLIC_BUILD_ID"] ?? "";
const BUILD_DATE = process.env["NEXT_PUBLIC_BUILD_DATE"] ?? "";
const BUILD_SHA = process.env["NEXT_PUBLIC_BUILD_SHA"] ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: SITE_CONFIG.title,
    template: `%s ${SITE_CONFIG.titleSeparator} ${SITE_CONFIG.title}`,
  },
  description: SITE_CONFIG.description,
  alternates: {
    // auto populates according to current path (https://github.com/vercel/next.js/issues/49743)
    canonical: "./",
  },
  other: {
    BUILD_ID,
    BUILD_DATE,
    BUILD_SHA,
  },
};
/* eslint-disable-next-line new-cap */
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="min-h-screen">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
