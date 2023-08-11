import { cva } from 'class-variance-authority';
import { BaseHTMLAttributes, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { Size } from '../../../types';

const TextBlockContainer: FC<
  PropsWithChildren & BaseHTMLAttributes<HTMLBaseElement> & { size?: Size }
> = ({ children, className, size = 'lg' }) => {
  const textBlockContainer = cva(
    twMerge('text-white space-y-32 max-w-xl mx-auto', className),
    {
      variants: {
        size: {
          xs: 'space-y-4',
          sm: 'space-y-8',
          md: 'space-y-16',
          lg: 'space-y-32',
          xl: 'space-y-36',
        },
      },
    }
  );

  return <div className={textBlockContainer({ size })}>{children}</div>;
};

export default TextBlockContainer;
