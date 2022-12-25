module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.google.com',
        permanent: true,
      },
    ]
  },
};
