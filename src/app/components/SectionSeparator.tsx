import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const SectionSeparator: FC<
  PropsWithChildren & HTMLAttributes<HTMLBaseElement>
> = ({ className }) => {
  const svgStyle = `.st0{fill: hsl(var(--dark-sand));}`;

  return (
    <>
      <svg
        className={twMerge('absolute', className)}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 4000 470"
      >
        <style>{svgStyle}</style>
        <path
          className="st0"
          d="M1419.3,40C549.5-35.7,908,70.2,28.8,189.2c-17.2,30.3-41.3,111.4,0,193c51.6,102.1,214.9,30.2,741.2,0  c526.4-30.2,649.3-68,1217,51c567.7,119.1,1492.8-86.8,1651.4-119.1c158.6-32.3,527.3-194.7,276.8-274.2  c-250.5-79.5-915.8-24.6-1237.6,28.5c-321.4,53-388.3,47.2-1254.9-28.2L1419.3,40z"
        />
      </svg>
    </>
  );
};

export default SectionSeparator;
