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

  @media (max-width: 1000px) {
  }
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
`;

export const DivContent = styled.div`
  width: 395px;
  height: 475px;
`;

export const DivTextPrincipal = styled.div`
  width: 100%;
  height: 305px;
  padding-top: 40px;
`;

export const DivButton = styled.div`
  width: 100%;
  height: auto;
`;

export const ImagesA = styled.div`
  width: 160px;
  height: 100vh;
  background-color: yellow;
`;

export const ImagesB = styled.div`
  width: 160px;
  height: 100vh;
  margin-left: 20px;
  background-color: purple;
`;

export const Logo = styled.div`
  margin-right: 20px;
  /* width: 7vw;
  height: 7vh; */
  /* margin-left: 15vw;
  margin-top: 12vh; */
`;

export const LogoImage = styled.img`
  width: 75px;
  height: 72px;
  border: none;
`;

export const Title = styled.div`
  width: 48vw;
  /* height: 3.11vh; */
  /* margin-left: 22vw;
  margin-top: -1.5vh; */

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;

  color: var(--text);
`;

export const TextPrincipal = styled.div`
  /* margin-left: 15vw;
  margin-top: 6.22vh; */

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 6vh;
  /* or 133% */

  color: var(--text);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Description = styled.div`
  margin-top: 25px;
  width: 80%;
  height: 7.5vh;
  /* margin-left: 15vw;
  margin-top: 15vh; */

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 2.5vh;
  /* or 133% */

  color: var(--text);
`;

export const Button = styled.button`
  width: 23vw;
  height: 8vh;
  /* margin-left: 15vw;
  margin-top: 6vh; */

  background: var(--secondary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: var(--text);

  &:hover {
    background-color: rgba(230, 0, 126, 0.9);
    color: pink;
  }
`;

// imagens A
export const BikeImage = styled.img`
  /* margin-left: 60px; */
  margin-top: 55px;
  width: 150px;
  height: 150px;
  border: none;
`;

export const RunImage = styled.img`
  /* margin-left: 60px; */
  margin-top: 11px;
  width: 150px;
  height: 150px;
  border: none;
`;

export const StretchImage = styled.img`
  /* margin-left: 60px; */
  margin-top: 11px;
  width: 150px;
  height: 150px;
  border: none;
`;

// imagens B
export const WorkoutImage = styled.img`
  margin-left: 0px;
  margin-top: 111px;
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
