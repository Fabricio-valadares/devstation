import { FaEdit } from "react-icons/fa";
import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;

  color: var(--text);

  justify-content: space-around;
  padding: 2vw;

  div {
    width: 100%;
  }

  div h3#category,
  div h3#description {
    font-size: 1.1rem;
    font-weight: bold;
  }
  div h3#description span,
  div h3#category span {
    font-size: 1rem;
    font-weight: normal;
  }
`;

export const Margin = styled.div`
  margin-bottom: 1rem;
`;

export const GroupName = styled.div`
  display: flex;
  align-items: center;
  h4 {
    color: var(--text);
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;

  h4 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 500;
    color: var(--secondary);
  }
`;

export const EditIcon = styled(FaEdit)`
  color: var(--secondary);
  font-size: 18px;
`;

export const CardUsers = styled.div`
  background-color: var(--soft-primary);

  padding: 1rem;

  font-size: 1rem;
  width: 50%;
  height: 100%;

  transition: 0.3s;
  border-radius: 3%;

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

export const WhiteBall = styled.div`
  background-color: var(--text);
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media (max-width: 1600px) {
  } ;
`;

export const UserDiv = styled.div`
  margin: 1rem;
`;

export const UserCardDiv = styled.div`
  display: flex;
  align-items: center;
`;
