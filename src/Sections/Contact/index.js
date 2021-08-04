import Facebook from '../../assets/facebook-square-brands.svg'
import LinkedIn from '../../assets/linkedin-brands.svg'
import Twitter from '../../assets/twitter-square-brands.svg'
import Instagram from '../../assets/instagram-square-brands.svg'

import {
  ContactSection,
  Title,
  Icons,
  Form,
  Row
} from './styles'

const Contact = () => {
  return (
    <ContactSection>
      <Title>
        Get in touch
      </Title>
      <Icons>
        <a href="http://facebook.com/">
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="http://linkedin.com/">
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
        <a href="http://twitter.com/">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="http://instagram.com/">
          <img src={Instagram} alt="Instagram" />
        </a>
      </Icons>
      
      <Form>
        <Row>
          <input type="text" name="name" placeholder="Your name"/>
          <input  type="email" name="email" placeholder="Your e-mail"/>
        </Row>
        <textarea
          name="message"
          placeholder="Your message"
          cols="30"
          rows="2"
        >

        </textarea>
        <div style={{margin: "0 auto"}}>
          <button>
            Submit
          </button>
        </div>
      </Form>
    </ContactSection>
  )
}

export default Contact