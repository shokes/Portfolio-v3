'use client';
import React from 'react';
import { Section, Heading, Typography } from '@/components';
import circle from '../../public/images/circle.png';
import Image from 'next/image';
import { useState } from 'react';

const experiences = [
  {
    id: 1,
    name: 'Arvist',
    website: 'https://arvist.ai/',
    job: 'Frontend Developer',
    date: 'April 2023 - Present',
    duties: [
      'Design and develop intuitive user interfaces that seamlessly integrate AI-driven features, enabling users to interact with complex algorithms and data effortlessly.',
      'Implement real-time data updates and notifications in frontend interfaces, allowing users to stay informed about AI model performance changes and outcomes as they occur.',
      'Collaborate closely with AI engineers and data scientists to translate their models and algorithms into user-friendly frontend components, fostering seamless integration between the backend AI logic and frontend presentation.',
    ],
  },

  {
    id: 2,
    name: 'Easepay',
    website: 'https://www.easepay.io/',
    job: 'Frontend Engineer',
    date: 'May 2023 - AUG 2023',
    duties: [
      'Developed and maintained user-facing features using React, styled-components, TailwindCSS, and other front end technologies.',
      'Collaborated with the design and product teams to translate designs into high quality code and user interface.',
      'Wrote clean, efficient, and maintenance code while adhering to best practices and standards.',
      'Optimized applications for maximum speed and scalability.',
      'Troubleshot and debugged issues as they arose and implemented effective solutions.',
      'Worked with the backend team to integrate frontend features with backend systems.',
    ],
  },

  {
    id: 3,
    name: '2B Creative',
    website: 'https://2b.co.uk/',
    job: 'Frontend Developer',
    date: 'December 2022 - February 2023',
    duties: [
      'Collaborated in the development and maintenance of a range of NextJS websites.',
      'Integrated websites with headless CMS like Storyblok and Contentful to facilitate non-technical creating and editing of content.',
      'Mentored by and rapidly took feedback from the team lead.',
    ],
  },
];

const Experience = () => {
  const [displayExperience, setDisplayExperience] = useState(1);

  return (
    <Section id='experience'>
      <div className='lg:w-[800px] mx-auto'>
        <div>
          <Heading number='02' heading='Professional Experience' />
        </div>
        <div className='flex flex-col md:flex-row gap-[12px] md:gap-[48px] '>
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
                              <div
                                key={index}
                                className='flex relative items-cente gap-3'
                              >
                                <Image
                                  src={circle}
                                  width={10}
                                  height={10}
                                  alt='icon'
                                  className='absolute top-[7px] left-[-1rem]'
                                />

                                <div className='lg:w-[40rem]'>
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
