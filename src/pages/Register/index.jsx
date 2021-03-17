import RegisterForm from "../../components/Register/RegisterForm";
import { RegisterPage } from "./styled";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      transition={{ duration: { delay: 0.3 } }}
    >
      <RegisterPage>
        <RegisterForm />
      </RegisterPage>
    </motion.div>
  );
};

export default Register;
