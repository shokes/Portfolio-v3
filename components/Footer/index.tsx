import React from 'react';
import { Typography, Socials, WAT } from '@/components';

const Footer = () => {
  return (
    <div className='pb-14'>
      <div className='flex justify-between'>
        <div>
          <Typography as='h6'>
            Lagos, NG <WAT />{' '}
          </Typography>
        </div>
        <Socials />
        <div>
          <Typography as='h6' weight='font-normal'>
            {' '}
            Developed by <span className='font-semibold'> Oshoke Oyati</span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
