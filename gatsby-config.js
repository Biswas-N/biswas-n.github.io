module.exports = {
  siteMetadata: {
    siteUrl: "https://biswas-n.github.io",
    title: "Biswas Nandamuri",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair Display\:700,700i`,
          `Source Sans Pro\:400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
};
