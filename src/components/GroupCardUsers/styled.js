import styled from "styled-components";

export const CardUsers = styled.div`
  background-color: var(--soft-primary);
  color: white;

  /* display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between; */

  display: grid;
  grid-template-columns: 1fr 1fr;

  padding-top: 1rem;

  font-size: 1rem;
  width: 100%;
  height: 25%;
  overflow: auto;
  word-break: break-all;
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
