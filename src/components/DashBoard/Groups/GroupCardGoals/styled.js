import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  color: var(--text);
  font-size: 1.2vw;

  h1 {
    font-size: 1.5vw;
    margin: 1vw;
  }
`;

export const CardGoals = styled.div`
  width: 100%;
  height: 80%;

  overflow-y: auto;
`;

export const GoalDiv = styled.div`
  text-align: left;
  margin: 2vw 0.5rem;
  div {
    display: flex;
    widows: 100%;
    justify-content: space-between;
    svg:hover {
      cursor: pointer;
    }
  }
  p {
    margin-bottom: 1vw;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 14px;
  background-color: var(--soft-primary);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => `${props.progress}%`};
    background-color: ${(props) =>
      props.progress <= 30
        ? "#FF5252"
        : props.progress <= 70
        ? "#FFDA79"
        : "#1DD1A1"};
    border-radius: 14px;
  }
`;
