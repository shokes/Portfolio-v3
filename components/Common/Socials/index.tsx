import { Typography } from '@/components';

const socialsLinks = [
  { id: 1, name: 'Twitter', href: 'https://twitter.com/Airshokes' },
  {
    id: 2,
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/oshoke-oyatilipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7bIwlnH1TeKUJ6r3jWAS6g%3D%3D',
  },
  { id: 3, name: 'GitHub', href: 'https://github.com/shokes' },
  { id: 4, name: 'Mail', href: 'mailto:oyatioshoke@yahoo.com' },
];

const Socials = () => {
  return (
    <div className='flex items-center gap-5'>
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
              {' '}
              {name}
            </Typography>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
