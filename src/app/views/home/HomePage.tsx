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

  useAnimation({
    selector: '.animate-palm-1',
    animation: { left: ['-100%', '-650px'], rotate: [0, 15] },
  });

  useAnimation({
    selector: '.animate-palm-2',
    animation: { right: ['-100%', '-700px'], rotate: [0, -25] },
  });

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
