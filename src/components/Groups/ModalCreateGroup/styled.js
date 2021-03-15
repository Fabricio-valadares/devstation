import styled from "styled-components";

export const DivButtonAdd = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  display: flex;
  color: var(--text);
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  background-color: #130f40;
  box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.09),
    6px 6px 16px rgba(0, 0, 0, 0.2);
  transition: all 200ms ease-in;
  &:hover {
    background-color: rgba(19, 15, 64, 0.5);
  }

  &:active {
    box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.09),
      6px 6px 16px rgba(0, 0, 0, 0.2),
      inset -6px -6px 16px rgba(255, 255, 255, 0.09),
      inset 6px 6px 16px rgba(0, 0, 0, 0.2);
  }
`;
