import React from 'react'
import styled from 'styled-components'
import {
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
  FaDribbble,
} from 'react-icons/fa'

function Contacts() {
  const pGreyText = {
    color: 'var(--textColorLight)',
  }
  const pMoreMargin = {
    margin: '1rem 0 1.5rem',
  }

  return (
    <Wrapper id="contacts" className="g--section g--section-centered">
      <h1>Contacts</h1>
      <p style={pMoreMargin}>
        Want to know more or just chat? <br /> You are welcome!
      </p>
      <button>Send message</button>
      <div>
        <a href="https://www.linkedin.com" rel="noreferrer" target={'_blank'}>
          <FaLinkedinIn size={'2.5rem'} />
        </a>
        <a href="https://www.instagram.com" rel="noreferrer" target={'_blank'}>
          <FaInstagram size={'2.5rem'} />
        </a>
        <a href="https://www.behance.net" rel="noreferrer" target={'_blank'}>
          <FaBehance size={'2.5rem'} />
        </a>
        <a href="https://www.dribbble.com" rel="noreferrer" target={'_blank'}>
          <FaDribbble size={'2.5rem'} />
        </a>
      </div>
      <p style={pGreyText}>
        Like me on <br /> LinkedIn, Instagram, Behance, Dribble
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  button {
    background-color: var(--black);
    color: var(--white);
    padding: 0.75rem 4rem;
    border: none;
    border-radius: 10rem;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1rem;
  }

  div {
    margin: 2.5rem auto;
    width: 16rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    line-height: 1;
  }
`

export default Contacts
