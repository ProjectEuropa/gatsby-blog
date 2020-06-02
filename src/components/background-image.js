import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
    <StaticQuery
        query={graphql`
        query {
          desktop: file(relativePath: { eq: "earth.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
        render={data => {
            // Set ImageData.
            const imageData = data.desktop.childImageSharp.fluid
            return (
                <BackgroundImage
                id="particles-js"
                    Tag="section"
                    className={className}
                    fluid={imageData}
                >
                    <h2>gatsby-background-image</h2>
                </BackgroundImage>
            )
        }}
    />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: 50% 0%;
  background-repeat: repeat-y;
  background-size: cover;
  position: none;
`

export default StyledBackgroundSection