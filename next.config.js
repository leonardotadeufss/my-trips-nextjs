// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  images: {
    domains: ['media.graphassets.com']
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
