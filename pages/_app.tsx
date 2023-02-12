import React from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Hello yachae blog!</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;