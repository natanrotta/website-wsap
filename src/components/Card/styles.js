import styled from "styled-components";

export const CARD = styled.div`
  background-color: var(--nav2);
  color: var(--white);
  height: calc(8rem + 12vw);
  width: calc(9rem + 12vw);
  border-radius: 20px;
  margin-top: calc(5rem + 12vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.div`
  width: 40%;
  height: 40%;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: relative;
  left: 20%;
  bottom: 30%;
  transform: translate(-50%);
  border-radius: 50%;
  filter: drop-shadow(0px -3px 3px var(--nav2));
`

export const Text = styled.h4`
  padding: 0 calc(1rem + 1vw);
  font-size: calc(0.6rem + 0.5vw);
  text-align: center;
`

export const Name = styled.h3`
  color: var(--pink);
  padding-top: 1rem;
  font-size: calc(0.5rem + 1vw);
`