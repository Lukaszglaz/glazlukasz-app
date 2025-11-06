import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'body': '#090909',         
        'card': '#121418',         
        
        'primary-text': '#fafafa', 
        'secondary-text': '#c7c7c7', 

        'accent': {
          DEFAULT: '#1cd4e2',      
          hover: '#0ea4ad',        
        },
        
        'blur-overlay': 'rgba(40, 38, 44, 0.8)',
      },
    },
  },
  plugins: [],
}
export default config