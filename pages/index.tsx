import React from "react";

import { SITE_CONFIG } from "~config/site";
import type { NextPage } from "~types/next";

import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <div>
      <NextSeo title="Home" />

      <h1>{SITE_CONFIG.title}</h1>
      <h2>{SITE_CONFIG.description}</h2>
    </div>
  );
};

export default Home;
