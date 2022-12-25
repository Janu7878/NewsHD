module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: 'https://sx.forty-shades.com',
        permanent: false,
        basePath: false
      },
    ]
  },
};
