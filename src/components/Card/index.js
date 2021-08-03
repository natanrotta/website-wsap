import {
  CARD,
  Image,
  Text,
  Name
} from './styles'

const Card = ({name, text, image}) => {
  const Avatar = require(`../../assets/${image}.jpg`).default
  return (
    <CARD>
      <Image img={Avatar} />
      <Text>
        {text}
      </Text>
      <Name>
        {name}
      </Name>
    </CARD>
  )
}

export default Card