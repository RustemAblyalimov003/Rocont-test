import { defineConfig } from 'vite'
import path from 'path'
import createSvgSpritePlugin from 'vite-plugin-svg-spriter'

const SVG_FOLDER_PATH = path.resolve(__dirname, 'src/assets/icons')

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    createSvgSpritePlugin({
      svgFolder: SVG_FOLDER_PATH,
      svgSpriteConfig: {
        shape: {
          transform: ['svgo'],
        },
      },
      transformIndexHtmlTag: {
        injectTo: 'body',
      },
    }),
  ],
})