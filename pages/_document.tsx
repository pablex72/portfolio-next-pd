import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Pablo-Dev Portfolio</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
