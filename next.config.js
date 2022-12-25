module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: 'https://www.google.com',
        permanent: false,
        basePath: false
      },
    ]
  },
};
