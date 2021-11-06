module.exports = {
  reactStrictMode: true,
  images: {
    domains: [] // include your images domain if it hosted outside nextjs
  },
  /* Rewrite paths if you need to call from apis outside nextjs to prevent cors */
  async rewrites() {
    /**
     * If you have multiple manifest for different environment
     * i.e: manifest.prod.json, manifest.dev.json, manifest.staging.json, etc
     * you can also rewrite it in here so it point out /manifest.json but read from
     * each different environment by reading your env configuration.
    */
    return [
      /* {
        source: '/graphql', // when we call graphql API
        destination: process.env.GRAPHQL_URL + '*path' // https://backend.com/graphql become https://localhost:3000/graphql
      } */
    ]
  }
}
