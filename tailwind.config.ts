import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'menu-in': {
          '0%': { display: 'none' },
          '100%': { display: 'flex', transform: 'translateY(75svh)' },
        },
        'menu-out': {
          '0%': { display: 'flex', transform: 'translateY(75svh)' },
          '100%': { display: 'none' },
        },
      },
      animation: {
        'menu-in': 'menu-in 1s ease-in-out',
        'menu-out': 'menu-out 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
