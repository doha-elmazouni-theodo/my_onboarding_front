import React from "react";

import Head from "next/head";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>

      {children}
    </>
  );
};

export default DefaultLayout;
