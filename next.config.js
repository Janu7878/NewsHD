  async redirects() {
    return [
      {
        source: '/:slug*',
        destination: '/:slug*', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}
