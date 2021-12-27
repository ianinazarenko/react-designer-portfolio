import React, { useState } from 'react'
import styled from 'styled-components'
import { RiCloseFill } from 'react-icons/ri'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: 100hv;
  background-color: var(--white);
  z-index: 3;
`

const LinkName = styled.li`
  font-size: 3rem;
  font-weight: 700;
  color: var(--textColor);
  /* transition: all 1s linear; */

  &:active {
    color: var(--textColorLight);
  }
`
const Button = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 2rem;
  right: 1.25rem;
`
const LangToggle = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 2rem;
  right: 1.25rem;
  transform-origin: 100% 0;
  transform: rotate(90deg);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
`
const LangIcon = styled.span`
  color: var(--textColorLight);
  transition: color 300ms ease-out;
  &:hover {
    cursor: pointer;
  }
`

function NavBar() {
  const [isShown, setIsShown] = useState(false)
  const [isEng, setIsEng] = useState(true)

  const activeLang = {
    color: 'var(--textColor)',
  }

  if (isEng) {
  }

  if (!isShown) return null

  return (
    <Wrapper>
      <nav className="g--section">
        <Button>
          <RiCloseFill size={42} />
        </Button>
        <ul>
          <a href="#">
            <LinkName>Home</LinkName>
          </a>
          <a href="#">
            <LinkName>About me</LinkName>
          </a>
          <a href="#">
            <LinkName>Skills</LinkName>
          </a>
          <a href="#">
            <LinkName>Portfolio</LinkName>
          </a>
          <a href="#">
            <LinkName>Contacts</LinkName>
          </a>
        </ul>
        <LangToggle>
          <LangIcon
            style={isEng ? undefined : activeLang}
            onClick={() => setIsEng(false)}
          >
            RUS
          </LangIcon>{' '}
          |{' '}
          <LangIcon
            style={isEng ? activeLang : undefined}
            onClick={() => setIsEng(true)}
          >
            ENG
          </LangIcon>
        </LangToggle>
      </nav>
    </Wrapper>
  )
}

export default NavBar
