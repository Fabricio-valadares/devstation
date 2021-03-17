import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { BsCode } from "react-icons/bs";

export const BsCodeStyled = styled(BsCode)`
  animation: rotationIcon 2s linear infinite;

  @keyframes rotationIcon {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  min-width: 276px;
  height: 16em;
  justify-content: space-around;
`;

export const ButtonStyled = styled(Button)`
  margin-top: 20px;
`;

export const DivRegister = styled.div`
  padding-top: 7px;
`;

export const PStyle = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-left: 3px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// Styled Material-UI

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    width: "276px;",
    height: "50px",
    padding: "10px",
  },
  error: {
    color: "#fff",
  },
}));
