import React from 'react'
import styled from 'styled-components'

function Portfolio() {
  return (
    <Wrapper id="portfolio" className="g--section g--grey-section">
      <div className="g--section-centered">
        <h1 className="g--section-title">Portfolio</h1>
        <div className="works-container">
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <div className="work-item">
              <div className="img-container">
                <img src="images/new_collection_2k.png" alt="Reebok" />
              </div>
              <span>Online fashion store - Homepage</span>
            </div>
          </a>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <div className="work-item">
              <div className="img-container">
                <img src="images/reebok_web_2k.png" alt="Reebok" />
              </div>
              <span>Reebok Store - concept</span>
            </div>
          </a>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <div className="work-item">
              <div className="img-container">
                <img src="images/braun_2k.png" alt="Reebok" />
              </div>
              <span>Braun landing page - concept</span>
            </div>
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .work-item {
    margin-bottom: 3.5rem;

    span {
      text-decoration: underline;
    }
  }
  .img-container {
    margin-bottom: 1.5rem;
    box-shadow: 0 0 1.75rem 0.25rem rgba(0, 0, 0, 0.1);
  }
`

export default Portfolio
