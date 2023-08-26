import React from 'react';
import { Section, Heading, Typography, Button } from '@/components';

const Contact = () => {
  return (
    <Section id='contact'>
      <div className='md:max-w-[640px] 3xl:max-w-[1008px] mx-auto' id='contact'>
        <div>
          <Heading number='04' heading='Get In Touch' />
        </div>
        <div className='text-center mb-3'>
          <Typography as='h5' weight='font-normal'>
            Do you happen to have any questions, intriguing proposals, exciting
            projects, or perhaps a desire to collaborate on a fantastic venture?
            Please don&apos;t hesitate to get in touch; I&apos;m here and ready
            to engage in a meaningful conversation with you. Your thoughts and
            ideas are valuable to me, and I&apos;m genuinely looking forward to
            the possibility of us teaming up or discussing whatever&apos;s on
            your mind. Feel free to reach out!
          </Typography>
        </div>
        <a
          className='flex justify-center'
          href='mailto:oyatioshoke@yahoo.com'
          target='_blank'
          rel='noreferrer'
        >
          <Typography as='h3' weight='font-semibold'>
            {' '}
            oyatioshoke@yahoo.com
          </Typography>
        </a>{' '}
        <div className='flex justify-center mt-[20px] md:mt-[50px]'>
          <Button link='mailto:oyatioshoke@yahoo.com'>Say Hello</Button>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
