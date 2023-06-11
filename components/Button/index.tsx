import React from 'react';


interface ButtonProps {
  children: React.ReactNode;
}



const Button = ({ children }: ButtonProps) => {
  return (
    <button className='border font-semibold border-black text-black px-4 py-1 rounded-sm'>
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
