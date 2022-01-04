import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Wrapper id="about" className="g--section g--grey-section">
      <div className="g--section-centered">
        <h1 className="g--section-title">About</h1>
        <p>
          Hi, I'm Denis - UX/UI designer from Minsk. I'm interested in design
          and everything connected with it.
        </p>
        <p>
          I'm studying at courses "Web and mobile design interfaces" in
          IT-Academy.
        </p>
        <p>Ready to implement excellent projects with wonderful people.</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  p {
    max-width: 27rem;
    margin: 0 auto 1.5rem;
  }
`

export default About
