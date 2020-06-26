require('dotenv').config({
  path: 'vtex.env',
})

module.exports = {
  siteMetadata: {
    author: 'Emerson Laurentino',
  },
  plugins: [
    require.resolve('gatsby-plugin-netlify'),
    {
      resolve: require.resolve('@vtex/gatsby-theme-vtex'),
      options: {
        title: 'Store Theme - VTEX Base Store',
        description: 'A sample store using the best of Gatsby and VTEX',
        tenant: process.env.GATSBY_VTEX_TENANT,
        environment: process.env.GATSBY_VTEX_ENVIRONMENT,
      },
    },
    require.resolve('gatsby-plugin-loadable-components-ssr'),
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Store Theme - VTEX Base Store',
        short_name: 'Store Theme',
        start_url: '/',
        background_color: '#0a034e',
        theme_color: '#0a034e',
        display: 'minimal-ui',
      },
    },
  ],
}
