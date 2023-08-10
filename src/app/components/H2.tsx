import React, { BaseHTMLAttributes, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const H2: FC<PropsWithChildren & BaseHTMLAttributes<HTMLBaseElement>> = ({
  children,
  className,
}) => {
  return (
    <h2 className={twMerge('text-3xl font-bold', className)}>{children}</h2>
  );
};

export default H2;
