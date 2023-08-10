import React, { BaseHTMLAttributes, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const Section: FC<PropsWithChildren & BaseHTMLAttributes<HTMLBaseElement>> = ({
  children,
  className,
  id,
}) => {
  return (
    <section
      className={twMerge(
        'py-12 md:py-24 bg-[url("/noise.png")] bg-center',
        className
      )}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
