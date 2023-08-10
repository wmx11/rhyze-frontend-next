'use client';

import React, { useState } from 'react';
import navigation from '../utils/navigation';
import Container from './Container';
import Logo from './Logo';
import Link from 'next/link';
import { useAddress, useDisconnect } from '@thirdweb-dev/react';
import { useToast } from '../ui/components/ui/use-toast';

const Navigation = () => {
  const address = useAddress();
  const disconnect = useDisconnect();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`bg-secondary bg-[url('/noise.png')] py-2 fixed bottom-0 border-t border-t-dark-wet-sand md:sticky md:top-0 z-20 w-full h-[61px] md:h-auto ${
        isOpen ? 'open' : ''
      }`}
    >
      <Container className="flex flex-col md:items-center md:flex-row md:justify-between text-right md:text-left">
        <div className="flex items-center absolute md:relative gap-4 top-[20px] md:top-0 left-[22px] md:left-0 md:flex-1">
          <Link
            href="/"
            className="block w-auto"
            onClick={() => setIsOpen(false)}
          >
            <Logo />
          </Link>
          {address && (
            <div>
              <button
                className="btn btn-outline btn-xs text-xs"
                onClick={() => {
                  disconnect();
                  toast({
                    title: 'Disconnected',
                    description:
                      'You have successfully disconnected your wallet',
                  });
                }}
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
        <div className="pt-16 md:pt-0">
          <ul className="flex flex-col md:flex-row gap-8 [&>li]:font-bold">
            {navigation.map((item, index) => {
              if (item.href.startsWith('#')) {
                return (
                  <li key={`nav_key_${index}`}>
                    <a
                      onClick={() => setIsOpen(false)}
                      className="cursor-pointer"
                      data-scroll-to={
                        item.href.startsWith('#') ? item.href : ''
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={`nav_key_${index}`}>
                  {item.internal ? (
                    <Link href={item.href} onClick={() => setIsOpen(false)}>
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} onClick={() => setIsOpen(false)}>
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:flex-1"></div>
      </Container>
      <button
        className="w-[61px] h-[61px] absolute top-0 right-0 md:hidden flex items-center justify-center cursor-pointer"
        id="burger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </nav>
  );
};

export default Navigation;
