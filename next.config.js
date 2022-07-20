/** @type {import('next').NextConfig} */
const BUILD_ID = process.env.NEXT_PUBLIC_BUILD_ID || "";

const BUILD_DATE = process.env.NEXT_PUBLIC_BUILD_DATE || "";

const BUILD_SHA = process.env.NEXT_PUBLIC_BUILD_SHA || "";

const metaDataHeaders = [
  {
    key: "X-BUILD-ID",
    value: BUILD_ID,
  },
  {
    key: "X-BUILD-DATE",
    value: BUILD_DATE,
  },
  {
    key: "X-BUILD-SHA",
    value: BUILD_SHA,
  },
];

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: [...metaDataHeaders],
      },
    ];
  },
};
