import { FC } from 'react';

export interface ArrowIconProps {
  className?: string;
}

export const Arrows: FC<ArrowIconProps> = ({ className }) => (
  <svg
    className={className}
    height='85.208'
    version='1.1'
    viewBox='0 0 122.883 85.208'
    width='122.883'
    x='0'
    xmlSpace='preserve'
    xmlns='http://www.w3.org/2000/svg'
    y='0'
  >
    <path
      clipRule='evenodd'
      d='M122.883 28.086L93.668 0l-.004 18.078H41.932v20.019h51.732l.004 18.08 29.215-28.091zM0 57.118l29.215-28.087.002 18.078h51.734v20.019H29.217l-.002 18.08L0 57.118z'
      fillRule='evenodd'
    />
  </svg>
);
