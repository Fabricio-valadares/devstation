import styled from "styled-components";

export const Main = styled.div`
  width: 90%;
  height: 100%;

  margin: 3vh auto;

  background-color: var(--dark-primary);

  border-radius: 8px;
  box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1000px) {
    width: 100%;
  }
`;
