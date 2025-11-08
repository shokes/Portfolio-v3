import { Typography } from '@/components';
import { socialsLinks } from '@/app/constants';

const Socials = () => {
  return (
    <div className='flex items-center gap-2 min-[340px]:gap-5'>
      {socialsLinks.map((social) => {
        const { name, href } = social;
        return (
          <a
            className='hover-underline-animation'
            href={href}
            target='_blank'
            rel='noreferrer'
            key={name}
          >
            <Typography as='h6' weight='font-semibold'>
              {name}
            </Typography>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
