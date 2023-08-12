import React from 'react';

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <section className='mb-[200px]'>{children}</section>;
};

export default Section;
