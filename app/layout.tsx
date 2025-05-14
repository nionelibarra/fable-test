'use client';

import './globals.css';
import Navbar from './components/NavBar';
import { geistMono, geistSans, playfair } from '@/utils/fonts';
import SmoothScroll from './components/SmoothSroller';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-[#F9F5ED] mx-auto overflow-x-hidden`}
      >
        <Navbar />
        <div className='flex flex-col'>
          <SmoothScroll> {children}</SmoothScroll>
        </div>
      </body>
    </html>
  );
}
