// components/AnimatedImage.tsx
'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

interface AnimatedImageProps {
  name: string;
  index: number;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ name, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='relative group w-full h-auto'
    >
      <Link href={`/${index + 1}`}>
        <div className='block relative w-full h-auto'>
          <img
            src={`/cover-images/${name}`}
            alt={name}
            className='w-full h-auto transition-opacity duration-300 group-hover:opacity-60 object-cover'
          />
          <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
            <div className='absolute inset-0 bg-black opacity-80 animate-pulse'></div>
            <img
              src={`/cover-images/cover-logos/${name}`}
              alt={`Logo for ${name}`}
              className='z-10 max-w-[60%] max-h-[60%] object-contain'
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default AnimatedImage;
