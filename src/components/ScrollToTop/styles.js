import styled from "styled-components";

export const Up = styled.div`
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  cursor: pointer;
  z-index: 100;

  @media only Screen and (max-width: 48em) {
    display: none;
  }
  
  img {
    width: 3rem;
    height: 3rem;
    background-color: var(--white);
    border-radius: 50%;
    border: 2px solid var(--white);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`