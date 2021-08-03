import {
  RightBlock
} from './styles'

const SvgBlock = ({ svg }) => {
  const SvgIcon = require(`../../assets/${svg}`).default
  return (
    <RightBlock>
      <img src={SvgIcon} alt="Services" />;
    </RightBlock>
  )
}

export default SvgBlock