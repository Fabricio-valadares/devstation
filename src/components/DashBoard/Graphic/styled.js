import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    width: 100%;
    text-align: left;
    font-weight: bold;
    font-size: 24px;
    color: var(--secondary);
    margin-bottom: 24px;
  }
`;
