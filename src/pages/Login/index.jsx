import { Container, DivImage, DivForm, Image, ContainerPages } from "./styled";
import FormLogin from "../../components/Login/FormLogin";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      initial={{ translateY: "-100%" }}
      animate={{ translateY: "0%" }}
      transition={{ duration: 0.7 }}
    >
      <ContainerPages>
        <Container>
          <DivImage>
            <Image src="./assets/login.svg" draggable="false" />
          </DivImage>
          <DivForm>
            <FormLogin />
          </DivForm>
        </Container>
      </ContainerPages>
    </motion.div>
  );
};

export default Login;
