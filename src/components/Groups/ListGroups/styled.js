import styled from "styled-components";

export const Content = styled.div`
  width: 90%;

  margin: 0 auto;

  background-color: #30336b;

  div#container {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
  }

  div#searchGroup {
    width: 95%;
    margin: 15px 0;
    display: flex;
  }

  input#search {
    padding: 18px 0 18px 18px;
    border-radius: 5px 0 0 5px;
    background-color: var(--middle-primary);
    width: 85%;
    color: #fff;

    ::-webkit-input-placeholder {
      color: #eee;
    }
  }

  div#buttonSearch {
    background-color: var(--secondary);
    border-radius: 0 5px 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    cursor: pointer;
  }

  div#group-users {
    background-color: #130f40;
    border-radius: 8px;
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
  }

  @media (min-width: 900px) {
    width: 80%;
    height: 100%;
    background-color: #30336b;
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
    }

    div#containerButton {
      display: flex;
      justify-content: space-between;
      width: 90px;
      margin-left: 3px;
    }

    div#group-users {
      grid-area: D;
      width: 100%;
      height: 100%;
      padding-bottom: 20px;
    }
  }
`;

export const DivButtonAdd = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  display: flex;
  color: var(--text);
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  background-color: #130f40;
  box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.09),
    6px 6px 16px rgba(0, 0, 0, 0.2);
  transition: all 200ms ease-in;
  &:hover {
    background-color: rgba(19, 15, 64, 0.5);
  }

  &:active {
    box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.09),
      6px 6px 16px rgba(0, 0, 0, 0.2),
      inset -6px -6px 16px rgba(255, 255, 255, 0.09),
      inset 6px 6px 16px rgba(0, 0, 0, 0.2);
  }
`;
