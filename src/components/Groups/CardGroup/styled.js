import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const Container = styled.div`
  overflow-y: auto;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
`;

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    backgroundColor: "var(--middle-primary)",
    borderRadius: "3px ",
    display: "flex",
    justifyContent: "space-between",
    "& > div#Icon": {
      width: "30%",
      display: "flex",
      alignItems: "center",

      "& svg": {
        width: "2rem",
        height: "2rem",
      },
      "@media(min-width: 600px)": {
        width: "10%",
        "& svg": {
          width: "1.5rem",
          height: "1.5rem",
        },
      },
      "& > div#ContainerCard": {
        backgroundColor: "red",
      },
    },
  },
  container: {
    width: "95%",
    borderBottom: "none",
  },
  heading: {
    flexDirection: "column",
    padding: "10px",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    "& > img": {
      marginRight: "20px",
      borderRadius: "50%",
    },
    "@media(min-width: 600px)": {
      flexDirection: "row",
      "& > span": {
        margin: "0 20px",
        fontWeight: "bold",
      },
      "& > span#nameGroups": {
        fontWeight: 500,
      },
    },
  },
}));
