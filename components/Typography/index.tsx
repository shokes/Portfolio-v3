import React from 'react';

type Type = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

// const VARIANT_Styles: Record<Type, string> = {
//   h1: 'text-[36px] md:text-5xl',
//   h2: 'text-2xl md:text-4xl',
//   h3: 'text-2xl md:text-3xl',
//   h4: 'text-xl md:text-2xl',
//   h5: 'text-lg md:text-xl',
//   h6: 'text-lg',
//   p: 'text-sm md:text-base',
// };

const VARIANT_Styles: Record<Type, string> = {
  h1: 'text-[34px] sm:text-[36px] leading-[44px] tracking-[0px] md:text-[58px] md:leading-[56px] md:tracking-[0px] xl:text-[68px] xl:leading-[64px] xl:tracking-[1.36px] 3xl:text-5xl',
  h2: 'text-[32px] leading-[38.4px] tracking-[0px]  md:text-[38px] md:leading-[36px] md:tracking-[0.72px] xl:text-[40px] xl:leading-[48px] xl:tracking-[0.8px]  3xl:text-4xl',
  h3: 'text-[20px] leading-[26.4px] tracking-[0px] md:text-[20px] md:leading-[24px] md:tracking-[0.4px] xl:text-[22px] xl:leading-[28px] xl:tracking-[0.44px]  3xl:text-3xl',
  h4: 'text-[16px] leading-[24px] tracking-[0px] tracking-[0.44px] md:text-[16px] md:leading-[22px] md:tracking-[0.32px] xl:text-[18px] xl:leading-[22px] xl:tracking-[0.36px]  3xl:text-2xl',
  h5: 'text-[14px] leading-[24px] tracking-[0.28px] md:text-[16px]  md:leading-[28px] md:tracking-[0.32px]   lg:text-[18px] lg:leading-[28px] lg:tracking-[0.36px]   3xl:text-xl',
  h6: 'text-[16px] leading-[26px] tracking-[0px] md:text-[14px] md:leading-[22px] md:tracking-[0.28px] xl:text-[16px] xl:leading-[24px] xl:tracking-[0.32px]  3xl:text-lg',
  p: 'text-xs 2xl:text-sm 3xl:text-base',
};

type Weight =
  | 'font-thin'
  | 'font-extralight'
  | 'font-light'
  | 'font-normal'
  | 'font-medium'
  | 'font-semibold'
  | 'font-bold'
  | 'font-extrabold'
  | 'font-black';

type Transforms = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

const VARIANT_Transforms: Record<Transforms, string> = {
  none: 'inherit',
  capitalize: 'capitalize',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
};

interface Props {
  children: React.ReactNode;
  as?: Type;
  looksLike?: Type;
  weight?: Weight;
  transform?: Transforms;
}

const Typography = ({
  children,
  as = 'p',
  looksLike = as,
  weight,
  transform = 'none',
}: Props) => {
  const TagName = as as keyof React.JSX.IntrinsicElements;
  return (
    <TagName
      className={`
        ${VARIANT_Styles[looksLike]}
        ${VARIANT_Transforms[transform]}
        ${weight}
      `}
    >
      {children}
    </TagName>
  );
};

export default Typography;
