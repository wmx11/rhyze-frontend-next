import Container from '@/app/components/Container';
import Section from '@/app/components/Section';
import TextBlock from '@/app/components/TextBlock';
import TextBlockContainer from '@/app/components/TextBlockContainer';
import React from 'react';

const FAQ = () => {
  return (
    <>
      <Section className="bg-primary">
        <Container>
          <TextBlockContainer>
            <TextBlock h1="How it works?">FAQ Answer</TextBlock>
            <TextBlock h1="How it works?">FAQ Answer</TextBlock>
            <TextBlock h1="How it works?">FAQ Answer</TextBlock>
          </TextBlockContainer>
        </Container>
      </Section>
    </>
  );
};

export default FAQ;
