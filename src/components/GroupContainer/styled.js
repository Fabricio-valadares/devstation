import styled from "styled-components";

export const CardFlex = styled.div`
  display: flex;
  max-height: 30rem;
  margin: 1rem;
  overflow: auto;
`;

export const CardSolo = styled.div`
  border-radius: 5%;
  display: flex;
  background-color: var(--soft-primary);
  max-height: 30rem;
  min-width: 40%;
  margin: 1rem;
  overflow: auto;
`;

export const H1Styled = styled.h1`
  color: var(--secondary);
`;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
