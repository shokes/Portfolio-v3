interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <section className='mb-[140px]'>{children}</section>;
};

export default Section;
