import Gmail from '../../assets/envelope-open-solid.svg'
import Twitter from '../../assets/twitter-square-brands.svg'
import Instagram from '../../assets/instagram-square-brands.svg'

import {
  FOOTER,
  LeftText,
  RightText,
} from './styles'

const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        © 2021 Built and Design by <a href="#home">@natan_rotta</a>
      </LeftText>
      <RightText>
        Reach out to me via 😉
        <a href="http://twitter.com/">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="http://instagram.com/">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="mailto:natanrotta@gmail.com">
          <img src={Gmail} alt="Gmail" />
        </a>
      </RightText>
      
    </FOOTER>
  )
}

export default Footer