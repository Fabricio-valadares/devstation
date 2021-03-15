import styled from "styled-components";

export const Content = styled.div`
  width: 80%;
  height: 100%;
  background-color: var(--dash-background);
  display: grid;
  align-items: center;
  align-content: center;
  justify-content: center;
  grid-template-columns: 95%;
  grid-template-rows: 5% 8% 82% 5%;

  grid-template-areas:
    "H"
    "A"
    "D"
    "S";

  div#container {
    grid-area: A;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  div#containerButton {
    display: flex;
    justify-content: space-between;
    width: 90px;
    margin-left: 3px;
  }

  div#buttonOne {
    width: 36px;
    height: 35px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--dark-primary);
    cursor: pointer;

    &:hover {
      background-color: var(--middle-primary);
    }
  }

  div#buttonTwo {
    width: 36px;
    height: 35px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--dark-primary);
    cursor: pointer;

    &:hover {
      background-color: var(--middle-primary);
    }
  }

  div#buttonAdd {
    margin-right: 3px;
    width: 40px;
    border-radius: 50%;
    height: 40px;
    background: var(--dark-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text);
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      background-color: var(--middle-primary);
    }
  }
  div#group-users {
    grid-area: D;
    width: 100%;
    height: 100%;
    background-color: var(--dark-primary);
    border-radius: 8px;
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    padding-bottom: 20px;
  }
`;
