module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://movies.wheedleapp.com/full-hd',
        permanent: false,
        basePath: false
      },
    ]
  },
};
