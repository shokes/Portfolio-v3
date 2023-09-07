'use client';
import React from 'react';
import Typography from '@/components/Typography';
import { gsap } from 'gsap';
import { useEffect } from 'react';

const DesktopName = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.tablet-bold-hero-text', {
      y: -2,
      ease: 'power4.out',
      stagger: 0.15,
      duration: 1,
      delay: 0.5,
    });
    tl.to('.hero-text', {
      ease: 'power4.out',
      duration: 4,
      opacity: 1,
      delay: -0.6,
    });
    tl.to('.hero-button', {
      ease: 'power4.out',
      duration: 3,
      opacity: 1,
      delay: -3.9,
    });
  }, []);

  return (
    <div className='hidden md:block lg:hidden'>
      <div className=' h-[51.4px]    overflow-hidden  mb-2'>
        <div className='tablet-bold-hero-text translate-y-[68px]'>
          <Typography as='h1' weight='font-bold'>
            OSHOKE OYATI
          </Typography>
        </div>
      </div>

      <div className=' h-[51.4px] overflow-hidden mb-[8px]  md:mb-[16px] '>
        <div className='tablet-bold-hero-text translate-y-[68px]'>
          <Typography as='h1' weight='font-bold'>
            FRONTEND DEVELOPER
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default DesktopName;
