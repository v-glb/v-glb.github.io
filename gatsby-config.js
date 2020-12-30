/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `V Portfolio`,
    author: `V`,
    firstName: `Vadim`,
    lastName: ``,
    description: `V's personal site`,
    occupation: `Software Developer`,
    keywords: [`Vadim`, `V`, `Personal`, `Blog`, `Contact`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: false,
    designations: [
      `Programmer`,
      `Book Worm`,
      `Coffee Lover`,
      `FOSS Enthusiast`,
    ],
    readingList: [
      {
        title: `The Pragmatic Programmer`,
        author: `Andy Hunt, Dave Thomas`,
        link: `https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer?from_search=true&from_srp=true&qid=BmE6pIDfFE&rank=1`,
      },
      {
        title: `The Star Diaries`,
        author: `Stanislaw Lem`,
        link: `https://www.goodreads.com/book/show/889418.The_Star_Diaries?from_search=true&from_srp=true&qid=VLYhqWdkNd&rank=1`,
      },
      {
        title: `Neuromancer`,
        author: `William Gibson`,
        link: `https://www.goodreads.com/book/show/6088007-neuromancer?from_search=true&from_srp=true&qid=9HNtUlUimF&rank=1`,
      },
    ],
    musicList: [
      {
        title: `Recon`,
        author: `Access To Arasaka`,
        link: `https://tympanikaudio.bandcamp.com/track/recon`,
      },
      {
        title: `Breeze Bay`,
        author: `Hello Meteor`,
        link: `https://hellometeor.bandcamp.com/track/breeze-bay`,
      },
      {
        title: `Baby Blu`,
        author: `Nilufer Yanya`,
        link: `https://niluferyanya.bandcamp.com/track/baby-blu`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `V's Personal Site`,
        short_name: `V`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/v-avatar.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
