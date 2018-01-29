module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '烽火台',
    meta: [
      { name: 'keywords', content: '烽火台,dapp,asch'},
      { name: 'description', content: '国内第一家dapp应用'},
      { name: 'renderer', content: 'webkit'},
      { name: 'author', content: '烽火台'},
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge,chrome=1' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
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
    ** 扩展webpack配置
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   // loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
       // config.devServer
      }
    },
    vendor: ['axios','./assets/js/jquery.min.js','promise-polyfill','babel-polyfill']
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
