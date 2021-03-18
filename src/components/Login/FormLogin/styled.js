import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { FiLogIn } from "react-icons/fi";

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
  width: 276px;
  height: 50px;
  border-radius: 8px;
`;

export const RegisterIcon = styled(FiLogIn)`
  color: var(--secondary);
  margin-right: 4px;
`;

export const DivRegister = styled.div`
  display: flex;
  align-items: center;
  padding-top: 7px;
`;

export const PStyle = styled.p`
  color: #fff;
  font-size: 0.9rem;
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
