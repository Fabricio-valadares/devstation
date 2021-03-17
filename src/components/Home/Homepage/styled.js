import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: wrap;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;
  background: linear-gradient(
      180deg,
      var(--dark-primary) 0%,
      var(--dark-primary) 52.34%,
      var(--soft-primary) 100%
    ),
    linear-gradient(0deg, var(--text), var(--text));

  @media (max-width: 1000px) {
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55vw;
  height: 100vh;

  @media (max-width: 789px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;

  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`;

export const DivContent = styled.div`
  width: 395px;
  height: 475px;

  @media (min-width: 1920px) {
    margin-top: -107px;
  }

  @media (max-width: 789px) {
    width: 325px;
  }
`;

export const DivTextPrincipal = styled.div`
  width: 100%;
  padding-top: 40px;

  @media (min-width: 1920px) {
    width: 521px;
  }

  @media (max-width: 390px) {
    font-size: 1.8rem;
    padding: 0 20px;
  }
`;

export const DivButton = styled.div`
  width: 100%;
  height: auto;
`;

export const ContainerImageOne = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 789px) {
    width: 30%;
  }

  @media (max-width: 600px) {
    width: 0;
  }
`;
export const ContainerImagemTwo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 789px) {
    display: none;
  }
`;

export const ImagesA = styled.div`
  width: 160px;
  height: 500px;

  @media (min-width: 1920px) {
    margin-top: -107px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ImagesB = styled.div`
  width: 160px;
  height: 500px;
  margin-left: 20px;

  @media (min-width: 1920px) {
    margin-top: -107px;
  }
`;

export const Logo = styled.div`
  margin-right: 20px;

  @media (max-width: 390px) {
    margin-left: 20px;
  }
`;

export const LogoImage = styled.img`
  width: 75px;
  height: 72px;
  border: none;

  @media (min-width: 1920px) {
    width: 120px;
    height: 120px;
    margin-left: -26px;
  }
`;

export const Title = styled.div`
  width: 48vw;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;

  color: var(--text);

  @media (min-width: 1920px) {
    font-size: 2.7rem;
  }

  @media (max-width: 390px) {
    width: 65vw;
    font-size: 1.8rem;
  }
`;

export const TextPrincipal = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 6vh;

  color: var(--text);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 1920px) {
    font-size: 2.7rem;
    line-height: 1.4;
  }
`;

export const Description = styled.div`
  margin-top: 25px;
  width: 80%;
  height: 7.5vh;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 2.8vh;

  color: var(--text);

  @media (min-width: 1920px) {
    font-size: 1.4rem;
    width: 89%;
  }

  @media (max-width: 390px) {
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  height: 8vh;
  padding: 0 21px;

  background: var(--secondary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: var(--text);
  font-weight: bold;
  font-size: 1rem;
  transition: all 400ms ease-in;

  &:hover {
    background-color: var(--dark-secondary);
    color: pink;
  }

  @media (min-width: 1920px) {
    margin-top: 6vh;
    font-size: 1.3rem;
  }

  @media (max-width: 1920px) {
    margin-top: 6vh;
  }
`;

// imagens A
export const BikeImage = styled.img`
  margin-top: 8px;
  width: 150px;
  height: 150px;
  border: none;
`;

export const RunImage = styled.img`
  margin-top: 11px;
  width: 150px;
  height: 150px;
  border: none;
`;

export const StretchImage = styled.img`
  margin-top: 11px;
  width: 150px;
  height: 150px;
  border: none;
`;

// imagens B
export const WorkoutImage = styled.img`
  margin-left: 0px;
  margin-top: 32px;
  width: 150px;
  height: 150px;
  border: none;
`;

export const YogaImage = styled.img`
  margin-left: 0px;
  margin-top: 10px;
  width: 150px;
  height: 150px;
  border: none;
`;

export const StyleImage = styled.img`
  margin-left: 0px;
  margin-top: 40px;
  width: 150px;
  height: 150px;
  border: none;
`;

export default HomeContainer;
