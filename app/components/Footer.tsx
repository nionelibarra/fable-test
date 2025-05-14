import React from 'react';

const Footer = () => {
  return (
    <div className='w-auto h-auto bg-[#FF5959] flex flex-row justify-between px-13 py-15'>
      <div>
        <img src='/fable-logo-footer.svg' alt='logo' />
      </div>
      <div>
        <p>Ash Govind</p>
        <p>ash@thefable.tv</p>
        <p>0424 545 146</p>
      </div>
      <div>
        <p>Instagram</p>
        <p>LinkedIn</p>
        <p>Vimeo</p>
      </div>
      <div className='flex flex-col space-y-7'>
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
  );
};

export default Footer;
