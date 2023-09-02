'use client';
import React from 'react';
import {
  Typography,
  Section,
  Button,
  LaptopName,
  MobileName,
  DesktopName,
  TabletName,
} from '@/components';

const Hero = () => {
  return (
    <Section id='hero'>
      <div>
        <MobileName />
        <TabletName />
        <LaptopName />
        <DesktopName />

        <div className='mb-6 md:w-[562px] hero-text  opacity-0 3xl:w-[688px]'>
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

        <div className='hero-button opacity-0'>
          <Button link='mailto:oyatioshoke@yahoo.com'>Say Hello</Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
