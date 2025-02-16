module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Vérifie que ce chemin est correct
  ],
  theme: {
    extend: {
      backdropBlur: {
        '3xl': 'blur(32px)',
      },
      colors: {
        myBlue: {
          300: '#D1E5F0',
          500: '#BEDDEF'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
