import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Typography } from '@/components';
import logo from '../../public/images/Screenshot_2023-08-13_at_07.33.39-removebg-preview.png';

const navItems = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Work',
    href: '#work',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

const Navigation = () => {
  return (
    <nav className='flex justify-between py-7 items-center mb-[64px]'>
      <Link href='/' className='font-semibold text-logo'>
        <Image src={logo} width={48} height={48} alt='logo' priority />
      </Link>
      <div className='flex items-center gap-7'>
        <div className='flex items-center gap-7'>
          {navItems.map((nav, index) => {
            const { name, href } = nav;
            return (
              <Link
                href={href}
                key={name}
                className='flex hover-underline-animation'
                scroll={false}
              >
                <span className='mr-1  text-xs 3xl:text-sm font-semibold '>
                  0{index + 1}.
                </span>
                <Typography as='p' weight='font-semibold'>
                  {name}
                </Typography>
              </Link>
            );
          })}
        </div>

        <Button link='https://drive.google.com/file/d/1fn0-pBB_kmesRFMNGrtvbAzSVThpfmiA/view?usp=share_link'>
          Resume
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
