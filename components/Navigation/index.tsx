import React from 'react';
import Link from 'next/link';
import { Button } from '@/components';

const navItems = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Experience',
    href: '/experience',
  },
  {
    name: 'Work',
    href: '/work',
  },
  {
    name: 'Articles',
    href: '/articles',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const Navigation = () => {
  return (
    <nav className='flex justify-between py-7 items-center mb-[64px]'>
      <Link href='/' className='font-semibold text-logo'>
        Oshoke Oyati
      </Link>
      <div className='flex items-center gap-7'>
        <div className='flex items-center gap-7'>
          {navItems.map((nav, index) => {
            const { name } = nav;
            return (
              <Link
                href='#about'
                key={name}
                className='flex hover-underline-animation'
                scroll={false}
              >
                <span className='mr-1  text-sm font-semibold '>
                  0{index + 1}.
                </span>
                <div className='font-semibold'>{name}</div>
              </Link>
            );
          })}
        </div>

        <Button>Resume</Button>
      </div>
    </nav>
  );
};

export default Navigation;
