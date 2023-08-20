import React from 'react';
import { Typography } from '@/components';

interface HeadingProps {
  number: '01' | '02' | '03' | '04' | '05';
  heading: string;
}

const Heading = ({ number, heading }: HeadingProps) => {
  return (
    <div className='flex items-center gap-3 mb-[21px] md:mb-[42px]'>
      <Typography as='h4' weight='font-semibold'>
        {number}.
      </Typography>
      <Typography as='h3' weight='font-semibold'>
        {heading}
      </Typography>
      <div>
        <div className='border border-black/50 md:w-[205px]'></div>
      </div>
    </div>
  );
};

export default Heading;
