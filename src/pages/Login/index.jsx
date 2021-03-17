import { Container, DivImage, DivForm, Image, ContainerPages } from "./styled";
import FormLogin from "../../components/Login/FormLogin";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      initial={{ translateX: "-100%" }}
      animate={{ translateX: "0%" }}
      // exit={{ translateX: "50%" }}
      transition={{ duration: 0.7 }}
    >
      <ContainerPages>
        <Container>
          <DivImage>
            <Image src={"./assets/login3.svg"} draggable="false" />
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
