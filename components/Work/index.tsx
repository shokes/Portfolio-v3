'use client';
import React from 'react';
import { Section, Heading, Typography, Button } from '@/components';
import easepay from '../../public/images/projects/easepayScreenshot.png';
import audiophile from '../../public/images/projects/audiophileScreenshot.png';
import cryptoblaze from '../../public/images/projects/cryptoblazeScreenshot.png';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

interface ProjectTypes {
  id: number;
  image: StaticImageData;
  name: string;
  description: string;

  github?: string;
  live: string;
}

const projects: ProjectTypes[] = [
  {
    id: 1,
    image: easepay,
    name: 'Easepay',
    description:
      'Easepay leverages the Lightning Network to enable instant and low-cost transactions.',

    live: 'https://www.easepay.io/',
  },
  {
    id: 2,
    image: audiophile,
    name: 'Audiophile',
    description:
      'This is my  solution to the Audiophile e-commerce website challenge on Frontend Mentor.',

    github: 'https://github.com/shokes/Audiophile',
    live: 'https://audiophile-jvop.vercel.app/',
  },

  {
    id: 3,
    image: cryptoblaze,
    name: 'CryptoBlaze',
    description:
      'A web application keeping you informed about the prices of cryptocurrencies with a portfolio to track your favorite coins.',

    github: 'https://github.com/shokes/CryptoBlaze',
    live: 'https://crypto-blaze-pearl.vercel.app/',
  },
];

const Work = () => {
  useEffect(() => {
    gsap.to('.project', {
      scrollTrigger: {
        trigger: '.project',
        start: '40% bottom',
      },
      ease: 'power4.out',
      duration: 4,
      opacity: 1,
      stagger: 1,
    });
  }, []);

  return (
    <Section id='work'>
      <div className='max-w-[1120px] 3xl:max-w-[1500px]  mx-auto'>
        <div>
          <Heading number='03' heading='Selected Projects' />
        </div>

        <div>
          {projects.map((project) => {
            const { image, name, description, id, github, live } = project;
            return (
              <div
                key={id}
                className='flex-col flex  opacity-0 mb-[42px] lg:mb-[72px] project'
              >
                <a
                  href={live}
                  target='_blank'
                  rel='noopener noreferrer '
                  className='mb-[32px] relative project-image-container'
                >
                  <Image
                    src={image}
                    width={1120}
                    height={700}
                    alt={name}
                    className='rounded-xl w-full hover:opacity-90 duration-700 ease-in-out '
                  />
                  <a
                    href={live}
                    target='_blank'
                    rel='noopener noreferrer '
                    className='absolute duration-300 ease-in-out hidden lg:flex top-1/3 opacity-0  right-1/2 bg-white translate-y-[1.5rem] translate-x-1/2  see-more  p-14 w-5 h-5  items-center text-center justify-center rounded-full '
                  >
                    <Typography as='h6' weight='font-semibold'>
                      See project
                    </Typography>
                  </a>
                </a>

                <div className=' flex justify-between items-baseline'>
                  <div className='mb-2'>
                    <Typography as='h4' weight='font-semibold'>
                      {name}
                    </Typography>
                  </div>
                  <div className='hidden md:block w-[400px]'>
                    <Typography as='h5' weight='font-normal'>
                      {description}{' '}
                    </Typography>
                  </div>

                  <div className='flex gap-4 items-center'>
                    {github && (
                      <a
                        className='hover-underline-animation'
                        href={github}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <Typography as='p' weight='font-semibold'>
                          {' '}
                          GitHub
                        </Typography>
                      </a>
                    )}
                    <a
                      className='hover-underline-animation'
                      href={live}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Typography as='p' weight='font-semibold'>
                        {' '}
                        Live
                      </Typography>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='flex justify-center mt-[-32px] md:mt-0'>
          {' '}
          <Button link='https://github.com/shokes'>View more on GitHub</Button>
        </div>
      </div>
    </Section>
  );
};

export default Work;
