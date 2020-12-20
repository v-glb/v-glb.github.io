import React from "react"
import { PageLayout, PageTitle } from "../components"
import { SEO } from "../utils"
import Container from "react-bootstrap/Container"

export default () => {
  return (
    <PageLayout>
      <SEO title="Contact" />
      <PageTitle title="Contact"></PageTitle>
      <Container className="mt-5 pt-3" fluid>
        <h2>Contact me</h2>
      </Container>
    </PageLayout>
  )
}