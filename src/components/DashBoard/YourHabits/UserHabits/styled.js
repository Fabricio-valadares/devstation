import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

export const UserCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow-y: scroll;

  /* ::-webkit-scrollbar {
    display: none;
  } */
`;

export const PersonalHabits = styled.div`
  width: 60%;
  height: 100%;
`;

export const HabitsHeader = styled.header`
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

export const Habits = styled.div`
  width: 100%;
`;

export const HabitsGraph = styled.div``;
