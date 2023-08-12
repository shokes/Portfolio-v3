import React from 'react';
import Image from 'next/image';
import { Typography, Section, Heading, Arrow } from '@/components';
import oshoke from '../../public/images/Oshoke-Oyati.jpg';

const About = () => {
  const skills = ['JavaScript (ES6+)', 'TypeScript', 'ReactJS', 'NextJS'];

  return (
    <Section>
      <div className='flex flex-col justify-center items-center' id='about'>
        <div className='flex items-center gap-[34px] justify-center'>
          <div className='w-[576px]'>
            <Heading number='01' heading='About Me' />
            <div className='mb-3'>
              <Typography as='h5' weight='font-normal'>
                I&apos;m Oshoke Oyati, a detail-oriented Frontend Developer
                presently located in Nigeria. My fervor lies in tackling
                intricate challenges through responsive website design.
              </Typography>
            </div>
            <div className='mb-3'>
              <Typography as='h5' weight='font-normal'>
                With expertise in vanilla JavaScript, I effortlessly adapt to
                any of its frameworks, catering to the unique demands of each
                job.
              </Typography>
            </div>
            <div className='mb-3'>
              <Typography as='h5' weight='font-normal'>
                I find immense joy in unraveling logic and solving problems,
                which has become a delightful pastime for me. Beyond coding, my
                interests span across watching football games, staying
                up-to-date with the latest TV shows, enjoying music, and
                exploring the vast realms of the internet.
              </Typography>
            </div>
            <div className='mb-3'>
              <Typography as='h5' weight='font-normal'>
                Here are a few technologies I&apos;ve been working with
                recently:
              </Typography>
            </div>

            <ul className='grid grid-cols-2 gap-2'>
              {skills.map((skill) => {
                return (
                  <li key={skill} className='flex gap-2  items-center'>
                    <Arrow />
                    <Typography as='p'>{skill}</Typography>
                  </li>
                );
              })}
            </ul>
          </div>

          <Image
            src={oshoke}
            width={350}
            height={350}
            alt='oshoke'
            className='rounded-sm'
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
