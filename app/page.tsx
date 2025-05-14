// app/page.tsx
'use client';

import React from 'react';
import Footer from './components/Footer';
import AnimatedImage from './components/AnimatedImagesViewer';
import { motion } from 'framer-motion';

export default function Home() {
  const imageNames = [
    'tlc.svg',
    'b-box.svg',
    'bahe.svg',
    'gerni.svg',
    'heidi.svg',
    'hnry.svg',
    'instant.svg',
    'mad-paws.svg',
    'ozio.svg',
    'pickle-bet.svg',
    'waterman.svg',
    'we-money.svg',
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className='grid grid-cols-3'
      >
        {imageNames.map((name, index) => (
          <AnimatedImage key={index} name={name} index={index} />
        ))}
      </motion.div>
      <Footer />
    </>
  );
}
