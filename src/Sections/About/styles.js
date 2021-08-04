import styled, { keyframes } from "styled-components";

const move = keyframes`
  0% { transform:translateY(-5px) }
  50% { transform:translateY(10px) translateX(10px) }
  100% { transform:translateY(-5px) }
`

export const AboutSection = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Waves = styled.img`
  width: 100%;
  position: absolute;
  top: -1rem;
`

export const Hand = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;

  @media only Screen and (max-width: 768px) {
    display: none;
  }
`

export const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only Screen and (max-width: 1024px) {
    margin: 3rem calc(5rem + 5vw);
    margin-top: 10rem;
  }

  @media only Screen and (max-width: 768px) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw)
  }
`

export const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
  margin-top: 6rem;
`

export const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: 5px solid var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only Screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;

  @media only Screen and (max-width: 768px) {
    width: 50vw;
    padding-bottom: 0;
  }
`

export const AboutText = styled.div`
  position: relative;
  width: 50%;

  @media only Screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;

  @media only Screen and (max-width: 768px) {
    display: none;
  }
`

export const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
`

export const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: 0.5rem;
  margin-top: 1rem;
`