import React from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';

interface LiveProps {
  link: string;
}

const Live = ({ link }: LiveProps) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <BsBoxArrowUpRight size={20} />
    </a>
  );
};

export default Live;
