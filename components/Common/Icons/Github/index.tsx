import React from 'react';
import { BsGithub } from 'react-icons/bs';

interface GithubProps {
  link: string;
}

const Github = ({ link }: GithubProps) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <BsGithub size={20} />
    </a>
  );
};

export default Github;
