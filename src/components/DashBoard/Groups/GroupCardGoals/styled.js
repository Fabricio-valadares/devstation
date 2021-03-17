import styled from "styled-components";

import { FiPlus, FiInfo, FiBarChart } from "react-icons/fi";
import { HiOutlineFire } from "react-icons/hi";

export const Main = styled.div`
  width: 100%;
  height: 90%;
  color: var(--text);
  font-size: 1rem;
  padding: 24px;
`;

export const GoalsHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;

  h3 {
    font-size: 24px;
    color: var(--secondary);
    font-weight: bold;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--secondary);
    border-radius: 50%;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);
    transition: all 400ms ease-in;

    &:hover {
      background-color: var(--dark-secondary);
    }
  }
`;

export const PlusIcon = styled(FiPlus)`
  color: var(--text);
  font-size: 18px;
`;

export const CardGoals = styled.div`
  width: 100%;
  height: 80%;

  overflow-y: auto;
`;

export const GoalDiv = styled.div`
  text-align: left;
  margin: 1vw 0;
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
    display: flex;
    align-items: center;
  }
`;

export const InfoIcon = styled(FiInfo)`
  color: #dff9fb;
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const BarIcon = styled(FiBarChart)`
  color: #f72585;
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const FireIcon = styled(HiOutlineFire)`
  color: #f9ca24;
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const ProgressBox = styled.div`
  display: flex;
  align-items: center;
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
