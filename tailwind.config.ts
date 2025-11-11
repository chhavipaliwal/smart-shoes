import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' }
        }
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite'
      }
    }
  },
  darkMode: ['class', '[data-theme^="dark-"]'],
  plugins: [
    require('tailwindcss-animate'),
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              '50': '#eef9ef',
              '100': '#d5f0d8',
              '200': '#bde7c1',
              '300': '#a4dfab',
              '400': '#8cd694',
              '500': '#73cd7d',
              '600': '#5fa967',
              '700': '#4b8551',
              '800': '#37613b',
              '900': '#233e26',
              foreground: '#000',
              DEFAULT: '#73cd7d'
            }
          }
        },
        dark: {
          colors: {
            default: {
              '50': '#131315',
              '100': '#1e1e21',
              '200': '#29292e',
              '300': '#34343a',
              '400': '#3f3f46',
              '500': '#616166',
              '600': '#828287',
              '700': '#a4a4a7',
              '800': '#c5c5c8',
              '900': '#e7e7e8',
              foreground: '#fff',
              DEFAULT: '#3f3f46'
            },
            primary: {
              '50': '#002943',
              '100': '#00416a',
              '200': '#005891',
              '300': '#0070b8',
              '400': '#0088df',
              '500': '#2d9de5',
              '600': '#59b2ea',
              '700': '#86c6f0',
              '800': '#b3dbf5',
              '900': '#dff0fb',
              foreground: '#000',
              DEFAULT: '#0088df'
            },
            secondary: {
              '50': '#4d4d4d',
              '100': '#797979',
              '200': '#a6a6a6',
              '300': '#d2d2d2',
              '400': '#ffffff',
              '500': '#ffffff',
              '600': '#ffffff',
              '700': '#ffffff',
              '800': '#ffffff',
              '900': '#ffffff',
              foreground: '#000',
              DEFAULT: '#ffffff'
            },
            success: {
              '50': '#073c1e',
              '100': '#0b5f30',
              '200': '#0f8341',
              '300': '#13a653',
              '400': '#17c964',
              '500': '#40d27f',
              '600': '#68dc9a',
              '700': '#91e5b5',
              '800': '#b9efd1',
              '900': '#e2f8ec',
              foreground: '#000',
              DEFAULT: '#17c964'
            },
            warning: {
              '50': '#4a320b',
              '100': '#744e11',
              '200': '#9f6b17',
              '300': '#ca881e',
              '400': '#f5a524',
              '500': '#f7b54a',
              '600': '#f9c571',
              '700': '#fad497',
              '800': '#fce4bd',
              '900': '#fef4e4',
              foreground: '#000',
              DEFAULT: '#f5a524'
            },
            danger: {
              '50': '#49051d',
              '100': '#73092e',
              '200': '#9e0c3e',
              '300': '#c80f4f',
              '400': '#f31260',
              '500': '#f53b7c',
              '600': '#f76598',
              '700': '#f98eb3',
              '800': '#fbb8cf',
              '900': '#fee1eb',
              foreground: '#000',
              DEFAULT: '#f31260'
            },
            background: '#000000',
            foreground: {
              '50': '#4d4d4d',
              '100': '#797979',
              '200': '#a6a6a6',
              '300': '#d2d2d2',
              '400': '#ffffff',
              '500': '#ffffff',
              '600': '#ffffff',
              '700': '#ffffff',
              '800': '#ffffff',
              '900': '#ffffff',
              foreground: '#000',
              DEFAULT: '#ffffff'
            },
            content1: {
              DEFAULT: '#18181b',
              foreground: '#fff'
            },
            content2: {
              DEFAULT: '#27272a',
              foreground: '#fff'
            },
            content3: {
              DEFAULT: '#3f3f46',
              foreground: '#fff'
            },
            content4: {
              DEFAULT: '#52525b',
              foreground: '#fff'
            },
            focus: '#006FEE',
            overlay: '#ffffff',
            divider: '#ffffff'
          }
        }
      },
      layout: {
        fontSize: {
          tiny: '0.75rem',
          small: '0.875rem',
          medium: '1rem',
          large: '1.125rem'
        },
        lineHeight: {
          tiny: '1rem',
          small: '1.25rem',
          medium: '1.5rem',
          large: '1.75rem'
        },
        radius: {
          small: '0.5rem',
          medium: '0.75rem',
          large: '0.875rem'
        },
        borderWidth: {
          small: '1px',
          medium: '2px',
          large: '3px'
        },
        disabledOpacity: '0.5',
        dividerWeight: '1',
        hoverOpacity: '0.9'
      }
    })
  ]
} satisfies Config;

export default config;
