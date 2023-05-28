import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
}

const buttonClasses = classNames(
  'uppercase duration-300 py-[15px] px-[31px]  text-sm font-bold'
);

const Button = ({ children }: ButtonProps) => {
  return (
    <button className='border font-semibold border-black text-black px-4 py-1'>
      <a
        href='https://drive.google.com/file/d/1fn0-pBB_kmesRFMNGrtvbAzSVThpfmiA/view?usp=share_link'
        target='_blank'
        rel='noreferrer'
      >
        {' '}
        {children}
      </a>
    </button>
  );
};

export default Button;
