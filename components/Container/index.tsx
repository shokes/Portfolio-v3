import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className='max-w-[90%] mx-auto  3xl:max-w-[85%]'>{children}</div>;
};

export default Container;
