import RegisterForm from "../../components/Register/RegisterForm";
import { RegisterPage } from "./styled";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.div
      initial={{ translateX: "100%" }}
      animate={{ translateX: "0%" }}
      // exit={{ translateX: "50%" }}
      transition={{ duration: 0.7 }}
    >
      <RegisterPage>
        <RegisterForm />
      </RegisterPage>
    </motion.div>
  );
};

export default Register;
