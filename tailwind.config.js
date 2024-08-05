const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkmode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        sm: '30px',
        lg: '55px'
      }
    },
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1320px'
      },
      spacing: {
        '5%': '5%',
        '7%': '7%',
        '10%': '10%',
        '15%': '15%',
        '20%': '20%',
        '25%': '25%',
        '30%': '30%',
        '35%': '35%',
        '40%': '40%',
        '45%': '45%',
        '50%': '50%',
        '55%': '55%',
        '60%': '60%',
        '65%': '65%',
        '70%': '70%',
        '75%': '75%',
        '80%': '80%',
        '85%': '85%',
        '90%': '90%',
        '95%': '95%'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' }
        },
        heartBeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.01)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.03)' },
          '70%': { transform: 'scale(1)' }
        },
        heartBeat2: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.2)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.4)' },
          '70%': { transform: 'scale(1)' }
        },
        flipHorizontal: {
          '50%': { transform: 'rotateY(180deg)' }
        },
        flipVertical: {
          '50%': { transform: 'rotateX(180deg)' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        heartBeat: 'heartBeat 1s infinite',
        heartBeat2: 'heartBeat2 1s infinite',
        flipHorizontal: 'flipHorizontal 1s',
        flipVertical: 'flipVertical 1s'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
});
