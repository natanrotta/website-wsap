import wave from '../../assets/waves.svg'
import hand from '../../assets/hand.svg'
import rocket from '../../assets/rocketImage.png'
import human from '../../assets/human.svg'

import {
  AboutSection,
  Waves,
  Hand,
  Main,
  Title,
  CurvedLine,
  Content,
  Rocket,
  AboutText,
  Human,
  Text,
  Circle
} from './styles'

const About = () => {
  return (
    <AboutSection>
      <Waves src={wave} alt="Wave" />
      <Hand>
        <img src={hand} alt="Hand" />
      </Hand>

      <Main>
        <div>
          <Title>About Us</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={rocket} alt="Rocket" />
          </Rocket>

          <AboutText>
            <Human>
              <img src={human} alt="Human" />
            </Human>
            <Text>
              We help put customers to tell about themselves, to grow and stand out in an increasingly competitive
            </Text>
            <div>
              <Circle color="var(--purple)"/>
              <Circle color="var(--pink)"/>
              <Circle color="var(--black)"/>
            </div>
          </AboutText>
        </Content>
      </Main>
      
    </AboutSection>

  )
}

export default About