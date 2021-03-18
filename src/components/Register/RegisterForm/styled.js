import { makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
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
    color: var(--secondary);
    font-weight: bold;
  }

  & button {
    width: 96%;
  }

  @media (max-width: 800px) {
    margin: 0.5rem;
    width: 100%;
    height: 95%;
    & h1 {
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 400px) {
    margin: 0.2rem;
    width: 100vw;
    height: 100%;
    & h1 {
      margin-top: 0.5rem;
    }
  }
`;

export const StyledSpan = styled.span`
  margin-top: 2rem;
  margin-left: 0.3rem;
  text-align: left;

  color: white;

  display: flex;
  align-items: center;

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
    width: 90%;
    height: 95%;
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
    borderRadius: "8px",
    height: "56px",
    padding: "1rem",
    "@media(max-width: 400px)": {
      width: "250px",
    },
    "&:hover": {
      border: "1px solid black ",
    },
  },
  helper: {
    marginLeft: "0.4rem",
  },
}));

export const ArrowIcon = styled(FiArrowLeft)`
  color: var(--secondary);
  margin-right: 6px;
`;

export const ButtonDiv = styled.div`
  width: 276px;
  height: 56px;
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0.4rem;
  margin-top: 0.6rem;
  background-color: var(--secondary);
  @media (max-width: 400px) {
    width: 250px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  color: var(--text);
  background-color: var(--secondary);
  font-weight: bold;
  margin: 0;
  margin-top: 0;
  padding: 0;
`;
