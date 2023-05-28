import React from 'react';
import Typography from '../Typography';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const size = 40;

const socials = [
  { name: 'twitter', icon: <FaTwitter size={size} /> },
  { name: 'linkedin', icon: <FaLinkedinIn size={size} /> },
  { name: 'github', icon: <FaGithub size={size} /> },
  { name: 'mail', icon: <FiMail size={size} /> },
];

const Hero = () => {
  return (
    <section className='mt-[64px] mb-[140px]'>
      <div>
        <div className='mb-6'>
          <Typography as='h6' weight='font-semibold'>
            Hi, my name is
          </Typography>
        </div>
        <div className='mb-6'>
          <Typography as='h1' weight='font-semibold'>
            Oshoke Oyati.
          </Typography>
        </div>
        <div className=' mb-3'>
          <Typography as='h1' weight='font-semibold'>
            I develop things for the web.
          </Typography>
        </div>

        <p className='text-lg mb-6'>
          I specialize in creating outstanding digital experiences as <br /> a
          <span className='font-semibold'> frontend developer. </span>
          My current focus revolves around <br /> crafting accessible and
          user-centric products at{' '}
          <a href='' className='text-black font-semibold '>
            Easepay.
          </a>
        </p>
        <div className='flex items-center gap-9'>
          {socials.map((social) => {
            const { icon, name } = social;
            return (
              <div key={name} className=''>
                {icon}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
