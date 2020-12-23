import React from "react"
import { PageLayout, PageTitle, TechStack } from "../components"
import { Container } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title}>
      <a target="_blank" rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )

  const {
    firstName,
    occupation,
    readingList,
    musicList,
    designations,
    unemployed,
  } = data.site.siteMetadata

  const bookLinks = readingList.map(book => MediaLink(book))
  const musicLinks = musicList.map(band => MediaLink(band))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Hello there! My name is <b>{`${firstName}`}</b>. I'm a&nbsp;
            <b>{occupation}</b> and former <b>Sysadmin</b> taking my first steps
            into programming, always curious to learn something new and broaden
            my horizons. Right now I’m in the middle of an apprenticeship for
            software development and working on front-end projects mostly. Take
            a look at the tools and technologies below to get insight of my
            current skills and interests.
          </p>
          <br />
          <TechStack />
          <br />
          <p className="i-5">
            In my spare time, I like to tinker with technology, write prose
            every now and then, socialize with friends over a cup of coffee and
            go to the cinema. (Well, pre covid 19 times - I really miss it!) I'm
            also into Open Source, IT security and data privacy. That's the
            reason why you don't see a cookie banner or anything like that on
            this page: No Google Analytics, no tracking or whatsoever.
          </p>
          <p className="i-5">
            And last but not least: I'm really passionate about books and music!
          </p>
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I'm <b>currently looking for new opportunities</b>! If you're
                  interested, let's get in <Link to="/contact">touch!</Link>
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-4">
            Here is what's currently on my reading list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{bookLinks}</ul>
          <h5 className="watch-list-title pt-4">
            And the current favourites on my playlist:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>
            {musicLinks}
          </ul>
          <br />
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        firstName
        designations
        readingList {
          title
          author
          link
        }
        musicList {
          title
          author
          link
        }
      }
    }
  }
`
