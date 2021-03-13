import styled from "styled-components";

export const CardActivities = styled.div`
  background-color: var(--soft-primary);
  color: white;
  font-size: 1vw;
  width: 50%;
  height: 47vh;
  margin-top: 1rem;
  margin-left: 1rem;
  text-align: center;
  border-radius: 3%;

  h1 {
    font-size: 1.1rem;
  }

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

export const Flex = -styled.div`
  display: flex;
`;

export const WhiteBall = styled.div`
  background-color: white;
  width: 20px;
  height: 20px;
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
