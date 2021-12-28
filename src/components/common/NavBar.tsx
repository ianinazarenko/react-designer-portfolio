import styled from 'styled-components'

export default function NavBar() {
  return (
    <Wrapper>
      <nav className="g--section-centered">
        <ul>
          <li onClick={() => window.scrollTo(0, 0)}>Home</li>

          <a href="#about">
            <li>About me</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#portfolio">
            <li>Portfolio</li>
          </a>
          <a href="#contacts">
            <li>Contacts</li>
          </a>
        </ul>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    padding: 0 1.25rem;
    display: block;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--white);
    z-index: 3;

    nav {
      padding: 1rem 0;
      border-bottom: 1px solid var(--black);
    }

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      li:first-child {
        cursor: pointer;
      }
    }

    li {
      font-weight: 700;
      color: var(--textColorLight);
      transition: var(--transition);

      &:hover {
        color: var(--textColor);
      }
    }
  }
`
