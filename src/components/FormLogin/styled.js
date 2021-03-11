import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

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
  text-decoration: underline;
  cursor: pointer;
`;

// Styled Material-UI

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "var(--secondary)",
  },
  "root:hover": {
    backgroundColor: "var(--dark-secondary)",
  },
}));
