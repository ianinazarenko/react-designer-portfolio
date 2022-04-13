import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/GlobalContext'
import { Lang } from '../enums'

function Portfolio() {
  const {
    state: { lang },
  } = useGlobalContext()

  return (
    <Wrapper id="portfolio" className="g--section g--grey-section">
      <div className="g--section-centered">
        <h1 className="g--section-title">{lang === Lang.ENG ? 'Portfolio' : 'Портфолио'}</h1>
        <div className="works-container">
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <div className="work-item">
              <div className="img-container">
                <img src="assets/images/new_collection_2k.png" alt="Reebok" />
              </div>
              <span>
                {lang === Lang.ENG
                  ? 'Online fashion store – Homepage'
                  : 'Онлайн-магазин одежды – Главная страница'}
              </span>
            </div>
          </a>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <div className="work-item">
              <div className="img-container">
                <img src="assets/images/reebok_web_2k.png" alt="Reebok" />
              </div>
              <span>{lang === Lang.ENG ? 'Reebok Store – concept' : 'Магазин Reebok – концепт'}</span>
            </div>
          </a>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <div className="work-item">
              <div className="img-container">
                <img src="assets/images/braun_2k.png" alt="Reebok" />
              </div>
              <span>
                {lang === Lang.ENG ? 'Braun landing page – concept' : 'Концепт лэндинг – страницы для Braun'}
              </span>
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
