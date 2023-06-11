import React from 'react';
import Image from 'next/image';
import { Typography, Section, Heading } from '@/components';
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
              <Typography as='h6'>
                Hi, I'm Oshoke Oyati, a meticulous Frontend Developer currently
                based in Nigeria. I am passionate about solving complex problems
                with responsive website design.
              </Typography>
            </div>
            <div className='mb-3'>
              <Typography as='h6'>
                Proficient in vanilla JavaScript, hence can easily adapt to any
                of its frameworks depending on the requirements of the job.
              </Typography>
            </div>
            <div className='mb-3'>
              <Typography as='h6'>
                I'm thrilled by logic and I solve problems for fun. When I'm not
                writing code, I'm either watching football games, catching up on
                the latest TV shows, listening to music or surfing the internet.
              </Typography>
            </div>
            <div className='mb-3'>
              <Typography as='h6'>
                Here are a few technologies I’ve been working with recently:
              </Typography>
            </div>

            <ul className='grid grid-cols-2 gap-2'>
              {skills.map((skill) => {
                return (
                  <li key={skill}>
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
