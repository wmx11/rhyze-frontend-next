import React, { BaseHTMLAttributes, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const Container: FC<PropsWithChildren & BaseHTMLAttributes<HTMLBaseElement>> = ({
  children,
  className,
}) => {
  return (
    <div className={twMerge('container mx-auto p-4', className)}>
      {children}
    </div>
  );
};

export default Container;
