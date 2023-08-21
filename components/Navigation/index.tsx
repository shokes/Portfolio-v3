'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Typography } from '@/components';
import logo from '../../public/images/logo.png';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';

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

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src={logo}
        width={48}
        height={48}
        alt='logo'
        priority
        className='hidden md:block'
      />
      <Image
        src={logo}
        width={38}
        height={38}
        alt='logo'
        priority
        className='md:hidden'
      />
    </Link>
  );
};

interface NavItemsProps {
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavItems = ({ setMobileMenuOpen }: NavItemsProps) => {
  return (
    <>
      {navItems.map((nav, index) => {
        const { name, href } = nav;
        return (
          <Link
            href={href}
            key={name}
            className='flex hover-underline-animation'
            scroll={false}
            onClick={() => setMobileMenuOpen(false)}
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
    </>
  );
};

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className='flex justify-between py-7 items-center sm:mb-[32px] md:mb-[64px]'>
      <Logo />
      <div className='hidden md:flex items-center gap-7'>
        <NavItems setMobileMenuOpen={setMobileMenuOpen} />
        <Button link='https://drive.google.com/file/d/1t7IF8esdoLsiK6FZ_hjSQ_C0pOPFhf5f/view?usp=sharing'>
          Resume
        </Button>
      </div>
      <div className='flex md:hidden'>
        <button
          type='button'
          className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5'
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className='sr-only'>Open main menu</span>

          <Typography as='h4' weight='font-semibold'>
            Menu
          </Typography>
        </button>
      </div>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background-100 px-[19px] py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Logo />
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <Typography as='h4' weight='font-semibold'>
                Close
              </Typography>
            </button>
          </div>
          <div className='mt-12 flow-root'>
            <div className='-my-6 '>
              <div className='space-y-7 py-6'>
                <NavItems setMobileMenuOpen={setMobileMenuOpen} />
              </div>
              <div className='flex justify-center'>
                <Button link='https://drive.google.com/file/d/1t7IF8esdoLsiK6FZ_hjSQ_C0pOPFhf5f/view?usp=sharing'>
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </nav>
  );
};

export default Navigation;
