import Container from '@/app/components/Container';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import TextBlockContainer from '@/app/components/TextBlockContainer';
import Image from 'next/image';
import React from 'react';
import Reef from '../../../../../public/assets/reef.png';

const Reasoning = () => {
  return (
    <>
      <Section className="relative bg-primary">
        <Container>
          <TextBlockContainer>
            <TextBlock h1="When and how can I buy Rhyze tokens?">
              We will have a fair launch 🤝🚀 on/near August the 13th. The Rhyze
              token will be launched on Polygon so get your MATIC and USDC ready
              and remember to invite all your crypto friends from London to
              Lagos, Tokyo to Timbuktu and everywhere beyond. Everyone’s
              welcome. Let’s Rhyze together!
            </TextBlock>
            <TextBlock h1="Why is green chart a good thing?">
              Not everyone likes eating their veggies, but everybody loves a
              green chart. Imagine those looking for a hot project seeing a
              completely green chart on Dextools, Zerion, CoinGecko and more.
              Excitement will follow and you will be right in the middle of it!
            </TextBlock>
            <TextBlock>
              In simple terms, when a token is going up, people get FOMO. Look
              at PEPE, a token with no utility and no revenue, reaching almost a
              $2BN market cap at the ATH. People kept buying PEPE because the
              chart was green and it looked like it was never going to stop.
              Well, with Rhyze, the price will literally never stop going up!
              Imagine the potential!
            </TextBlock>
          </TextBlockContainer>
        </Container>
        <div className="absolute top-5 right-10 float">
          {/* <Image
            src={Shark}
            alt="Rhyze Pinacolada"
            width={130}
            className="scale-x-[-1]"
          /> */}
        </div>
        <div className="absolute top-[50%] md:left-10 w-[150px] md:w-auto float">
          {/* <Image src={SharkTerry} alt="Rhyze Pinacolada" width={330} /> */}
        </div>
        <div className="absolute bottom-0 right-0 w-[200px] md:w-auto">
          <Image src={Reef} alt="Rhyze Pinacolada" width={430} />
        </div>
      </Section>
    </>
  );
};

export default Reasoning;
