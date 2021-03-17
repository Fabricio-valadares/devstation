import { useHistory } from "react-router-dom";
import logoImage from "../../../assets/logo.svg";
import designNotes from "../../../assets/design-notes.svg";
import designTools from "../../../assets/design-tools.svg";
import devWork from "../../../assets/dev-activity.svg";
import kanban from "../../../assets/kanban.svg";
import server from "../../../assets/server.svg";
import versionControl from "../../../assets/version-control.svg";
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
              <LogoImage src={logoImage} draggable="false" />
            </Logo>
            <Title>Generic Name</Title>
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
          <BikeImage src={designNotes} draggable="false" />
          <RunImage src={designTools} draggable="false" />
          <StretchImage src={devWork} draggable="false" />
        </ImagesA>
      </ContainerImageOne>
      <ContainerImagemTwo>
        <ImagesB>
          <WorkoutImage src={versionControl} draggable="false" />
          <YogaImage src={server} draggable="false" />
          <StyleImage src={kanban} draggable="false" />
        </ImagesB>
      </ContainerImagemTwo>
    </HomeContainer>
  );
};
export default Homepage;
