import React from 'react';
import Link from 'next/link';
import Button from '../Button';

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
    <nav className='flex justify-between py-7 items-center'>
      <Link href='/' className='font-semibold text-logo'>
        O
      </Link>
      <div className='flex items-center gap-7'>
        <div className='flex items-center gap-7'>
          {navItems.map((nav, index) => {
            const { name, href } = nav;
            return (
              <div key={name}>
                <span className='mr-1 text-sm font-semibold '>
                  0{index + 1}.
                </span>
                <a href='' className='font-semibold'>
                  {name}
                </a>
              </div>
            );
          })}
        </div>

        <Button>Resume</Button>
      </div>
    </nav>
  );
};

export default Navigation;
