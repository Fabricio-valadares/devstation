import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";

export const Main = styled.div`
  width: 100%;
  height: 90%;
  color: var(--text);
  font-size: 1rem;
  padding: 24px;
`;

export const ActivitiesHeader = styled.header`
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

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;

  h4 {
    font-size: 18px;
    font-weight: 500;
    color: var(--text);
  }

  button {
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background-color: transparent;
  }
`;

export const EditIcon = styled(FaEdit)`
  color: var(--secondary);
  font-size: 18px;
`;

export const CardActivities = styled.div`
  overflow-y: auto;
  width: 100%;

  color: var(--text);

  height: 80%;
  @media (min-width: 406px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const WhiteBall = styled.div`
  background-color: var(--text);
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

export const ActivityDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  font-size: 0.8rem;
  figure {
    margin-right: 0.7rem;
  }
  div > h1 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
`;
