import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className='max-w-[90%] mx-auto  3xl:max-w-[85%]'>{children}</div>;
};

export default Container;
