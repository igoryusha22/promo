import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/s**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'raisin-black': '#242424',
        'black': '#18181B',
      },
    },
  },
  plugins: [],
};
export default config;
