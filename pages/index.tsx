import React from "react";

import Banner3S from "~components/landing/banner3s";
import { SITE_CONFIG } from "~config/site";
import type { NextPage } from "~types/next";

import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <div>
      <NextSeo title="Home" />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-20 text-center">
            <h2 className="mb-1 text-xs font-medium tracking-widest text-red-500 title-font">
              {SITE_CONFIG.title.toUpperCase()}
            </h2>
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
              {SITE_CONFIG.description}
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
            <Banner3S
              title="Stability"
              doc={
                "https://www.notion.so/m33/Framework-Qualit-3S-3bff76b2f374475298ef909341696281#77f96802a1954504a71ca6480f609c50"
              }
            >
              Le produit ne doit pas présenter de bugs impactant l&apos;expérience utilisateur.
            </Banner3S>
            <Banner3S
              title="Security"
              doc={
                "https://www.notion.so/m33/Framework-Qualit-3S-3bff76b2f374475298ef909341696281#becfbc6cab35431fbef11110c9b34546"
              }
            >
              Le produit doit être prémunis contre les vulnérabilités les plus communes.
            </Banner3S>
            <Banner3S
              title="Speed"
              doc={
                "https://www.notion.so/m33/Framework-Qualit-3S-3bff76b2f374475298ef909341696281#b9184c326e2c48d6a696ecd59f64328f"
              }
            >
              Le produit doit être au standard sur la performance. Ca inclut la vitesse de chargement et la scalabilité.
            </Banner3S>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
