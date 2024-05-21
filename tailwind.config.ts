import type { Config } from 'tailwindcss';
import TypographyPlugin from '@tailwindcss/typography';

const config: Config = {
  content: [
    './node_modules/@igoryusha22/promo-ui/dist/**/*.js',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/s**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  darkMode: 'selector',

  theme: {
    backgroundColor: {
      primary: 'rgb(var(--color-background-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-background-secondary) / <alpha-value>)',
      current: 'currentColor',
    },

    textColor: {
      primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
    },

    extend: {
      typography: ({ theme }: any) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('textColor.primary'),
            '--tw-prose-bold': theme('textColor.primary'),
            '--tw-prose-headings': theme('textColor.primary'),
            '--tw-prose-links': theme('textColor.primary'),
            '--tw-prose-quotes': theme('textColor.primary'),
          },
        },

        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      }),
    },
  },

  plugins: [TypographyPlugin],
};

export default config;
