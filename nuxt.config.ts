// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['pruvious'],

  pruvious: {
    jwt: {
      secretKey: 'REvZgPjfZTvujanPnFuY10Ks1ZBdmUSmQdjDoJBrevS1w1R55Ic6m6LPo8lMecLl'
    }
  }
})