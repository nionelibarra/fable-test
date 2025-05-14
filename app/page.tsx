'use client';

import Link from 'next/link';

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
    <div className=''>
      <div className='grid grid-cols-3'>
        {imageNames.map((name, index) => (
          <div key={index} className='relative group w-full h-auto'>
            <Link href={`/${index + 1}`}>
              {/* Make entire area clickable */}
              <div className='block relative w-full h-auto'>
                {/* Main image */}
                <img
                  src={`/cover-images/${name}`}
                  alt={name}
                  className='w-full h-auto transition-opacity duration-300 group-hover:opacity-60 object-cover'
                />

                {/* Hover overlay */}
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  {/* Semi-transparent black overlay */}
                  <div className='absolute inset-0 bg-black opacity-50'></div>

                  {/* Fully visible logo */}
                  <img
                    src={`/cover-images/cover-logos/${name}`}
                    alt={`Logo for ${name}`}
                    className='z-10 max-w-[60%] max-h-[60%] object-contain'
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
