import { useState } from 'react'
import logo from '../../assets/logo.svg'

import { 
  Headers,
  Logo,
  Nav,
  Button,
  HamburgerBtn,
  MobileMenu
} from './styles'

const Header = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <Headers>
      <Logo>
        <img 
          src={logo}
          alt="CodeBucks"
        />
        <h3>CodeBucks</h3>
      </Logo>     
      <Nav>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">
          <Button>Contact Us</Button>
        </a>
      </Nav>
      <HamburgerBtn onClick={() => handleClick()} clicked={click}>
        <span />
      </HamburgerBtn>
      <MobileMenu clicked={click}>
        <a 
          href="#home"
          onClick={() => handleClick()}
        >
          Home
        </a>
        <a 
          href="#about"
          onClick={() => handleClick()}
        >
          About Us
        </a>
        <a 
          href="#services"
          onClick={() => handleClick()}
        >
          Services
        </a>
        <a 
          href="#contact"
          onClick={() => handleClick()}
        >
          <Button>Contact Us</Button>
        </a>
      </MobileMenu>
    </Headers>
  )
}

export default Header