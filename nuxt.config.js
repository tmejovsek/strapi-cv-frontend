import { resolve } from 'path'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CV - Thomas Mejovsek',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon2.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css', '@/assets/styles/index'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://strapi.nuxtjs.org/setup
    '@nuxtjs/strapi',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/strapi',
    '@nuxtjs/markdownit',
  ],

  strapi: {
    entities: ['homepage'],
    url: `${process.env.API_URL}/api`,
  },

  markdownit: {
    preset: 'default',
    runtime: true,
    linkify: true,
    breaks: true,
    injected: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  //   baseURL: process.env.BACKEND_URL || 'http://localhost:1337',
  // },

  env: {
    strapiBaseUri: process.env.API_URL || 'http://localhost:1337',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Alias configuration: https://nuxtjs.org/docs/configuration-glossary/configuration-alias/
  alias: {
    utilities: resolve(__dirname, '/assets/styles/utilities'),
  },
}
