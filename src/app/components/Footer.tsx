import React from 'react';
import Section from './Section';
import Container from './Container';
import Logo from './Logo';
import { footerNavigation } from '../utils/navigation';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-t-primary/20">
      <Section>
        <Container className="block md:flex md:justify-center">
          <div className="flex flex-col md:flex-row gap-x-32 gap-y-16">
            <div className="space-y-4">
              <a href="/">
                <Logo />
              </a>
            </div>
            <div className="flex flex-1 flex-wrap flex-col md:flex-row gap-x-32 gap-y-16">
              {footerNavigation.map((item, index) => (
                <div key={`footer_nav_key_${index}`}>
                  <div className="mb-4 font-bold text-xl">{item.section}</div>
                  <ul className="space-y-2">
                    {item.navigation.map((item, index) => (
                      <li key={`footer_nav_sub_key_${index}`}>
                        <a href={item.href} target="_blank">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
