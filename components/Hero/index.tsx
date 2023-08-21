import React from 'react';
import { Typography, Section, Button, Name } from '@/components';

const Hero = () => {
  return (
    <Section id='hero'>
      <div>
        <Name />

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

        <Button link='mailto:oyatioshoke@yahoo.com'>Say Hello</Button>
      </div>
    </Section>
  );
};

export default Hero;
