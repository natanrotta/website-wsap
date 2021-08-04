import Slider from 'react-slick'
import Card from '../../components/Card'

import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'

import { Section, Title, Carousal } from './styles'


const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Section id="testimonials">
      <Title>
        Few good words about us!
      </Title>

      <Carousal>
        <Slider {...settings}>
          <Card 
            name="Natan"
            text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks."
            image="avatar-1"
          />
           <Card 
            name="Júlio"
            text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks."
            image="avatar-2"
          />
           <Card 
            name="Ivan"
            text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks."
            image="avatar-3"
          />
           <Card 
            name="Marcos"
            text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks."
            image="avatar-4"
          />
        </Slider>
      </Carousal>
    </Section>
  )
}

export default Testimonials