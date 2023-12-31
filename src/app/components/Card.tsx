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
        'card border border-dark-wet-sand bg-dark-sand/50 backdrop-blur-sm space-y-4 p-6 min-h-[200px] flex-1 shadow-[0px_0px_5px_hsl(var(--dark-wet-sand))] hover:scale-[1.01] transition-transform',
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
