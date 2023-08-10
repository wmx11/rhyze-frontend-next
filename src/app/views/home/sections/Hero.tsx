import H1 from '@/app/components/H1';
import HeroWrapper from '@/app/components/HeroWrapper';
import Image from 'next/image';
import React from 'react';

import RhyzeLogoOutline from '../../../../../public/assets/rhyze_logo_outline.png';
import PalmTree from '../../../../../public/assets/palm_tree.png';
import Countdown from '@/app/components/Countdown';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <HeroWrapper className="justify-center items-center">
        <div className="space-y-12 md:space-y-16 text-center flex flex-col">
          <div className="flex items-center justify-center z-10">
            <Image
              src={RhyzeLogoOutline}
              alt="Rhyze hero logo"
              width={200}
              className="w-[100px] md:w-auto"
            />
          </div>
          <H1 className="md:text-7xl animate">Rhyze and Shine</H1>
          <div className="animate">
            <Countdown />
          </div>
          <p className="font-bold text-3xl animate">Until fair launch</p>
          <p className="font-bold text-3xl animate">
            Rhyze launch date: August 13 2023
            <br />
            Time: 14:00 UTC
          </p>
        </div>
      </HeroWrapper>
      <div className="hidden lg:block absolute top-[-15%] left-[-100%] rotate-[15deg] z-[1] animate-palm-1">
        <Image src={PalmTree} alt="Palm tree" width={1300} />
      </div>
      <div className="hidden lg:block absolute top-[-20%] lg:right-[-100%] rotate-[-25deg] z-[1] animate-palm-2">
        <Image
          src={PalmTree}
          alt="Palm tree"
          width={1500}
          className="scale-x-[-1]"
        />
      </div>
    </section>
  );
};

export default Hero;
