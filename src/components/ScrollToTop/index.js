import arrow from '../../assets/arrow-up.svg'

import {
  Up
} from './styles'

const ScrollToTop = () => {

  const scrollToTop = () => {
    const element = document.getElementById("home")
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    })
  }

  return (
    <Up onClick={() => scrollToTop()}>
      <img src={arrow} alt='To top' />
    </Up>
  )
}

export default ScrollToTop