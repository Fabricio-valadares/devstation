import styled from "styled-components";

export const CardUsers = styled.div`
  background-color: var(--soft-primary);
  color: white;

  display: grid;
  grid-template-columns: 1fr 1fr;

  padding: 1rem;

  font-size: 1.3rem;
  width: 100%;
  height: 25%;

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
  background-color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const UserDiv = styled.div`
  margin: 1rem;
`;

export const UserCardDiv = styled.div`
  display: flex;
  align-items: center;
`;
