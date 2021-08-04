import TextBlock from '../../components/TextBlock'
import SvgBlock from '../../components/SvgBlock'

import Tube from '../../assets/3dtube.png'
import Cone from '../../assets/3dtriangle.png'

import { 
  ServiceSection,
  Background,
  Title,
  Line,
  Triangle,
  Content,
  OBJ
} from './styles'

const Services = () => {
  return (
    <ServiceSection id="services">
      <Background>
        <Title>
          What We Do
        </Title>
        <Line />
        <Triangle />
      </Background>

      <Content>
        <TextBlock 
          topic="Design"
          title="We build award winning Designs"
          subText="We help clients to build great desing to attract more customers"
        />
        <OBJ>
          <img src={Tube} alt="Tube"/>
        </OBJ>
        <SvgBlock 
          svg="Design.svg"        
        />
      </Content>

      <Content>
        <TextBlock 
          topic="Develop"
          title="We Develop high quality Web & App"
          subText="we build appropriate solution to develope you website $ app with best tools availables "
        />
        <OBJ>
          <img src={Cone} alt="Tube"/>
        </OBJ>
        <SvgBlock 
          svg="Develope.svg"        
        />
      </Content>

      <Content>
        <TextBlock 
          topic="Support"
          title="We provide support for your digital presence"
          subText="Once you system is online, we will stay on hand to help you use it and provide tech you bisiness"
        />
        <SvgBlock 
          svg="Support.svg"        
        />
      </Content>
    </ServiceSection>
  )
}

export default Services