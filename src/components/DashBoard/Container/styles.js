import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--dark-primary);
  border-radius: 8px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.09),
    6px 6px 16px rgba(0, 0, 0, 0.2); */

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 80%;
    height: 50%;

    margin: 3vh auto;
  }
`;
