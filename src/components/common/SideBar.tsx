import styled from 'styled-components'
import { RiCloseFill } from 'react-icons/ri'
import { useGlobalContext } from '../../context/GlobalContext'
import { VscThreeBars } from 'react-icons/vsc'
import LangToggle from './LangToggle'

function SideBar() {
  const {
    state: { isSideBarShown },
    toggleSidebar,
  } = useGlobalContext()

  return (
    <>
      {!isSideBarShown && (
        <BarsWrapper>
          <button onClick={toggleSidebar}>
            <VscThreeBars size={42} />
          </button>
        </BarsWrapper>
      )}
      <Wrapper className={isSideBarShown ? 'shown' : ''}>
        <aside className="g--section">
          <button onClick={toggleSidebar}>
            <RiCloseFill size={42} />
          </button>
          <ul>
            <a href="#home" onClick={toggleSidebar}>
              <li>Home</li>
            </a>
            <a href="#about" onClick={toggleSidebar}>
              <li>About me</li>
            </a>
            <a href="#skills" onClick={toggleSidebar}>
              <li>Skills</li>
            </a>
            <a href="#portfolio" onClick={toggleSidebar}>
              <li>Portfolio</li>
            </a>
            <a href="#contacts" onClick={toggleSidebar}>
              <li>Contacts</li>
            </a>
          </ul>
          <LangToggle size="big" />
        </aside>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: 100hv;
  background-color: var(--white);
  transform: translateX(100%);
  transition: var(--transition);
  z-index: 3;

  &.shown {
    transform: translateX(0);
  }

  li {
    font-size: 3rem;
    font-weight: 700;
    color: var(--textColor);
    /* transition: color 100ms linear; */
    &:active {
      color: var(--textColorLight);
    }
  }

  button {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 2rem;
    right: 1.25rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
const BarsWrapper = styled.div`
  position: relative;
  z-index: 3;

  button {
    position: fixed;
    top: 2rem;
    right: 1.5rem;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export default SideBar
