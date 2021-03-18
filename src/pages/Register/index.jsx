import RegisterForm from "../../components/Register/RegisterForm";
import { RegisterPage } from "./styled";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.div
      initial={{ translateY: "-100%" }}
      animate={{ translateY: "0%" }}
      transition={{ duration: 0.7 }}
    >
      <RegisterPage>
        <RegisterForm />
      </RegisterPage>
    </motion.div>
  );
};

export default Register;
