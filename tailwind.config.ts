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
        // All images below are for testing purposes only, in accordance with https://www.pexels.com/ licences, and should be deleted once appropriate images are available.
        'test-background': "url('/test.jpg')",
        'test-background2': "url('/test2.jpg')",
        'test-background3': "url('/test3.jpg')",
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
        'menu-in': 'menu-in 0.3s ease-in-out',
        'menu-out': 'menu-out 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
