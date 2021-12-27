import { useState } from 'react'
import styled from 'styled-components'
import DesignerPortrait from '../assets/images/designer.jpg'
import { VscThreeBars } from 'react-icons/vsc'

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`
const Title = styled.h1`
  line-height: 1.3;
  font-size: 3rem;
`
const Description = styled.p`
  margin: 1.57rem 0;
`
const MenuButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 1.25rem;
  background-color: transparent;
  border: none;

  @media (min-width: 768px) {
    display: none;
  }
`

function Home() {
  const [showMenu, setShowMenu] = useState(false)
  const [areBarsShown, setAreBarsShown] = useState(true)

  return (
    <Wrapper className="g--section">
      {areBarsShown ? (
        <MenuButton onClick={() => setShowMenu(true)}>
          <VscThreeBars size={42} />
        </MenuButton>
      ) : null}
      <Title>
        GOAT <br /> Designer
      </Title>
      <Description>
        Best UI | UX Designer <br />
        on Earth
      </Description>
      <div>
        <img src={DesignerPortrait} alt="Designer portrait" />
      </div>
    </Wrapper>
  )
}

export default Home
