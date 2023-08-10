'use client';

import React from 'react';
import Hero from './sections/Hero';
import ShortStory from './sections/ShortStory';
import Benefits from './sections/Benefits';
import Reasoning from './sections/Reasoning';
import FAQ from './sections/FAQ';
import useAnimation from '@/app/hooks/useAnimation';

const HomePage = () => {
  useAnimation({});

  return (
    <>
      <Hero />
      <ShortStory />
      <Benefits />
      <Reasoning />
      <FAQ />
    </>
  );
};

export default HomePage;
