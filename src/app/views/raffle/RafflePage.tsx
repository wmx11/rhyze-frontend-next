'use client';

import React from 'react';
import Hero from './sections/Hero';
import FAQ from './sections/FAQ';
import useAnimation from '@/app/hooks/useAnimation';

const RafflePage = () => {
  useAnimation({});
  
  return (
    <>
      <Hero />
      <FAQ />
    </>
  );
};

export default RafflePage;
