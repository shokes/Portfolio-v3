import React from 'react';
import { Typography, Socials, WAT } from '@/components';
import Name from '../Common/Name/name';
import { BiUpArrowAlt } from 'react-icons/bi';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='pb-14'>
      <div className='mb-7'>
        <Name />
      </div>
      <div className='flex flex-col md:flex-row gap-[10px] md:gap-[20px] md:justify-between'>
        <div>
          <Typography as='h6'>
            Lagos, NG <WAT />{' '}
          </Typography>
        </div>
        <Socials />

        <Link href='#' scroll={false} className='flex  gap-2'>
          <Typography as='h6' weight='font-semibold'>
            {' '}
            Back to top
          </Typography>{' '}
          <BiUpArrowAlt className='w-5 h-5 text-black' />{' '}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
