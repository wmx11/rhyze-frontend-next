import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './globals.scss';
import { Web3Provider } from './components/Web3Provider';
import { Polygon } from '@thirdweb-dev/chains';
import { Toaster } from './ui/components/ui/toaster';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '600', '900'],
});

export const metadata: Metadata = {
  title: 'Rhyze',
  description: 'Bringing fun back to DeFi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={nunito.className}>
        <Web3Provider
          clientId="88912ba3a27fde3ae703949a155e7d85"
          activeChain={Polygon}
          supportedChains={[Polygon]}
        >
          <Navigation />
          {children}
          <Toaster />
        </Web3Provider>
        <Footer />
      </body>
    </html>
  );
}
