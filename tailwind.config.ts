import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'purple-light': '#E5D1FF',
        'purple-half-light': '#C293FF',
        'purple-regular': '#9B56F3',
        'purple-half-dark': '#7F39D9',
        'purple-dark': '#361165',
        'purple-fulldark': '#220629',
        'blue-regular': '#440298'
      },
      screens: {
        'vy-sm': '360px'
      }
    }
  },
  plugins: []
}
export default config
