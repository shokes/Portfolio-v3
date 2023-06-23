import React from 'react';
import { Section, Heading } from '@/components';

const experiences = [
  {
    id: 1,
    name: 'Easepay',
    job: 'Frontend Developer',
    date: 'May 2023 - Present',
    duties: [
      'Develop and maintain user-facing features using React, styled components, TailwindCSS, and other front end technologies.',
      'Collaborate with the design and product teams to translate designs into high quality code and user interface.',
      'Write clean, efficient, and maintenance code while adhering to best practices and standards.',
      'Optimize application for maximum speed and scalability.',
      'Troubleshoot and debug issues as they arise and implement effective solutions.',
      'Work with the backend team to integrate frontend features with backend systems.',
    ],
  },

  {
    id: 2,
    name: 'Arvist',
    job: 'Frontend Developer',
    date: 'April 2023 - Present',
    duties: [
      'Develop and maintain user-facing features using React, styled components, TailwindCSS, and other front end technologies.',
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
    job: 'Frontend Developer',
    date: 'December 2022 - February 2023',
    duties: [
      'Develop and maintain user-facing features using React, styled components, TailwindCSS, and other front end technologies.',
      'Collaborate with the design and product teams to translate designs into high quality code and user interface.',
      'Write clean, efficient, and maintenance code while adhering to best practices and standards.',
      'Optimize application for maximum speed and scalability.',
      'Troubleshoot and debug issues as they arise and implement effective solutions.',
      'Work with the backend team to integrate frontend features with backend systems.',
    ],
  },
];

const Experience = () => {
  return (
    <Section>
      <div className='flex  justify-center'>
        <Heading number='02' heading='Where I have Worked' />
        <div>
          {experiences.map((experience) => {
            const { id, name, job, date, duties } = experience;
            return <div key={id}>{name}</div>;
          })}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
