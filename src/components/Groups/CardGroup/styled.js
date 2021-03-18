import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    backgroundColor: "var(--middle-primary)",
    padding: "4px 8px",
    borderRadius: "8px ",
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
    },
  },
  container: {
    width: "95%",
    borderBottom: "none",
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,

    "& span#groupImage": {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: "#130F40",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    "& span#groupImage > svg": {
      color: "#F72585",
      fontSize: "24px",
    },

    "& div#groupInfo": {
      display: "flex",
      flexDirection: "column",
    },
    "& > img": {
      marginRight: "20px",
      borderRadius: "50%",
    },
    "@media(min-width: 600px)": {
      flexDirection: "row",
      "& > span": {
        margin: "0 20px",
      },
      "& > span#nameGroups": {
        fontWeight: 500,
      },
    },
  },
}));
