import React from 'react'
import styled from 'styled-components'
import { Ps, Ai, Ae, Figma } from '../assets/icons'
import FilledStar from '../assets/icons/Star.svg'
import OutlinedStar from '../assets/icons/Star-1.svg'

function Skills() {
  return (
    <Wrapper id="skills" className="g--section">
      <div className="g--section-centered">
        <h1 className="g--section-title">Skills</h1>
        <p className="description">I have experience in programms below:</p>
        <div className="prog-container">
          <div className="prog-item">
            <div className="img-container">
              <img src={Ps} alt="Photoshop" />
            </div>
            <p>
              Adobe <br /> Photoshop
            </p>
            <div className="skill-level">
              <img src={FilledStar} alt="star" />
              <img src={FilledStar} alt="star" />
              <img src={FilledStar} alt="star" />
              <img src={FilledStar} alt="star" />
              <img src={OutlinedStar} alt="star" />
            </div>
          </div>
          <div className="prog-item">
            <div className="img-container">
              <img src={Ai} alt="Illustrator" />
            </div>
            <p>
              Adobe <br /> Illustrator
            </p>
            <div className="skill-level">
              <img src={FilledStar} alt="star" />
              <img src={FilledStar} alt="star" />
              <img src={FilledStar} alt="star" />
              <img src={OutlinedStar} alt="star" />
              <img src={OutlinedStar} alt="star" />
            </div>
          </div>
          <div className="prog-item">
            <div className="img-container">
              <img src={Ae} alt="After Effects" />
            </div>
            <p>
              Adobe <br /> After Effects
            </p>
            <div className="skill-level">
              <img src={FilledStar} alt="star" />
              <img src={FilledStar} alt="star" />
              <img src={FilledStar} alt="star" />
              <img src={FilledStar} alt="star" />
              <img src={OutlinedStar} alt="star" />
            </div>
          </div>
          <div className="prog-item figma">
            <div className="img-container ">
              <img src={Figma} alt="Figma" />
            </div>
            <p>Figma</p>
            <div className="skill-level">
              <img src={FilledStar} alt="star" />
              <img src={FilledStar} alt="star" />
              <img src={FilledStar} alt="star" />
              <img src={FilledStar} alt="star" />
              <img src={OutlinedStar} alt="star" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .description {
    margin: 0 0 3rem;
  }
  .prog-container {
    display: block;
  }

  .prog-item {
    width: 8rem;
    margin: 0 auto;
    margin-bottom: 4rem;
  }

  .img-container {
    max-width: 7rem;
    max-height: 7rem;
    margin: 1rem auto;
  }

  .figma {
    .img-container img {
      object-fit: contain;
      height: 7rem;
    }
  }

  .skill-level {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 0.5rem;
  }

  @media (min-width: 768px) {
    .prog-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    .figma {
      p {
        margin-bottom: 3.25rem;
      }
    }
  }
`

export default Skills
