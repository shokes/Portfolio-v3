import React from 'react';
import { Section, Heading, Typography, Button } from '@/components';
import easepay from '../../public/images/projects/easepayScreenshot.png';
import audiophile from '../../public/images/projects/audiophileScreenshot.png';
import cryptoblaze from '../../public/images/projects/cryptoblazeScreenshot.png';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ProjectTypes {
  id: number;
  image: StaticImageData;
  name: string;
  description: string;
  stack: string[];
  github?: string;
  live: string;
}

const projects: ProjectTypes[] = [
  {
    id: 1,
    image: easepay,
    name: 'Easepay Web',
    description:
      'Easepay leverages the Lightning Network to enable instant and low-cost transactions, allowing businesses to receive payments from anywhere in the world, faster than ever before.',
    stack: ['NextJS', 'TypeScript', 'TailwindCSS'],
    live: 'https://www.easepay.io/',
  },
  {
    id: 2,
    image: audiophile,
    name: 'Audiophile',
    description:
      'This is my  solution to the Audiophile e-commerce website challenge on Frontend Mentor, built with NextJS and TypeScript, and Storyblok as a CMS.',
    stack: ['NextJS', 'TypeScript', 'Storyblok', 'TailwindCSS'],
    github: 'https://github.com/shokes/Audiophile',
    live: 'https://audiophile-jvop.vercel.app/',
  },

  {
    id: 3,
    image: cryptoblaze,
    name: 'CryptoBlaze',
    description:
      'A web application keeping you informed about the prices of cryptocurrencies with a portfolio to track your favorite coins.',
    stack: ['NextJS', 'TypeScript', 'Storyblok', 'TailwindCSS'],
    github: 'https://github.com/shokes/CryptoBlaze',
    live: 'https://crypto-blaze-pearl.vercel.app/',
  },
];

const Work = () => {
  return (
    <Section id='work'>
      <div className='max-w-[1120px] mx-auto'>
        <div>
          <Heading number='03' heading='Selected Projects' />
        </div>

        <div>
          {projects.map((project) => {
            const { image, name, description, id, stack, github, live } =
              project;
            return (
              <div
                key={id}
                className={`flex-col flex  md:flex-row mb-[58px] md:mb-[142px]  md:gap-[42px] items-center justify-center ${
                  id % 2 === 0 && 'md:flex-row-reverse'
                }`}
              >
                <a href={live} target='_blank' rel='noopener noreferrer'>
                  <Image src={image} width={700} height={700} alt={name} />
                </a>

                <div className='md:w-[500px] mt-[32px] md:mt-0'>
                  <div className='mb-1'>
                    <Typography as='p' weight='font-semibold'>
                      Featured Project
                    </Typography>
                  </div>
                  <div className='mb-2'>
                    <Typography as='h4' weight='font-semibold'>
                      {name}
                    </Typography>
                  </div>
                  <div className='mb-2'>
                    <Typography as='h5' weight='font-normal'>
                      {description}{' '}
                    </Typography>
                  </div>
                  <div className='grid grid-cols-3 min-[350px]:flex min-[350px]:gap-2 mb-2'>
                    {stack.map((item, index) => {
                      return (
                        <div key={index}>
                          <Typography as='p'>{item}</Typography>
                        </div>
                      );
                    })}
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
