import styled from "styled-components";

export const Register = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--soft-primary);
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  flex-direction: column;
  max-width: 30%;
  margin: 0 auto;
  text-align: center;
  & h1 {
    color: white;
  }
  & button {
    margin-top: 1rem;
    width: 93%;
  }
`;

export const RegisterCard = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  background-color: var(--dark-primary);
  width: 80vw;
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
`;

export const DivImg = styled.div`
  background-image: url("./assets/register.svg");
  background-size: 400px 400px;
  background-position: center;
  background-repeat: no-repeat;
  width: 440px;
  height: 440px;
`;
