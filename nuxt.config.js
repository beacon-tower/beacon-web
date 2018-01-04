module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'beacon_web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'beacon_web，Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3BEDF4' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   // loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    },
    vendor: ['axios','./assets/js/jquery.min.js']
  },
  css: [
    'reset.css',
    '~assets/fonts/iconfont.css',
    // 项目中的 less 文件
    { src: '~assets/less/main.less', lang: 'less' } // 指定 less
  ],
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  router: {
    // middleware: 'stats'
  }
}
