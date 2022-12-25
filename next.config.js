module.exports = {
  async redirects() {
    return [
      {
        source: '/:slug*',
        destination: 'https://sx.forty-shades.com/:slug*', // Matched parameters can be used in the destination
        permanent: false,
        basePath: false
      },
    ]
  },
};
