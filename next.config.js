module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: false,
        basePath: false
      },
    ]
  },
};
