module.exports = {

  async redirects() {
    return [
      {
        source: '/about',
        destination: 'https://google.com/',
        permanent: false
      }
    ];
  }
};
