import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { FaRegEye } from "react-icons/fa";

export const Container = styled.div`
  overflow-y: auto;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 96px;

  @media (max-width: 890px) {
    padding-top: 0;
  }
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

export const TitleMobile = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 38px;
  }
`;

export const DivIcon = styled.div`
  width: 30%;
  display: flex;
  align-items: center;

  & > svg {
    width: 2rem;
    height: 2rem;
  }

  & > div#ContainerCard {
    background-color: red;
  }

  @media (min-width: 600px) {
    width: 10%;
    flex-direction: center;
    & svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const FaRegEyeStyled = styled(FaRegEye)`
  cursor: "pointer";
  color: "#fff";
`;

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    backgroundColor: "var(--middle-primary)",
    borderRadius: "3px ",
    display: "flex",
    justifyContent: "space-between",
    "& > div#Icon": {},
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
