import routes from './routes';

const navigation = [
  {
    label: 'dApp',
    href: '#dApp',
  },
  {
    label: 'Raffle',
    href: routes.raffle,
    internal: true,
  },
  {
    label: 'Whitepaper',
    href: 'https://warfi.gitbook.io/rhyze-token/',
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/hfvRJ4n4qG',
  },
];

export const footerNavigation = [
  {
    section: 'Navigation',
    navigation,
  },
  {
    section: 'Socials',
    navigation: [
      {
        label: 'Twitter',
        href: 'https://twitter.com/Rhyzetoken',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/rhyzefinance',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@rhyzetoken',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/hfvRJ4n4qG',
      },
    ],
  },
];

export default navigation;
