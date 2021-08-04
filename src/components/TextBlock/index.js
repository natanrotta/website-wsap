import { 
  LeftBlock,
  Topic,
  Circle,
  Title,
  SubText,
} from './styles'

const TextBlock = ({ topic, title, subText, children }) => {
  return (
    <LeftBlock>
      <Topic>
        <Circle /> <span>{topic}</span>
      </Topic>
      <Title>
        {title}
      </Title>
      <SubText>{subText}</SubText>
      {children}
  </LeftBlock>
  )
}

export default TextBlock