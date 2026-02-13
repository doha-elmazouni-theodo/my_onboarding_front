import "../styles/globals.css";

import { SITE_CONFIG } from "~config/site";

import { Providers } from "./providers";

import type { Metadata } from "next";
import Head from "next/head";

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

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <div className="min-h-screen">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
