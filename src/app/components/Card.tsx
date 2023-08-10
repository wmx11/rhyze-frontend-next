import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import H2 from './H2';

const Card: FC<PropsWithChildren & HTMLAttributes<HTMLBaseElement>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={twMerge(
        'card bg-dark-wet-sand text-white space-y-4 p-6 min-h-[200px] flex-1 shadow-md',
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader: FC<PropsWithChildren> = ({ children }) => {
  return <H2>{children}</H2>;
};

export default Card;
