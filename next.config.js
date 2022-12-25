module.exports = {
  async redirects() {
    return [
      {
        source: ':slug*',
        destination: 'https://sx.forty-shades.com',
        permanent: false,
        basePath: false
      },
    ]
  },
};
