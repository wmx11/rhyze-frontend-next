import Container from '@/app/components/Container';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import TextBlockContainer from '@/app/components/TextBlockContainer';

const FAQ = () => {
  return (
    <>
      <Section className="relative bg-black">
        <Container>
          <TextBlockContainer>
            <TextBlock h1="Can I lose money in Rhyze?">
              Yes, it is possible to lose money in any crypto project and Rhyze
              is no different. So join to have some fun and to take part in
              DeFi’s latest experiment, and invest only what you are comfortable
              with.
            </TextBlock>
            <TextBlock h1="How high can Rhyze go?">
              There is no limit to how high the Rhyze token can go. Our
              intention is to work with the Rhyze community to push it as high
              as it can go and for everyone to have a lot of fun doing it.
            </TextBlock>
            <TextBlock h1="What keeps Rhyze token price going up?">
              <p>
                1. Taxes on buys and sells create funds to support the project.
                <br />
                2. Smart use of rebasing to adjust supply in circulation.
                <br />
                3. Revenue generation: from investments and from the built-in
                raffle at launch.
                <br />
                This is real,new money that will go back into supporting the
                liquidity.
              </p>
            </TextBlock>
          </TextBlockContainer>
        </Container>
      </Section>
    </>
  );
};

export default FAQ;
