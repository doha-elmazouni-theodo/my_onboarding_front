import * as React from "react";

import { extractCritical } from "~lib/emotion";

import type { DocumentContext, DocumentInitialProps } from "next/document";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

const BUILD_ID = process.env["NEXT_PUBLIC_BUILD_ID"] ?? "";

const BUILD_DATE = process.env["NEXT_PUBLIC_BUILD_DATE"] ?? "";

const BUILD_SHA = process.env["NEXT_PUBLIC_BUILD_SHA"] ?? "";

export default class AppDocument extends NextDocument {
  public static override async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await NextDocument.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style
          key="emotion-css"
          dangerouslySetInnerHTML={{ __html: styles.css }}
          data-emotion-css={styles.ids.join(" ")}
        />,
      ],
    };
  }

  // eslint-disable-next-line class-methods-use-this
  public override render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
          <meta property="BUILD_ID" content={BUILD_ID} />
          <meta property="BUILD_DATE" content={BUILD_DATE} />
          <meta property="BUILD_SHA" content={BUILD_SHA} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
