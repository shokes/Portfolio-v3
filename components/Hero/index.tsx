import React from 'react';
import Typography from '../Typography';

const Hero = () => {
  return (
    <section className='mt-[64px]'>
      <div>
        <div className='mb-6'>
          <Typography as='h6' weight='font-semibold'>
            Hi, my name is
          </Typography>
        </div>
        <div className='mb-6'>
          <Typography as='h1' weight='font-semibold'>
            Oshoke Oyati.
          </Typography>
        </div>
        <div className='opacity-50 mb-3'>
          <Typography as='h1' weight='font-semibold'>
            I build things for the web.
          </Typography>
        </div>
        <div className='opacity-50'>
          <p className='text-lg '>
            I’m a frontend developer specializing in building exceptional <br />
            digital experiences. Currently, I’m focused on building accessible,{' '}
            <br /> human-centered products at{' '}
            <a href='' className='text-black/100 font-semibold '>
              Easepay.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
