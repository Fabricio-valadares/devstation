import styled from "styled-components";
import { FaEdit } from "react-icons/fa";

export const Card = styled.div`
  padding-bottom: 4px;
  border-bottom: 1px solid var(--soft-primary);
  /* & + div {
    margin-top: 14px;
  } */
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;

  h4 {
    font-size: 18px;
    font-weight: 500;
    color: var(--text);
  }

  button {
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background-color: transparent;
  }
`;

export const EditIcon = styled(FaEdit)`
  color: var(--secondary);
  font-size: 18px;
`;

export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text);
  margin-bottom: 14px;
  p {
    font-weight: 500;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 14px;
  background-color: var(--soft-primary);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => `${props.progress}%`};
    background-color: ${(props) =>
      props.progress <= 30
        ? "#FF5252"
        : props.progress <= 70
        ? "#FFDA79"
        : "#1DD1A1"};
    border-radius: 14px;
  }
`;
