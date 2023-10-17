import React from "react";

import Head from "next/head";
import type { AppProps } from "next/app";
import type { Page } from "../types/page";

type Props = AppProps & {
  Component: any;
};

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component?.getLayout || ((page: any) => page);
  const Layout = getLayout((<Component {...pageProps} />) as any);
  const layout = React.isValidElement(Layout) ? Layout : <>{Layout}</>;

  return (
    <>
      <Head>
        <title>Jean-François Picherit-Steinbrucker</title>
        <meta name="description" content="Making with love" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
      </Head>
      <main style={{ height: "100vh", margin: 0, padding: 0 }}>{layout}</main>
    </>
  );
}
