// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: ['~/components/icons', '~/components'],
  css: ['~/assets/css/theme.css'],
  modules: ['@nuxt/content', '@nuxt/image-edge'],

  image: {
    staticFilename: '[publicPath]/images/[name]-[hash][ext]'
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "styles/_settings.scss";'
        }
      }
    }
  },

  devtools: {
    enabled: true
  }
})
