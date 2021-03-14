import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const Main = styled.div`
  color: var(--text);
  flex-direction: column;
`;

export const useStyles = makeStyles((theme) => ({
  textField: {
    width: "276px",
    margin: "0.4rem 0.4rem",
    backgroundColor: "#fff",
    borderRadius: theme.shape.borderRadius,
    height: "56px",
    padding: "1rem",
    "&:hover": {
      border: "1px solid black ",
    },
  },
  helper: {
    marginLeft: "0.4rem",
  },
}));
