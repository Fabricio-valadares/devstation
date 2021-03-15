import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const Main = styled.div`
  color: var(--text);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormStyled = styled.form`
  /* padding: 0.5rem */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  div {
    width: 100%;
    text-align: center;
  }
  p {
  }
`;

export const DivFlex = styled.div`
  display: flex;
  margin: 1rem;
  align-items: center;
  justify-content: space-between;
  svg {
    margin-left: 1rem;
    color: red;
    font-size: 30px;
  }
  svg:hover {
    cursor: pointer;
  }
  /* h1 {
    width: 80%;
  } */
`;

export const useStyles = makeStyles((theme) => ({
  textField: {
    width: "276px",
    fontWeight: "bold",
    color: "#dedede",
    margin: "0.4rem 0.4rem",
    backgroundColor: "#30336B",
    borderRadius: theme.shape.borderRadius,
    height: "40px",
    padding: "1rem",
    "&:hover": {
      border: "1px solid black ",
    },
  },
  helper: {
    marginLeft: "0.4rem",
  },
}));
