import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  link: string;
}

const Button = ({ children, link }: ButtonProps) => {
  return (
    <button className='border text-xs 2xl:text-sm 3xl:text-base up font-semibold border-black text-black px-2 md:px-4 py-[4px] md:py-[8px] rounded-md'>
      <a href={link} target='_blank' rel='noreferrer'>
        {' '}
        {children}
      </a>
    </button>
  );
};

export default Button;
