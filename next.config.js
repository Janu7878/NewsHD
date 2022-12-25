module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: 'https://sx.forty-shades.com', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}
