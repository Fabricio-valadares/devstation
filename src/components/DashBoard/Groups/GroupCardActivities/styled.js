import styled from "styled-components";

export const CardActivities = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: var(--text);
  width: 100%;
  height: 100%;
  margin: 1vw;

  overflow-y: auto;
`;

export const WhiteBall = styled.div`
  background-color: var(--text);
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const ActivityDiv = styled.div`
  display: flex;
  margin: 2rem 0.5rem;
  font-size: 1rem;
  figure {
    margin-right: 0.7rem;
  }
  div > h1 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
`;
