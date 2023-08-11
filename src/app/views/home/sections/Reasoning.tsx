import Container from '@/app/components/Container';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import TextBlockContainer from '@/app/components/TextBlockContainer';
import Image from 'next/image';
import React from 'react';
import Reef from '../../../../../public/assets/reef.png';
import Flippers from '../../../../../public/assets/flippers.png';
import Beachball from '../../../../../public/assets/beachball.png';

const Reasoning = () => {
  return (
    <>
      <Section className="relative bg-primary">
        <Container className="z-10 relative">
          <TextBlockContainer>
            <TextBlock h1="When and how can I buy Rhyze tokens?">
              The Rhyze Fair Launch 🤝🚀 is on August the 13th at 2PM UTC right
              here on the Rhyze website. The Rhyze token is on the Polygon
              network, so get your MATIC (for fees) and USDC ready and remember
              to invite all your crypto friends from London to Lagos, Tokyo to
              Timbuktu and everywhere beyond. Everyone’s welcome. Let’s Rhyze
              together!
            </TextBlock>
            <TextBlock h1="Why a green chart a great thing?">
              Not everyone likes eating their veggies, but everybody loves a
              green chart. Imagine someone looking for a hot project and seeing
              a completely green chart. Rhyze looks fantastic no matter when you
              look at it. You can recommend this project to a friend, confident
              they will only ever see a green chart. This project will always
              sell itself. It will create a ton of excitement as people begin to
              find out, and you will be right in the middle of it!
            </TextBlock>
            <TextBlock h1="Can I lose money in Rhyze?">
              There is unlimited upside for RHYZE and we have done our best to
              limit the downside. Our dev team is experienced, and a third party
              audits our contracts. Please note, there is always an inherent
              risk when investing in DeFi, so please invest only what you are
              comfortable with.
            </TextBlock>
          </TextBlockContainer>
        </Container>
        <div className="absolute top-5 right-[10%] float opacity-50 md:opacity-100">
          <Image
            src={Beachball}
            alt="Rhyze Beachball"
            width={80}
            className="scale-x-[-1]"
          />
        </div>
        <div className="absolute top-[50%] md:left-[15%] w-[85px] md:w-auto float opacity-50 md:opacity-100">
          <Image src={Flippers} alt="Beach Flippers" width={85} />
        </div>
        <div className="absolute bottom-0 right-0 w-[200px] md:w-auto opacity-50 md:opacity-100">
          <Image src={Reef} alt="Rhyze Reef" width={430} />
        </div>
      </Section>
    </>
  );
};

export default Reasoning;
