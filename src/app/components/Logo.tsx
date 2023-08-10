import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/assets/rhyze_logo.png"
        alt="Rhyze Logo"
        width={25}
        height={25}
      />
      <strong>Rhyze</strong>
    </div>
  );
};

export default Logo;
