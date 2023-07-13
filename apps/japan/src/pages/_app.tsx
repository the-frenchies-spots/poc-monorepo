import React from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const ComponentT: any = Component;
  return <ComponentT {...pageProps} />;
}
