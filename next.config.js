module.exports = {

  async redirects() {
    return [
      {
        source: '/posts/:slug*',
        destination: 'https://sxx.forty-shades.com/:slug*',
        permanent: false
      }
    ];
  }
};
