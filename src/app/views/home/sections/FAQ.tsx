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
            <TextBlock h1="What keeps Rhyze token price going up?">
              <p>
                1. Taxes on buys and sells create funds to support the project.
                <br />
                2. Smart use of rebasing to adjust supply in circulation.
                <br />
                3. Revenue generation from investments and from the built-in
                raffle at launch.
                <br />
                This is real, new money that goes back into supporting the
                token.
              </p>
            </TextBlock>
            <TextBlock h1="Community Focused">
              Rhyze was built to deliver what DeFi communities want. No tricks
              or games, proven founders with great track records, and a real
              focus on their needs. The Rhyze team will work with the Rhyze
              community every step of the way, focusing on transparency, honesty
              and hard work.
            </TextBlock>
          </TextBlockContainer>
        </Container>
      </Section>
    </>
  );
};

export default FAQ;
