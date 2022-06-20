import axios from 'axios'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'マスキングテープマニア',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://unpkg.com/modern-css-reset/dist/reset.min.css' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Zen+Maru+Gothic:wght@400;500;700&display=swap' ,defer: true},
      { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.1/dist/aos.css' },
      { rel: 'javascript', href: 'https://unpkg.com/aos@2.3.1/dist/aos.js' ,defer: true},
      // { rel: 'javascript', href: '~/assets/js/script.js' }
    ],
    css:[
      '~assets/css/style.css'
    ],
    script: [
      // { src:  'js/script.js'
      //   },
        {
          async: false,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-ZDSYBMRL1W'
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-ZDSYBMRL1W');`,
        }
      ],
      __dangerouslyDisableSanitizers: ['script'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/aos', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  env: {
    nodeEnv: process.env.NODE_ENV
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "nuxt-microcms-module",
    '@nuxtjs/google-analytics'
  ],
  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.GET_API_KEY,
    },
    mode: process.env.nodeEnv === "production" ? "server" : "all",
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // 'nuxt-webfontloader',
    '@nuxtjs/axios',
    '@nuxtjs/date-fns',
    '@aceforth/nuxt-optimized-images'
  ],

  // webfontloader: {
  //   google: {
  //     families: ['Lato:wght@400;700&family=Zen+Maru+Gothic:wght@400;500;700&display=swap'],
  //   },
  // },
  optimizedImages: {
    optimizeImages: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    quiet: false,

    publicPath: '/static/',
    extend(config, ctx) {}
  },
  // target: 'static',
  target: 'server',
  ssr: true,
  
  // generate: {
  //   async routes() {
  //     const pages = await axios
  //       .get('https://kazuki0323.microcms.io/api/v1/maste?limit=100', {
  //         headers: { 'X-MICROCMS-API-KEY': process.env.GET_API_KEY }
  //       })
  //       .then((res) =>
  //         res.data.contents.map((content) => ({
  //           route: `items/${content.id}`,
  //           payload: content
  //         }))
  //       )
  //     return pages
  //   }
  // }
}
