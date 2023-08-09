import React, { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const H1: FC<PropsWithChildren & HTMLHeadingElement> = ({
  children,
  className,
}) => {
  return (
    <h1
      className={twMerge(
        'text-4xl md:text-6xl font-black uppercase',
        className
      )}
    >
      {children}
    </h1>
  );
};

export default H1;
