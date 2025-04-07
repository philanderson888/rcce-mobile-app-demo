import { defineConfig } from '@vite-pwa/assets-generator/config';

export default defineConfig({
  preset: {
    transparent: {
      sizes: [64, 192, 512],
      padding: 0
    },
    maskable: {
      sizes: [512],
      padding: 0.1,
      resizeOptions: {
        background: '#ffffff'
      }
    },
    apple: {
      sizes: [180],
      padding: 0
    }
  },
  images: ['public/church-logo.png'],
  manifest: {
    name: 'RCCE Church App',
    short_name: 'RCCE App',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone'
  }
});