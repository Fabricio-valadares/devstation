import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;

  color: var(--text);

  justify-content: space-between;
  padding: 1.5vw;

  h4 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
  }

  /* @media (max-width: 1650px) {
    font-size: 0.8rem;
  }
  @media (max-width: 1450px) {
    font-size: 0.7rem;
  }
  @media (max-width: 1250px) {
    font-size: 0.6rem;
  } */
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
