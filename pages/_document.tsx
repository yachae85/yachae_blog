import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class CustomDocument extends Document{
  render() {
    return (
      <Html lang="ko">
        <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}