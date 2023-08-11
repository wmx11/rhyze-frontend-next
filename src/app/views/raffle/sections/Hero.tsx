import H1 from '@/app/components/H1';
import HeroWrapper from '@/app/components/HeroWrapper';

import Cocktail from '../../../../../public/assets/cocktail.png';
import Cocktail2 from '../../../../../public/assets/coconut_drink.png';
import Sunlounger from '../../../../../public/assets/sunlounger.png';

import EnterRaffleModal from '@/app/components/raffle/EnterRaffleModal';
import RafflePieChart from '@/app/components/raffle/RafflePieChart';
import RaffleUserStats from '@/app/components/raffle/RaffleUserStats';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative">
      <HeroWrapper className="items-center justify-center relative pb-24">
        <div className="absolute bg-neutral rounded-full top-0 z-10">
          <div className="ray ray-1"></div>
          <div className="ray ray-2"></div>
          <div className="ray ray-3"></div>
          <div className="ray ray-4"></div>
        </div>
        <div className="p-10 relative ">
          <div className="mb-16 space-y-16 flex flex-col max-w-xl mx-auto text-center ">
            <H1 className="animate !text-7xl z-10 relative">
              Catch the raffle wave!
            </H1>
            <EnterRaffleModal />
            <div className="absolute top-0 left-0 animate float max-w-[120px] md:max-w-full">
              <Image
                src={Cocktail}
                alt="Rhyze Cocktail"
                width={180}
                className="opacity-50 md:opacity-100"
              />
            </div>
            <div className="absolute top-0 right-0 animate float max-w-[120px] md:max-w-full">
              <Image
                src={Cocktail2}
                alt="Rhyze Cocktail"
                width={150}
                className="opacity-50 md:opacity-100"
              />
            </div>
          </div>
          <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <RaffleUserStats />
          </div>
          <div className="flex items-center justify-center py-10 text-center">
            <div className="space-y-8">
              <H1 className="animate !text-7xl z-10 relative">Raffle stats</H1>
              <div className="max-w-[300px] mx-auto float">
                <RafflePieChart />
              </div>
            </div>
          </div>
          <div className="md:block absolute bottom-[0] right-0 md:right-[-100px] z-[1] opacity-80 max-w-[120px] md:max-w-full">
            <Image src={Sunlounger} alt="Palm tree" width={250} />
          </div>
          <div className="md:block absolute bottom-[0] left-0 md:left-[-100px] scale-x-[-1] z-[1] opacity-80 max-w-[120px] md:max-w-full">
            <Image src={Sunlounger} alt="Palm tree" width={250} />
          </div>
        </div>
      </HeroWrapper>
    </section>
  );
};

export default Hero;
