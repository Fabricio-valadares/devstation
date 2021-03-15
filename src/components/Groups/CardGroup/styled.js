// import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    backgroundColor: "#d8d5d5",
    borderRadius: "3px ",
    display: "flex",
    justifyContent: "space-between",
    "& > div#Icon": {
      width: "10%",
      display: "flex",
      alignItems: "center",
    },
  },
  container: {
    width: "95%",
    borderBottom: "none",
  },
  heading: {
    padding: "10px",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    "& > img": {
      marginRight: "20px",
      borderRadius: "50%",
    },
    "& > span": {
      margin: "0 20px",
      fontWeight: "bold",
    },
    "& > span#nameGroups": {
      fontWeight: 500,
    },
  },
}));
