import brandImg from '@/public/brand.svg';
import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

const BrandImg: FC<Omit<ImageProps, 'src' | 'alt'>> = (props) => (
  <Image {...props} src={brandImg} alt="Sharry" />
);

export default BrandImg;
