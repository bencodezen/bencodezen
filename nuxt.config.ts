// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/theme.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "styles/_settings.scss";'
        }
      }
    }
  }
})
