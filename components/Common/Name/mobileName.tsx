'use client';
import React from 'react';
import Typography from '@/components/Typography';
import { gsap } from 'gsap';
import { useEffect } from 'react';

const MobileName = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.bold-hero-text', {
      y: -1,
      ease: 'power4.out',
      stagger: 0.15,
      duration: 1,
    });
    tl.to('.hero-text', {
      ease: 'power4.out',
      duration: 4,
      opacity: 1,
      delay: -1,
    });
    tl.to('.hero-button', {
      ease: 'power4.out',
      duration: 3,
      opacity: 1,
      delay: -3.9,
    });
  }, []);

  return (
    <div className='md:hidden'>
      <div className=' h-[25.4px] overflow-hidden'>
        <div className='bold-hero-text translate-y-[48px]'>
          <Typography as='h1' weight='font-bold'>
            OSHOKE OYATI
          </Typography>
        </div>
      </div>

      <div className=' h-[25.4px]  overflow-hidden mb-[8px]  md:mb-[16px] '>
        <div className='bold-hero-text translate-y-[48px]'>
          <Typography as='h1' weight='font-bold'>
            FRONTEND DEVELOPER
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default MobileName;
