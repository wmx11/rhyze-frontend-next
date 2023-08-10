import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './globals.scss';

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
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
