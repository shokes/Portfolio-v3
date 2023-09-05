import './globals.scss';
import { Rubik } from 'next/font/google';
import React from 'react';
import Head from 'next/head';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <title>Oshoke Oyati - Frontend Developer</title>
        <meta
          name='description'
          content='Personal website for frontend develeper, Oshoke Oyati.'
        />
        <meta property='og:title' content='Oshoke Oyati - Frontend Developer' />
        <meta
          property='og:description'
          content='Personal website for frontend develeper, Oshoke Oyati.'
        />
        <meta
          property='og:url'
          content='https://portfolio-v3-xrq7.vercel.app/'
        />
        <meta property='og:type' content='website' />
      </Head>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
