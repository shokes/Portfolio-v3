import { ProjectTypes } from '@/types';
import arvist from '@/public/images/projects/arvistScreenshot.png';
import easepay from '@/public/images/projects/easepayScreenshot.png';
import audiophile from '@/public/images/projects/audiophileScreenshot.png';

export const skills = ['JavaScript', 'TypeScript', 'ReactJS', 'NextJS', 'NodeJS', 'TailwindCSS'];
export const experiences = [
  {
    id: 1,
    name: 'Arvist',
    website: 'https://arvist.ai/',
    job: 'Frontend Engineer, Applications Manager',
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
    date: 'May 2023 - August 2023',
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

export const projects: ProjectTypes[] = [
  {
    id: 1,
    image: arvist,
    name: 'Arvist',
    description:
      'Arvist optimizes warehouse operations with AI and Computer Vision, enhancing efficiency and safety using your existing systems.',
    live: 'https://dashboard.arvistcloud.com/',
  },
  {
    id: 2,
    image: easepay,
    name: 'Easepay',
    description:
      'Easepay leverages the Lightning Network to enable instant and low-cost transactions.',
    live: 'https://www.easepay.io/',
  },

  {
    id: 3,
    image: audiophile,
    name: 'Audiophile',
    description:
      'This is my  solution to the Audiophile e-commerce website challenge on Frontend Mentor.',

    github: 'https://github.com/shokes/Audiophile',
    live: 'https://audiophile-jvop.vercel.app/',
  },
];

export const navItems = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Work',
    href: '#work',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

export const socialsLinks = [
  { id: 1, name: 'Twitter', href: 'https://twitter.com/Airshokes' },
  {
    id: 2,
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/oshoke-oyatilipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7bIwlnH1TeKUJ6r3jWAS6g%3D%3D',
  },
  { id: 3, name: 'GitHub', href: 'https://github.com/shokes' },
  { id: 4, name: 'Mail', href: 'mailto:oyatioshoke@yahoo.com' },
];
