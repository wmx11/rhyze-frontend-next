import Container from '@/app/components/Container';
import Section from '@/app/components/Section';
import Image from 'next/image';

import Parasol from '../../../../../public/assets/parasol.png';
import Pinacolada from '../../../../../public/assets/pinacolada.png';

const ShortStory = () => {
  return (
    <>
      <Section className="bg-dark-sand min-h-screen flex items-center relative">
        <Container>
          <div className="mx-auto max-w-xl text-2xl text-center font-bold animate">
            <p>
              The summer is here, and Rhyze is bringing the sunshine! We have
              been hard at work blending innovative DeFi protocols and proven
              crypto strategies to create what might be the hottest new token in
              DeFi! Through clever use of rebasing, diversified investments and
              revenue-generating utility, the RHYZE token can only go up in
              price. So if you’re looking for a community-focused joyride with
              tons of excitement and potential, you’re in the right place. Rhyze
              and Shine!
            </p>
          </div>
        </Container>
        <div className="absolute bottom-[30px] right-[30px] w-[150px] md:w-auto z-10">
          <Image src={Pinacolada} alt="Rhyze Pinacolada" width={230} />
        </div>
        <div className="absolute bottom-[65%] md:bottom-[90px] w-[250px] md:w-auto md:left-20 z-10 opacity-20 lg:opacity-100">
          <Image
            src={Parasol}
            alt="Rhyze Parasol"
            width={600}
            className="scale-x-[-1]"
          />
        </div>
      </Section>
    </>
  );
};

export default ShortStory;
