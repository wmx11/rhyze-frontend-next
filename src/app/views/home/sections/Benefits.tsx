import Container from '@/app/components/Container';
import Section from '@/app/components/Section';
import Image from 'next/image';
import React from 'react';
import SurfBoard from '../../../../../public/assets/surf_board_waves.png';
import TextBlock from '@/app/components/TextBlock';

const svgStyle = `.st2 {
  fill: hsl(var(--primary));
}`;

const Benefits = () => {
  return (
    <>
      <Section className="min-h-screen bg-accent relative">
        <Container>
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            <div className="flex-1 space-y-16 text-white">
              <TextBlock h2="Simple Buy & Earn Strategy">
                No staking is required. Purchase the token, sit back and watch
                it Rhyze. Both the RHYZE price and the total USDC value of the
                Rhyze in your wallet can only go up.
              </TextBlock>
              <TextBlock h2="Fair and Transparent">
                No team tokens, presales, private sales, token dumps or token
                lockups. We promise to be transparent and fair in everything we
                do.
              </TextBlock>
              <TextBlock h2="100% Backed">
                We don’t use a traditional Liquidity Pool. Instead, every RHYZE
                token purchased is minted, and every token sold is burned,
                keeping RHYZE 100% backed. A portion of the mint and redeem fees
                back the token, and the price always goes up!
              </TextBlock>
              <TextBlock h2="Fee Mechanics">
                <p>
                  <strong>BUY / MINT (15%)</strong>
                  <br />
                  5% Investments
                  <br />
                  4% Token Backing
                  <br />
                  1% Injection / Rebasing
                  <br />
                  5% Treasury
                  <br />
                  <br />
                  <strong>SELL / REDEEM (10%)</strong>
                  <br />
                  2.5% investments
                  <br />
                  4% Token Backing
                  <br />
                  1% Injection / Rebasing
                  <br />
                  2.5% Treasury
                </p>
              </TextBlock>
            </div>
            <div className="flex-1 flex items-center">
              <Image
                src={SurfBoard}
                alt="Rhyze Pinacolada"
                className="float_2"
              />
            </div>
            <div className="flex-1 space-y-16 text-white">
              <TextBlock h2="Push - Pull Rebasing">
                Rhyze utilizes a breakthrough push-pull rebasing strategy to
                ensure consistent equilibrium for the token. Whenever Rhyze
                rebases, the price will go up.
              </TextBlock>
              <TextBlock h2="Diversified Investments">
                A significant portion of the taxes goes to a diversified
                investment fund. All profits will be periodically injected back
                into Rhyze, increasing the price.
              </TextBlock>
              <TextBlock h2="Whale Proof Community">
                It doesn’t matter whether you’re the first or the 10000th buyer,
                nobody can dump the price of RHYZE and leave you as a bagholder.
                With Rhyze, all buys or sells push the price up and benefit the
                community as a whole. Rhyze is the first DeFi token where you
                aren’t afraid of your fellow investors!
              </TextBlock>
            </div>
          </div>
        </Container>
        <svg
          className="absolute bottom-[-120px] w-full z-[0] overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 1440 141"
        >
          <style type="text/css">{svgStyle}</style>
          <path
            className="st2"
            d="M1103.4,129c572.1,22.7,336.3-9.1,914.6-44.8c11.3-9.1,27.2-33.4,0-57.9c-33.9-30.6-141.3-9.1-487.6,0  C1184.2,35.4,1103.4,46.7,730,11c-373.4-35.7-981.9,26-1086.2,35.7C-460.4,56.4-703,105.2-538.2,129c164.8,23.8,602.3,7.4,814-8.5  c211.4-15.9,255.4-14.2,825.4,8.5L1103.4,129z"
          ></path>
          <div className="bg-[url('/noise.png')] absolute w-full bottom-0 h-[141px] mix-blend-overlay"></div>
        </svg>
      </Section>
    </>
  );
};

export default Benefits;
