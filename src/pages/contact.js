import React from "react"
import { PageLayout, PageTitle } from "../components"
import { SEO } from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from "react-bootstrap/Container"

export default () => {
  return (
    <PageLayout>
      <SEO title="Contact" />
      <PageTitle title="Contact"></PageTitle>
      <a href="../../v-glb-pubkey.asc" target="_blank" download>
        <FontAwesomeIcon
          style={{ fontSize: "2rem" }}
          icon={["fas", "file-download"]}
          className="icons file"
        />
      </a>
      <Container>
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">Download key</p>
          <p className="i-5 mt-4 pt-2">
            If you want to get in contact with me, feel free to grab my PGP-Key
            and send me an email. Download the key either directly here or get
            it from the&nbsp;
            <a
              href="https://keyserver.ubuntu.com/pks/lookup?search=v.glb%40posteo.de&fingerprint=on&op=index"
              target="_blank"
              rel="noopener noreferrer"
            >
              keyserver.
            </a>
          </p>
          <br />
          <p className="i-5">
            <h5>
              <b>v (dot) glb (at) posteo (dot) de.</b>
            </h5>
          </p>
        </article>
      </Container>
    </PageLayout>
  )
}