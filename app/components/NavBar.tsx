import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full h-30 bg-[#FF5959] justify-between flex py-10 px-13'>
      {/* Logo */}
      <div>
        <Link href='/'>
          <img src='/fable-logo.svg' alt='logo' />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div>
        <img src='/hamburger-icon.svg' alt='logo' />
      </div>
    </div>
  );
};

export default Navbar;
