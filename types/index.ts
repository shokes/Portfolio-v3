import { StaticImageData } from 'next/image';
import React from 'react';

export interface ProjectTypes {
  id: number;
  image: StaticImageData;
  name: string;
  description: string;
  github?: string;
  live: string;
}

export interface HeadingProps {
  number: '01' | '02' | '03' | '04' | '05';
  heading: string;
}

export interface SectionProps {
  children: React.ReactNode;
  id: string;
}
