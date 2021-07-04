import styled from 'styled-components'

import HeroSection from '../Sections/Hero'
import About from '../Sections/About'
import Services from '../Sections/Services'
import Testimonials from '../Sections/Testimonials'
import Contact from '../Sections/Contact'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </Container>
  )
}

export default Home