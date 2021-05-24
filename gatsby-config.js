module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: ["gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
      resolve: `gatsby-plugin-manifest`,
      options:{
        icon: "src/assets/icon/icon.png",
      },

    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-lingui',
        short_name: 'starter',
        start_url: '/gatsby-i18n/gatsby-starter-i18next/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`,
      },
    },
    {
      resolve: '@wapps/gatsby-plugin-i18next',
      options: {
        availableLngs: ['en', 'el'],
        fallbackLng: 'el',
        i18nextOptions: {
          debug: false,
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-ffmpeg"],
  
}