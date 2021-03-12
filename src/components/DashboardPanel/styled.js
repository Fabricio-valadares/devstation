import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--dash-background);
  display: grid;
  align-items: center;
  align-content: center;
  justify-content: center;
  grid-template-columns: 50% 40%;
  grid-template-rows: 40% 40%;
  grid-gap: 40px;

  grid-template-areas:
    "H G"
    "A G";

  div#habits-card {
    grid-area: H;
    width: 100%;
    height: 100%;
  }

  div#group-card {
    grid-area: G;
    width: 100%;
    height: 100%;
  }

  div#activities-card {
    grid-area: A;
    width: 100%;
    height: 100%;
  }
`;
