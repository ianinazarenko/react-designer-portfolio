import styled from 'styled-components'
import DesignerPortrait from '../assets/images/designer.jpg'
import LangToggle from '../components/common/LangToggle'

export default function Home() {
  return (
    <Wrapper id="home" className="g--section">
      <div className="g--section-centered container">
        <header>
          <h1>
            GOAT <br /> Designer
          </h1>
          <p>
            Best UI | UX Designer <br />
            on Earth
          </p>
          <div className="lang-container">
            <LangToggle size="small" />
          </div>
        </header>
        <div className="image">
          <img src={DesignerPortrait} alt="Designer portrait" />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;

  div.container {
    overflow: hidden;
    height: 100%;
  }

  h1 {
    line-height: 1.3;
    font-size: 3rem;
    text-align: left;
  }

  .lang-container {
    display: none;
  }

  p {
    margin: 1.57rem 0;
    text-align: left;
  }

  @media (min-width: 768px) {
    height: 100%;

    header {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: end;
      justify-items: space-between;
      margin-bottom: 2rem;

      .lang-container {
        position: relative;
        display: block;
        margin-bottom: -0.3rem;
      }
    }

    h1 {
      font-size: 2.5rem;
    }

    p {
      margin: 0 0 0.25rem 0;
      justify-self: center;
    }

    span {
      justify-self: end;
    }

    .image {
      max-width: 960px;
      height: 400px;
      overflow: hidden;
    }

    img {
      position: relative;
      top: -50%;
      left: 0;
    }
  }
`
