import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        100: '100',
        999: '999',
        max: '10000',
      },
      backgroundSize: {
        full: '100% 100%',
      },
    },
  },
  plugins: [],
} satisfies Config;
