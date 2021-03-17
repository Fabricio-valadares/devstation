import { makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { BsCode } from "react-icons/bs";

export const BsCodeStyled = styled(BsCode)`
  animation: rotationIcon 2s linear infinite;

  @keyframes rotationIcon {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const FormContainer = styled.div`
  flex-direction: column;
  min-width: fit-content;
  max-width: 30%;
  text-align: center;

  & h1 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    color: white;
  }

  & button {
    margin-top: 1rem;
    width: 96%;
  }

  @media (max-width: 800px) {
    margin: 0.5rem;
    width: 90%;
    height: 90%;
    & h1 {
      margin-top: 0.5rem;
    }
    & button {
      margin-top: 0.2rem;
      width: 95%;
    }
  }

  @media (max-width: 400px) {
    margin: 0.2rem;
    width: 100vw;
    height: 100%;
    & h1 {
      margin-top: 0.5rem;
    }
    & button {
      margin-top: 0.2rem;
    }
  }
`;

export const StyledSpan = styled.span`
  margin-top: 1rem;
  margin-left: 0.3rem;
  text-align: left;

  color: white;

  display: block;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const RegisterCard = styled.form`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  background-color: var(--dark-primary);
  width: 100%;
  max-width: 801px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    width: 80%;
    height: 90%;
  }

  @media (max-width: 400px) {
    flex-direction: column-reverse;
    width: 70%;
    height: 80%;
  }
`;

export const Img = styled.img`
  width: 400px;
  height: 440px;
  -webkit-user-drag: none;

  @media (max-width: 800px) {
    width: 210px;
    height: 269px;
  }
`;

export const useStyles = makeStyles((theme) => ({
  textField: {
    width: "276px",
    margin: "0.4rem 0.4rem",
    backgroundColor: "#fff",
    borderRadius: theme.shape.borderRadius,
    height: "56px",
    padding: "1rem",
    "@media(max-width: 400px)": {
      width: "180px",
    },
    "&:hover": {
      border: "1px solid black ",
    },
  },
  helper: {
    marginLeft: "0.4rem",
  },
}));
