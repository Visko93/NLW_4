import Head from "next/head";

import Home from "./Home";

export default function App() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#09ff5b" />
        <title>Move It!</title>
      </Head>
      <Home />
    </>
  );
}
