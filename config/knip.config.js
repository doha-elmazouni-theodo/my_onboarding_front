/** @type {import('knip').KnipConfig} */
module.exports = {
  // https://knip.dev/reference/plugins/next#default-configuration
  entry: [
    "next.config.{js,ts,cjs,mjs}",
    "{instrumentation,middleware}.{js,ts}",
    "app/global-error.{js,jsx,ts,tsx}",
    "app/**/{error,layout,loading,not-found,page,template,default}.{js,jsx,ts,tsx}",
    "app/**/route.{js,jsx,ts,tsx}",
    "app/{manifest,sitemap,robots}.{js,ts}",
    "app/**/{icon,apple-icon}.{js,jsx,ts,tsx}",
    "app/**/{opengraph,twitter}-image.{js,jsx,ts,tsx}",
    "pages/**/*.{js,jsx,ts,tsx}",
    "src/{instrumentation,middleware}.{js,ts}",
    "src/app/global-error.{js,jsx,ts,tsx}",
    "src/app/**/{error,layout,loading,not-found,page,template,default}.{js,jsx,ts,tsx}",
    "src/app/**/route.{js,jsx,ts,tsx}",
    "src/app/{manifest,sitemap,robots}.{js,ts}",
    "src/app/**/{icon,apple-icon}.{js,jsx,ts,tsx}",
    "src/app/**/{opengraph,twitter}-image.{js,jsx,ts,tsx}",
    "src/pages/**/*.{js,jsx,ts,tsx}",
    "config/**/*.{js,ts}",
  ],
  project: ["src/**/*.{js,ts,jsx,tsx}"],
  ignoreDependencies: [
    "sharp",
    "@release-it/conventional-changelog",
    "@types/react-redux",

    "tw-animate-css",

    "autoprefixer",
    "postcss",
  ],
  ignore: [
    "src/components/home/Home.style.ts",
    "src/components/home/index.ts",
    "src/components/icons/arrow/index.tsx",
    "src/components/landing/banner3s.tsx",
    "src/components/landing/LandingButton.tsx",
    "src/__test__/Renderer.tsx",
    "src/i18n/useTranslation.ts",
    "src/components/elements/input.tsx",
    "src/utils/axiosApiClient.ts",
  ],
  ignoreExports: ["InputProps"],
};

// More documentation on configuration: https://knip.dev/reference/configuration
