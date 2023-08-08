// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
import pxtoviewport from 'postcss-px-to-viewport';
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@vueuse/nuxt', 'nuxt-icon', '@element-plus/nuxt'],
  css: ['assets/css/theme.css', 'assets/css/normalize.css', 'assets/css/common.css'],
  app: {
    baseURL: '/blog/'
  },
  experimental: {
    configSchema: false
  },
  elementPlus: {
    // 禁止自动导入 icon, 使用 nuxt-icon 来导入图标
    icon: false
  },
  content: {
    highlight: {
      theme: 'dark-plus'
    },
    defaultLocale: 'zh-Hans',
    markdown: {
      anchorLinks: {
        exclude: []
      }
    }
  },
  imports: {
    dirs: ['hooks']
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          // 对 rpx 单位进行转化为 vw,其中 750rpx 相当于 100vw
          pxtoviewport({
            unitToConvert: 'rpx',
            viewportWidth: 750,
            include: [/\/src\//, /\/components\//, /\/pages\//, /\/assets\//],
            minPixelValue: 1
          })
        ]
      },
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/css/variable.scss";'
        }
      }
    }
  }
});
