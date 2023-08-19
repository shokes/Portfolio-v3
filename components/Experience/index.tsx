'use client';
import React from 'react';
import { Section, Heading, Typography, Arrow } from '@/components';
import { useState } from 'react';

const experiences = [
  {
    id: 1,
    name: 'Arvist',
    website: 'https://arvist.ai/',
    job: 'Frontend Developer',
    date: 'April 2023 - Present',
    duties: [
      'Develop and maintain user-facing features using React, styled-components, TailwindCSS, and other front end technologies.',
      'Collaborate with the design and product teams to translate designs into high quality code and user interface.',
      'Write clean, efficient, and maintenance code while adhering to best practices and standards.',
      'Optimize application for maximum speed and scalability.',
      'Troubleshoot and debug issues as they arise and implement effective solutions.',
      'Work with the backend team to integrate frontend features with backend systems.',
    ],
  },

  {
    id: 2,
    name: 'Easepay',
    website: 'https://www.easepay.io/',
    job: 'Frontend Engineer',
    date: 'May 2023 - Present',
    duties: [
      'Develop and maintain user-facing features using React, styled-components, TailwindCSS, and other front end technologies.',
      'Collaborate with the design and product teams to translate designs into high quality code and user interface.',
      'Write clean, efficient, and maintenance code while adhering to best practices and standards.',
      'Optimize application for maximum speed and scalability.',
      'Troubleshoot and debug issues as they arise and implement effective solutions.',
      'Work with the backend team to integrate frontend features with backend systems.',
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
      <div className='w-[50rem] mx-auto'>
        <div>
          <Heading number='02' heading='Professional Experience' />
        </div>
        <div className='flex gap-[48px] '>
          <div className='flex flex-col gap-4'>
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
                        <div className='flex flex-col gap-[24px]'>
                          {duties.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className='flex items-start gap-3'
                              >
                                <Arrow />
                                <div className='w-[40rem]'>
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
