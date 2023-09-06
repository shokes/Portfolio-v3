import './globals.scss';
import { Rubik } from 'next/font/google';
import { Metadata } from 'next';
import React from 'react';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oshoke Oyati - Frontend Developer',
  description: 'Personal website of Frontend Developer, Oshoke Oyati',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
