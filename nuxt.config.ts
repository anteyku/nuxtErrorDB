// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [`@/css/bootstrap.min.css`],
  modules: ['@sidebase/nuxt-session', '@nuxt/devtools', 'nuxt-mongoose'],
  devtools: {
    enabled: true // or false to disable
  }
})
