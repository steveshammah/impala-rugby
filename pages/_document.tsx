import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/impala-logo.png" />

          <link rel="manifest" href="site.webmanifest" />

          {/*apple icon data*/}
          <link rel="apple-touch-icon" href="/impala-log.png" />
          <link rel="icon" sizes="192x192" href="../public/impala-logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"true"}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
