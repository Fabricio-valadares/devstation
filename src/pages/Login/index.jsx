import { Container, DivImage, DivForm, Image, ContainerPages } from "./styled";
import FormLogin from "../../components/Login/FormLogin";

const Login = () => {
  return (
    <ContainerPages>
      <Container>
        <DivImage>
          <Image src={"./assets/login3.svg"} />
        </DivImage>
        <DivForm>
          <FormLogin />
        </DivForm>
      </Container>
    </ContainerPages>
  );
};

export default Login;
