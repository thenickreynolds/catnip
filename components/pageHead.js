import React from "react";
import Head from "next/head";

const PageHead = () => {
  return (
    <Head>
      <title>Catnip</title>
      <meta name="description" content="Catnip for your cat (and for you)" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/paw_favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/paw_favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/paw_favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/paw_favicon/site.webmanifest" />
    </Head>
  );
};

export default PageHead;
