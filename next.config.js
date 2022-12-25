module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://sx.forty-shades.com',
        permanent: false,
        basePath: false
      },
    ]
  },
};
