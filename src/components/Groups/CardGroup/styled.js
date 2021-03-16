// import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

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
        width: "3rem",
        height: "3rem",
      },
      "@media(min-width: 600px)": {
        width: "10%",
        "& svg": {
          width: "2rem",
          height: "2rem",
        },
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
