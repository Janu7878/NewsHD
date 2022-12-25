module.exports = {

  async redirects() {
    return [
      {
        source: '/posts/:slug',
        destination: 'https://sx.forty-shades.com/:slug',
        basePath: false,
        permanent: false
      },
    ]
  },
};
