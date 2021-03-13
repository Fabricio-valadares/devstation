import styled from "styled-components";

export const CardGoals = styled.div`
  background-color: var(--soft-primary);
  color: white;
  font-size: 1vw;
  width: 50%;
  margin-top: 1rem;
  height: 47vh;
  text-align: center;
  border-radius: 3%;
  h1 {
    font-size: 1.2rem;
  }
  overflow-y: auto;
  ::-webkit-scrollbar-track {
    background-color: var(--soft-primary);
  }
  ::-webkit-scrollbar {
    width: 8px;
    background: var(--middle-primary);
  }
  ::-webkit-scrollbar-thumb {
    background: #a0a0a0;
    border-radius: 5px;
  }
`;

export const GoalDiv = styled.div`
  min-height: 5vh;
  margin: 2rem 0.5rem;
  text-align: left;
  font-size: 1rem;
  p {
    margin: 0.5rem 0;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 14px;
  background-color: var(--dark-primary);
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
