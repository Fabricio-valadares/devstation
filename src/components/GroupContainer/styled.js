import styled from "styled-components";

export const CardFlex = styled.div`
  display: flex;
`;

export const WhiteBall = styled.div`
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const CardSolo = styled.div`
  border-radius: 5%;
  display: flex;
  background-color: var(--soft-primary);
  max-height: 40%;
  min-width: 40%;
  margin: 1rem;
  overflow: auto;
  color: white;
`;

export const H1Styled = styled.h1`
  color: var(--secondary);
`;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  span {
    font-weight: 400;
  }
  h3 {
    color: white;
  }
`;

export const Main = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px;
  /* overflow-y: scroll; */
`;
