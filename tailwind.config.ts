import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        accent: 'hsl(var(--accent))',
        black: 'hsl(var(--black))',
        content: 'hsl(var(--content))',
        'light-sand': 'hsl(var(--light-sand))',
        'dark-sand': 'hsl(var(--dark-sand))',
        'dark-ocean': 'hsl(var(--dark-ocean))',
        'light-ocean': 'hsl(var(--light-ocean))',
        'rhyze-red': 'hsl(var(--rhyze-red))',
        'dark-wet-sand': 'hsl(var(--dark-wet-sand))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--primary))',
      },
      borderRadius: {
        lg: 'var(--border-radius)',
        md: 'calc(var(--border-radius) - 2px)',
        sm: 'calc(var(--border-radius) - 4px)',
      },
    },
  },
  plugins: [require('daisyui'), require('tailwindcss-animate')],
  daisyui: {
    themes: [
      {
        synthwave: {
          ...require('daisyui/src/theming/themes')['[data-theme=bumblebee]'],
          primary: 'var(--primary)',
          'primary-focus': 'var(--primary-focus)',
          secondary: 'var(--secondary)',
          accent: 'var(--accent)',
          neutral: 'var(--black)',
          '--p': 'var(--primary)',
          '--pf': 'var(--primary-focus)',
          '--s': 'var(--secondary)',
          '--a': 'var(--accent)',
          '--n': 'var(--black)',
          '--rounded-btn': 'var(--border-radius)',
          '--rounded-box': 'var(--border-radius)',
          '--tab-radius': '0',
        },
      },
    ],
  },
};
export default config;
