import React from 'react';
import { Typography, Section, Socials } from '@/components';

const Hero = () => {
  return (
    <Section id='hero'>
      <div>
        <div className='mb-3 md:mb-6'>
          <Typography as='h6' weight='font-semibold'>
            Hi, my name is
          </Typography>
        </div>
        <div className='mb-1 md:mb-6'>
          <Typography as='h1' weight='font-semibold'>
            Oshoke Oyati.
          </Typography>
        </div>
        <div className='mb-[8px] md:mb-[16px]'>
          <Typography as='h1' weight='font-semibold'>
            I develop things for the web.
          </Typography>
        </div>

        <div className='mb-6 md:w-[562px]'>
          <Typography as='h5' weight='font-normal'>
            I specialize in creating outstanding digital experiences as a
            <span className='font-semibold'> frontend developer. </span>
            My current focus revolves around crafting accessible and
            user-centric products at{' '}
            <a
              href='https://arvist.ai/'
              className='font-semibold hover-underline-animation'
            >
              Arvist.
            </a>
          </Typography>
        </div>
        <Socials />
      </div>
    </Section>
  );
};

export default Hero;
