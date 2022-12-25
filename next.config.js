module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.google.com',
        basePath: false,
        permanent: true,
      },
    ]
  },
}
