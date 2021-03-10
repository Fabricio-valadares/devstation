import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

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
  height: 13em;
  justify-content: space-around;
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
