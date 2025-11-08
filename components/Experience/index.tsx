'use client';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { experiences } from '@/app/constants';
import circle from '../../public/images/circle.png';
import { Section, Heading, Typography } from '@/components';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [displayExperience, setDisplayExperience] = useState(1);

  useEffect(() => {
    gsap.to('.experience', {
      scrollTrigger: {
        trigger: '.experience',
        start: '40% bottom',
      },
      ease: 'power4.out',
      duration: 6,
      opacity: 1,
    });
  }, []);

  return (
    <Section id='experience'>
      <div className='lg:w-[800px] 3xl:max-w-[65rem] mx-auto opacity-0 experience'>
        <div>
          <Heading number='02' heading='Professional Experience' />
        </div>
        <div className='flex flex-col md:flex-row gap-[12px] md:gap-[48px] 3xl:gap-[92px] '>
          <div className='flex md:flex-col gap-2 md:gap-4'>
            {experiences.map((experience) => {
              const { id, name } = experience;
              return (
                <div
                  key={id}
                  onClick={() => setDisplayExperience(id)}
                  className={` cursor-pointer  w-[80px] nowrap ${
                    id === displayExperience && 'font-semibold'
                  }`}
                >
                  <Typography as='h6'> {name}</Typography>
                </div>
              );
            })}
          </div>

          <div>
            {experiences.map((experience) => {
              const { id, duties, job, date, name, website } = experience;
              return (
                <div key={id} className='flex'>
                  <div>
                    {' '}
                    {displayExperience === id && (
                      <div>
                        <div className='mb-[18px]'>
                          <div className='mb-[4px]'>
                            <Typography as='h6' weight='font-normal'>
                              {job}{' '}
                              <a
                                href={website}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='font-semibold hover-underline-animation'
                              >
                                @ {name}
                              </a>{' '}
                            </Typography>
                          </div>
                          <div>
                            <Typography as='p'> {date}</Typography>
                          </div>
                        </div>
                        <div className='flex  pl-[13px] md:pl-0 flex-col gap-[12px] md:gap-[24px]'>
                          {duties.map((item, index) => {
                            return (
                              <div key={index} className='flex relative gap-3'>
                                <Image
                                  src={circle}
                                  width={10}
                                  height={10}
                                  alt='icon'
                                  className='absolute top-[7px] left-[-1rem]'
                                />

                                <div className='lg:w-[40rem] 3xl:w-full'>
                                  <Typography as='h5' weight='font-normal'>
                                    {item}
                                  </Typography>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
