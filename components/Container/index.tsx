interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className='max-w-[93%] mx-auto'>{children}</div>;
};

export default Container;
