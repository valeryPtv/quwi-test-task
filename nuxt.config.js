module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'quwi-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  css: ['~/assets/style/index.sass'],

  axios: {
    baseURL: 'https://api.quwi.com/v2/'
  },

  plugins: [{ src: '~/plugins/localStorage.js', ssr: false }],

  router: {
    middleware: ['authLogged']
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'token' },
          user: false,
          logout: false
        }
      }
    },
    localStorage: false,
    cookie: {
      prefix: 'auth'
    }
  }
}

