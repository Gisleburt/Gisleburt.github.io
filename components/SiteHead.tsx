import React from 'react';
import Head from 'next/head';

interface SiteHeadProps {
    title: string;
}

const SiteHead = ({ title }: SiteHeadProps): JSX.Element => (
  <Head>
    <title>{title}</title>
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#2b2b2b" />
    <meta name="theme-color" content="#ffffff" />
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
  </Head>
);

export default SiteHead;
