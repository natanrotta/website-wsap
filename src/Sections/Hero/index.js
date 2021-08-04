import Pink from '../../assets/blobPink.png'
import White from '../../assets/blobWhite.png'
import Purple from '../../assets/blobPurple.png'
import Arrow from '../../assets/ArrowRight.svg'
import Mobile from '../../assets/mobile.svg'

import { 
  HeroSection,
  Blobs,
  PinkBlob,
  WhiteBlob,
  PurpleBlob,
  MainContent,
  LeftBlock,
  Topic,
  Circle,
  Title,
  SubText,
  CTA,
  MobileSvg
} from './styles'

const Hero = () => {
  return (
    <HeroSection id="home">
      <Blobs>
        <PinkBlob>
          <img src={Pink} alt="Pink Blob" width="400" height="400" />
        </PinkBlob>

        <WhiteBlob>
          <img src={White} alt="White Blob" width="400" height="400" />
        </WhiteBlob>

        <PurpleBlob>
          <img src={Purple} alt="Purple Blob" width="400" height="400" />
        </PurpleBlob>
      </Blobs>

      <MainContent>
        <LeftBlock>
          <Topic>
            <Circle /> <span>We Build Web</span>
          </Topic>
          <Title>
            Transforming your digital presence
          </Title>
          <SubText> we help fast growing companies build award winning websites</SubText>
          <CTA>
            Get in touch &nbsp; <img src={Arrow} alt="CTA" width="400" height="400" />
          </CTA>
        </LeftBlock>
        <MobileSvg src={Mobile} alt="Mobile Image" width="400" height="400" />
      </MainContent>

    </HeroSection>
  )
}

export default Hero