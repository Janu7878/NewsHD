module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://stackoverflow.com/posts/66662033',
        permanent: false,
        basePath: false
      },
    ]
  },
};
