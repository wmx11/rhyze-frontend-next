import H1 from '@/app/components/H1';
import HeroWrapper from '@/app/components/HeroWrapper';
import Image from 'next/image';

import Countdown from '@/app/components/Countdown';
import PalmTree from '../../../../../public/assets/palm_tree.png';
import RhyzeLogoOutline from '../../../../../public/assets/rhyze_logo_outline.png';
import Sunlounger from '../../../../../public/assets/sunlounger.png';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <HeroWrapper className="justify-center items-center">
        <div className="space-y-12 md:space-y-16 text-center flex flex-col z-10">
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
        <div className="hidden md:block absolute bottom-[0] left-[-20px] z-[1] opacity-80 scale-x-[-1]">
          <Image src={Sunlounger} alt="Palm tree" width={320} />
        </div>
        <div className="md:block absolute bottom-[0] right-[-20px] z-[1] opacity-80 max-w-[120px] md:max-w-full">
          <Image src={Sunlounger} alt="Palm tree" width={320} />
        </div>
      </HeroWrapper>
      <div className="lg:block absolute top-[-200px] md:top-[-100px] left-[-500px] rotate-[15deg] z-[1] blow_in_wind">
        <Image src={PalmTree} alt="Palm tree" width={1000} />
      </div>
      <div className="lg:block absolute top-[-200px] md:top-[-100px] right-[-500px] rotate-[-25deg] z-[1] blow_in_wind_2">
        <Image
          src={PalmTree}
          alt="Palm tree"
          width={1000}
          className="scale-x-[-1]"
        />
      </div>
    </section>
  );
};

export default Hero;
