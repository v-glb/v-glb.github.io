import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  return (
    <div className="footer text-muted text-center">
      <span className="m-auto">
        &copy; {new Date().getFullYear()}. Made with&nbsp;
        <a href="https://www.gatsbyjs.org/">Gatsby</a> &&nbsp;
        <span className="heart">&nbsp;❤&nbsp;</span>
      </span>
    </div>
  )
}
const query = graphql`
  query Author {
    site {
      siteMetadata {
        author
      }
    }
  }
`
