import { Main } from "./styled";
import Aside from "../../components/MenuAside/Aside/index";
import GetUsersPage from "../../components/Users/GetUsersPage/index";
import { motion } from "framer-motion";

const GetUsers = () => {
  return (
    <motion.div
      initial={{ translateX: "100%" }}
      animate={{ translateX: "0%" }}
      transition={{ duration: 0.7 }}
    >
      <Main>
        <Aside />
        <GetUsersPage></GetUsersPage>
      </Main>
    </motion.div>
  );
};

export default GetUsers;
