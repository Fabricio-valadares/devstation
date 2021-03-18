import styled from "styled-components";

export const Main = styled.div`
  width: 90%;
  height: 100%;
  @media (max-width: 899px) {
    margin: 3vh auto;
  }

  background-color: var(--dark-primary);

  border-radius: 8px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1000px) {
    width: 100%;
  }
`;
