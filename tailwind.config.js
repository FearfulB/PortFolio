module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Vérifie que ce chemin est correct
  ],
  theme: {
    extend: {
      backdropBlur: {
        '3xl': 'blur(32px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
