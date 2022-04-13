import styled from 'styled-components'
import navBarData from '../../data/navBarData'
import { useGlobalContext } from '../../context/GlobalContext'
import { Lang } from '../../enums'

export default function NavBar() {
  const {
    state: { lang },
  } = useGlobalContext()

  return (
    <Wrapper>
      <nav className="g--section-centered">
        <ul>
          {navBarData.map((d) => (
            <a href={d.href}>
              <li>{lang === Lang.ENG ? d.titleEng : d.titleRus}</li>
            </a>
          ))}
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
