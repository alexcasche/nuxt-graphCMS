const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  serverMiddleware: ['~/api/index.js', '~/api/logger'],

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: [
      require('postcss-import')(),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      require('precss')(),
      require('postcss-fontpath')(),
      require('postcss-at2x')(),
      require('postcss-flexbox')(),
      require('postcss-custom-media')(),
      require('postcss-custom-properties')(),
      require('postcss-utilities')(),
      require('postcss-short')(),
      require('postcss-automath')()
      // require("postcss-zindex")(),
    ],
    extend(config, ctx) {}
  }
}
