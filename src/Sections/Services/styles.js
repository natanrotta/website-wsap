import styled from "styled-components";

export const ServiceSection = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20rem;
  position: relative;
  color: var(--white);
`
export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 100%;
  background-color: var(--black);
  background-size: auto 100vh;
  z-index: -1;
`
export const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
  margin-top: 1rem;
  position: relative;

  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    border-bottom: 2px solid var(--pink);
    transform: translate(-50%);
  }
`
export const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`
export const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`

export const Content = styled.div`
  display: flex;
  margin: 3rem 10rem;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media only Screen and (max-width: 48em) {
    display: block;

    &:last-child {
      margin-bottom: 2rem;
    }
  }
`
export const OBJ = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 80%;
  right: 35%;
  width: 20vw;

  @media only Screen and (max-width: 48rem) {
    opacity: 0.5;
  }
`