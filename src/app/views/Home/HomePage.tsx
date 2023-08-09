import React from 'react';
import Hero from './sections/Hero';
import ShortStory from './sections/ShortStory';
import Benefits from './sections/Benefits';
import Reasoning from './sections/Reasoning';
import FAQ from './sections/FAQ';

const HomePage = () => {
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
