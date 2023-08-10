'use client';

import Container from '@/app/components/Container';
import H2 from '@/app/components/H2';
import Section from '@/app/components/Section';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import Charts from './sections/Charts';
import Controls from './sections/Controls';
import Stats from './sections/Stats';
import config from '@/app/utils/config';

const RaffleAdminPage = () => {
  const account = useAddress();

  if (!account) {
    return (
      <>
        <Section className="min-h-screen flex items-center justify-center">
          <Container>
            <div className="max-w-xl mx-auto text-center space-y-8">
              <H2>Connect your wallet to access this page</H2>
              <div>
                <ConnectWallet />
              </div>
            </div>
          </Container>
        </Section>
      </>
    );
  }

  if (!config.adminWallets.includes(account)) {
    return (
      <>
        <Section className="min-h-screen flex items-center justify-center">
          <Container>
            <div className="max-w-xl mx-auto text-center space-y-8">
              <H2>You do not have permission to view this page</H2>
            </div>
          </Container>
        </Section>
      </>
    );
  }

  return (
    <>
      <Stats />
      <Controls />
      <Charts />
    </>
  );
};

export default RaffleAdminPage;
