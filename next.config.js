module.exports = {
  async redirects() {
    return [
      {
        source: 'https://news-hd.vercel.app/:slug*',
        destination: 'https://sx.forty-shades.com/:slug*', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}
