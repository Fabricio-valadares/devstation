import styled from "styled-components";

export const ContainerPages = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    var(--dark-primary),
    var(--middle-primary),
    var(--soft-primary)
  );
`;

export const Container = styled.main`
  max-width: 801px;
  min-width: 698px;
  height: 440px;
  background-color: var(--dark-primary);
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  justify-content: center;

  @media (max-width: 770px) {
    min-height: 88vh;
    min-width: 90vw;
    padding: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const DivImage = styled.section`
  width: 50%;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 770px) {
    height: 43%;
  }
`;

export const DivForm = styled.section`
  width: 50%;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 770px) {
    height: 50%;
  }
`;

export const Image = styled.img`
  width: 250px;

  @media (max-width: 1040px) {
    width: 340px;
    height: 340px;
  }

  @media (max-width: 770px) {
    width: 240px;
    height: 240px;
  }
`;
