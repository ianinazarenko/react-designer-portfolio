import React from 'react'
import styled from 'styled-components'
import aboutData from '../data/aboutData'
import { useGlobalContext } from '../context/GlobalContext'
import { Lang } from '../enums'

function About() {
  const { state } = useGlobalContext()

  return (
    <Wrapper id="about" className="g--section g--grey-section">
      <div className="g--section-centered">
        <h1 className="g--section-title">
          {state.lang === Lang.ENG ? 'About' : 'Обо мне'}
        </h1>
        {state.lang === Lang.ENG
          ? aboutData.textEng.map((t) => <p>{t}</p>)
          : aboutData.textRus.map((t) => <p>{t}</p>)}
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
