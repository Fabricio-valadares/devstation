import styled from "styled-components";

export const Content = styled.div`
  display: block;
  width: 80vw;

  @media (min-width: 1000px) {
    width: 80vw;
    height: 100%;
    background-color: var(--dash-background);
    display: grid;
    align-items: center;
    align-content: center;
    justify-content: center;
    grid-template-columns: 32.5% 62.5%;
    grid-template-rows: 2% 20.6% 12.6% 16.6% 16.6% 16.6% 2%;
    grid-gap: 20px;

    grid-template-areas:
      "A B"
      "HABITS NAMEGROUPS"
      "HABITS GOALSCARD"
      "HABITS GOALSCARD"
      "GRAPHIC ACTIVITIESCARD"
      "GRAPHIC ACTIVITIESCARD"
      "C D";

    div#habits-card {
      grid-area: HABITS;
      width: 100%;
      height: 100%;
    }

    div#graphic-card {
      grid-area: GRAPHIC;
      width: 100%;
      height: 100%;
    }

    div#nameGroup-card {
      grid-area: NAMEGROUPS;
      width: 100%;
      height: 100%;
    }

    div#goals-card {
      grid-area: GOALSCARD;
      width: 100%;
      height: 100%;
    }

    div#activities-card {
      grid-area: ACTIVITIESCARD;
      width: 100%;
      height: 100%;
    }
  }
`;
