module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Luckiest Guy`
          },
          {
            family: `Titillium Web`,
            variants: [`400`, `400i`]
          }
        ]
      }
    }
  ]
}
