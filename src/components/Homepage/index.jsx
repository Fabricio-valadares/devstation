import { useHistory } from "react-router-dom";
import logoImage from "../../assets/logo.svg";
import bikeImage from "../../assets/bike.svg";
import runImage from "../../assets/run.svg";
import stretchImage from "../../assets/stretch.svg";
import styleImage from "../../assets/style.svg";
import yogaImage from "../../assets/yoga.svg";
import workoutImage from "../../assets/workout.svg";
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
              <LogoImage src={logoImage} />
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
          </DivTextPrincipal>

          <DivButton>
            <Button onClick={redirectTo}>COMECE A EVOLUIR</Button>
          </DivButton>
        </DivContent>
      </Content>
      <ImagesA>
        <BikeImage src={bikeImage} />
        <RunImage src={runImage} />
        <StretchImage src={stretchImage} />
      </ImagesA>
      <ImagesB>
        <WorkoutImage src={workoutImage} />
        <YogaImage src={yogaImage} />
        <StyleImage src={styleImage} />
      </ImagesB>
    </HomeContainer>
  );
};
export default Homepage;
