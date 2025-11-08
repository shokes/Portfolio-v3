'use client';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import Typography from '@/components/Typography';

const LaptopName = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.laptop-bold-hero-text', {
      y: -4,
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
    <div className='hidden lg:block 3xl:hidden'>
      <div className=' h-[54.4px]  overflow-hidden  mb-4'>
        <div className='laptop-bold-hero-text translate-y-[48px]'>
          <Typography as='h1' weight='font-bold'>
            OSHOKE OYATI
          </Typography>
        </div>
      </div>

      <div className=' h-[54.4px]  overflow-hidden mb-[8px]  md:mb-[16px] '>
        <div className='laptop-bold-hero-text translate-y-[48px]'>
          <Typography as='h1' weight='font-bold'>
            FRONTEND DEVELOPER
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default LaptopName;
