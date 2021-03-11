import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const FormContainer = styled.div`
  flex-direction: column;
  max-width: 30%;
  text-align: center;
  & h1 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    color: white;
  }
  & button {
    margin-top: 1rem;
    width: 100%;
  }
`;

export const StyledSpan = styled.span`
  margin-top: 1rem;
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
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 440px;
  height: 440px;
  -webkit-user-drag: none;
`;

export const useStyles = makeStyles((theme) => ({
  textField: {
    margin: "0.4rem 0",
    backgroundColor: "#fff",
    borderRadius: theme.shape.borderRadius,
    height: "5vh",
    padding: "1rem",
    "&:hover": {
      border: "1px solid black ",
    },
  },
}));
