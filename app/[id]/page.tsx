'use client';

import React from 'react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { MoveLeft, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Image */}
      <Image
        src='/tlc-images/hero-image.svg'
        alt='hero image'
        className='h-full w-full object-contain'
        width={700}
        height={700}
      />

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='flex flex-row justify-between px-[50px] py-[38px]'
      >
        <div>
          <p className='text-[#003366] font-serif text-[60px] leading-[1.27] tracking-[0.04em]'>
            The Lad Collective <br /> — We Make The Bed Easy
          </p>

          <div className='ml-[348px]'>
            <p className='text-[#003366] mt-[113px] text-[23px]'>
              &quot;Come Fourth… To the Place That Pays Up to 4th Place&quot;
            </p>
            <p className='text-[#003366] text-[23px] break-words w-[544px] mt-4 '>
              The campaign brief included the development of TV assets that were
              distributed through Kayo, Foxtel, and YouTube, as well as
              out-of-home (OOH) assets displayed throughout Melbourne, Sydney,
              and Brisbane.
            </p>
          </div>
        </div>

        <div className='flex flex-col mt-auto gap-12'>
          <div className='mr-[200px]'>
            <p className='text-[#003366] font-bold text-[23px]'>Year</p>
            <p className='text-[#003366] text-[23px]'>2025</p>
          </div>
          <div className=''>
            <p className='text-[#003366] font-bold text-[23px]'>Scope</p>
            <p className='text-[#003366] text-[23px]'>Scope Online, Social</p>
          </div>
        </div>
      </motion.div>

      {/* Separator */}
      <div className='px-[50px]'>
        {' '}
        <Separator className='my-[114px] bg-[#003366]' />
      </div>

      {/* Video Player */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='flex flex-col items-center justify-center px-13'
      >
        <video className='w-full h-[754px] object-cover' controls autoPlay>
          <source src='/case-study-video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Second Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='mt-[150px]'
      >
        <Image
          src='/tlc-images/secondary-image.svg'
          alt='image'
          className='h-full w-full object-contain'
          width={700}
          height={700}
        />
      </motion.div>

      {/*Carousel*/}
      <motion.div className='flex flex-row w-full items-center justify-center gap-[50px] mt-[150px] px-13'>
        {[{ src: '/tlc-images/3A.svg' }, { src: '/tlc-images/3C.svg' }].map(
          (img, i) => (
            <motion.div
              key={i}
              initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className='flex justify-center w-full'
            >
              <Image
                src={img.src}
                alt='image'
                className='h-full w-full object-contain'
                width={700}
                height={700}
              />
            </motion.div>
          )
        )}
      </motion.div>

      {/* Third Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='mt-[150px]'
      >
        <Image
          src='/tlc-images/2B.svg'
          alt='image'
          className='h-full w-full object-contain'
          width={700}
          height={700}
        />
      </motion.div>

      {/* Buttons Container */}
      <div className='w-full flex flex-row justify-between px-13 mt-8'>
        {/* Previous Button */}
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: '0 0 15px rgba(0, 51, 102, 0.7) rounded-3xl',
            transition: { duration: 0.3 },
          }}
        >
          <Button
            variant='outline'
            className='bg-transparent hover:none p-[25px] rounded-3xl border-[#003366]'
          >
            <MoveLeft color='#003366' />
            <p className='font-serif text-[23px] text-[#003366]'>Previous</p>
          </Button>
        </motion.div>

        {/* Next Button */}
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: '0 0 15px rgba(0, 51, 102, 0.7) rounded-3xl',
            transition: { duration: 0.3 },
          }}
        >
          <Button
            variant='outline'
            className='bg-transparent hover:none p-[25px] rounded-3xl border-[#003366]'
          >
            <p className='font-serif text-[23px] text-[#003366]'>Next</p>
            <MoveRight color='#003366' />
          </Button>
        </motion.div>
      </div>

      {/* Footer */}
      <Separator className='my-[50px] bg-[#003366]' />
      <div className='w-auto h-auto flex flex-row justify-between px-13 pb-10'>
        <div>
          <Link href='/'>
            <Image
              src='/fable-logo-footer-blue.svg'
              alt='image'
              className='h-full w-full object-contain'
              width={700}
              height={700}
            />
          </Link>
        </div>
        <div className='text-[#003366]'>
          <p>Ash Govind</p>
          <p>ash@thefable.tv</p>
          <p>0424 545 146</p>
        </div>
        <div className='text-[#003366]'>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>Vimeo</p>
        </div>
        <div className='flex flex-col space-y-7 text-[#003366]'>
          <div className='w-[455px] h-auto'>
            <p>
              We acknowledge the Wurundjeri people of the Kulin nation as the
              traditional custodians of this land. We pay our respect to their
              Elders, past and present.
            </p>
          </div>

          <div className='flex flex-col'>
            <p>Fable. Pty Ltd</p>
            <p>© 2025 Fable. All rights reserved.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
