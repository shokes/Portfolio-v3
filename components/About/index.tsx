'use client';
import Image from 'next/image';
import { Typography, Section, Heading } from '@/components';
import oshoke from '../../public/images/oshoke.jpg';
import circle from '../../public/images/circle.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const skills = ['JavaScript', 'TypeScript', 'ReactJS', 'NextJS'];

  useEffect(() => {
    const h = window.innerHeight > 700 ? '40%' : '20%';
    gsap.to('.about', {
      scrollTrigger: {
        trigger: '.about',
        start: `${h} bottom`,
      },
      ease: 'power4.out',
      duration: 6,
      opacity: 1,
    });
  }, []);

  return (
    <Section id='about'>
      <div className='max-w-[917px] 3xl:max-w-[1040px] mx-auto opacity-0 about'>
        <Heading number='01' heading='About Me' />
        <div className='flex flex-col justify-center items-center'>
          <div className='flex gap-[34px] flex-col md:flex-row items-center md:items-start justify-center'>
            <div className='md:w-[576px] 3xl:w-full'>
              <div className='mb-3'>
                <Typography as='h5' weight='font-normal'>
                  I&apos;m Oshoke, a detail-oriented Frontend Developer
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
                  which has become a delightful pastime for me. Beyond coding,
                  my interests span across watching football games, staying
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
                    <li key={skill} className='flex gap-2 nowrap items-center'>
                      <Image src={circle} width={10} height={10} alt='icon' />
                      <Typography as='p'>{skill}</Typography>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Image
              src={oshoke}
              width={320}
              height={200}
              alt='oshoke'
              priority
              className='rounded-xl shadow-sm'
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
