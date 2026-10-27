/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#000000',
        'deep-teal': '#02090A',
        'dark-forest': '#061A1C',
        forest: '#102620',
        'dark-border': '#1E2C31',
        'neon-green': '#36F4A4',
        aloe: '#C1FBD4',
        pistachio: '#D4F9E0',
        'shade-30': '#D4D4D8',
        'muted-text': '#A1A1AA',
        'shade-50': '#71717A',
        'shade-60': '#52525B',
        'shade-70': '#3F3F46',
      },
      boxShadow: {
        'shopify-card': '0 0 0 1px #1E2C31, 0 2px 4px rgba(0,0,0,0.4), 0 8px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'shopify-card-hover': '0 0 0 1px #36F4A4, 0 4px 12px rgba(0,0,0,0.5), 0 12px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
        'shopify-focus': '0 0 0 2px #36F4A4',
      },
      borderRadius: {
        pill: '9999px',
      }
    },
  },
  plugins: [],
}
