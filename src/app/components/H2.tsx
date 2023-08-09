import React, { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const H2: FC<PropsWithChildren & HTMLHeadingElement> = ({
  children,
  className,
}) => {
  return (
    <h2 className={twMerge('text-3xl font-bold', className)}>{children}</h2>
  );
};

export default H2;
