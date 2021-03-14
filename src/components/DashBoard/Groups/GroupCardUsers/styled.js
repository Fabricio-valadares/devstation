import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  font-size: 1.3vw;

  color: var(--text);

  justify-content: space-between;
  padding: 1vw;
`;

export const DivFlex = styled.div`
  display: grid;
  grid-template-columns: 4vw 20vw;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const HeaderStyled = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  h1 {
    font-weight: 600;
  }
`;

export const CardUsers = styled.div`
  background-color: var(--soft-primary);

  padding: 1rem;

  font-size: 1.3vw;
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
