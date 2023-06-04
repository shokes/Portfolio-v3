import React from 'react';
import Image from 'next/image';
import Typography from '../Typography';
import oshoke from '../../public/images/Oshoke-Oyati.jpg';

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex items-center'>
        <div className='w-[50%]'>
          <div className='flex items-center gap-3'>
            <Typography as='h6' weight='font-semibold'>
              01.
            </Typography>
            <Typography as='h4' weight='font-semibold'>
              About Me
            </Typography>
            <div>
              <div className='border border-red-600 w-[6rem]'></div>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            nesciunt, id aliquid sit ex accusamus ullam maxime blanditiis
            accusantium libero provident doloremque laudantium recusandae
            tempore esse exercitationem ipsum facilis reprehenderit molestiae
            impedit nulla? Totam enim impedit nisi veniam quasi, officiis
            similique magni quos aliquam. Magni molestias sequi impedit? Placeat
            harum eos saepe neque recusandae cumque cum eveniet dolor illo
            facilis velit iure, sequi reprehenderit natus, laborum impedit ut.
            Cupiditate animi perferendis magni, officiis recusandae alias sit et
            doloribus tenetur suscipit officia possimus dolorum? In cupiditate
            harum voluptatibus a, tempora architecto ex tenetur tempore sunt,
            alias quaerat illo temporibus at itaque.
          </p>
        </div>

        <div className='w-[50%]'>
          <Image src={oshoke} width={350} height={350} alt='oshoke' />
        </div>
      </div>
    </div>
  );
};

export default About;
