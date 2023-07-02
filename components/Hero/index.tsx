import React from 'react';
import { Typography, Section } from '@/components';

const socials = [
  { id: 1, name: 'Twitter', href: 'https://twitter.com/Airshokes' },
  {
    id: 2,
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/oshoke-oyatilipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7bIwlnH1TeKUJ6r3jWAS6g%3D%3D',
  },
  { id: 3, name: 'Github', href: 'https://github.com/shokes' },
  { id: 4, name: 'Mail', href: 'mailto:oyatioshoke@yahoo.com' },
];

const Hero = () => {
  return (
    <Section>
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
        <div className='mb-[16px]'>
          <Typography as='h1' weight='font-semibold'>
            I develop things for the web.
          </Typography>
        </div>

        <div className='mb-6 w-[32px]'>
          <Typography as='h6'>
            I specialize in creating outstanding digital experiences as a
            <span className='font-semibold'> frontend developer. </span>
            My current focus revolves around crafting accessible and
            user-centric products at{' '}
            <a href='' className='font-semibold '>
              Easepay.
            </a>
          </Typography>
        </div>
        <div className='flex items-center gap-5'>
          {socials.map((social) => {
            const { name, href } = social;
            return (
              <a
                className='font-semibold hover-underline-animation'
                href={href}
                target='_blank'
                rel='noreferrer'
                key={name}
              >
                {name}
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Hero;
