import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--dark-primary);
  display: flex;
  justify-content: center;

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const DivImage = styled.section`
  width: 40%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 770px) {
    height: 43%;
  }
`;

export const DivForm = styled.section`
  width: 30%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1040px) {
    margin-left: 100px;
  }

  @media (max-width: 770px) {
    margin-left: 0;
    height: 50%;
  }
`;

export const Image = styled.img`
  width: 440px;
  height: 440px;

  @media (max-width: 1040px) {
    width: 340px;
    height: 340px;
  }

  @media (max-width: 770px) {
    width: 240px;
    height: 240px;
  }
`;
