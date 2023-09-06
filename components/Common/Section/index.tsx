import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id: string;
}

const Section = ({ children, id }: SectionProps) => {
  return (
    <section
      className='pt-[42px] pb-[72px] md:pt-[40px] md:pb-[160px] '
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
