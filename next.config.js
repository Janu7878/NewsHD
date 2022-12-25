module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://sx.forty-shades.com', // Matched parameters can be used in the destination
        permanent: false,
        basePath: false
      },
    ]
  },
};
