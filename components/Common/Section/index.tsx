import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id: string;
}

const Section = ({ children, id }: SectionProps) => {
  return (
    <section className='pt-[40px] pb-[160px]' id={id}>
      {children}
    </section>
  );
};

export default Section;
