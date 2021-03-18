import { useHistory } from "react-router-dom";

import {
  HomeContainer,
  Content,
  ImagesA,
  ImagesB,
  Title,
  TextPrincipal,
  Description,
  Logo,
  LogoImage,
  BikeImage,
  StretchImage,
  RunImage,
  StyleImage,
  YogaImage,
  WorkoutImage,
  Button,
  DivTitle,
  DivTextPrincipal,
  DivContent,
  DivButton,
  ContainerImageOne,
  ContainerImagemTwo,
} from "./styled";

const Homepage = () => {
  const history = useHistory();

  const redirectTo = () => {
    history.push("/login");
  };

  return (
    <HomeContainer>
      <Content>
        <DivContent>
          <DivTitle>
            <Logo>
              <LogoImage src="./assets/favicon.png" draggable="false" />
            </Logo>
            <Title>Dev Station</Title>
          </DivTitle>

          <DivTextPrincipal>
            <TextPrincipal>
              Conectamos pessoas com os mesmos interesses que você
            </TextPrincipal>

            <Description>
              Entre na plataforma, defina um conjunto de hábitos, encontre uma
              equipe e realizem suas conquistas
            </Description>
            <DivButton>
              <Button onClick={redirectTo}>COMECE A EVOLUIR</Button>
            </DivButton>
          </DivTextPrincipal>
        </DivContent>
      </Content>
      <ContainerImageOne>
        <ImagesA>
          <BikeImage src="./assets/design-notes.svg" draggable="false" />
          <RunImage src="./assets/design-tools.svg" draggable="false" />
          <StretchImage src="./assets/dev-activity.svg" draggable="false" />
        </ImagesA>
      </ContainerImageOne>
      <ContainerImagemTwo>
        <ImagesB>
          <WorkoutImage src="./assets/version-control.svg" draggable="false" />
          <YogaImage src="./assets/server.svg" draggable="false" />
          <StyleImage src="./assets/kanban.svg" draggable="false" />
        </ImagesB>
      </ContainerImagemTwo>
    </HomeContainer>
  );
};
export default Homepage;
