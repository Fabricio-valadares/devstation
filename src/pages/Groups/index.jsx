import Aside from "../../components/MenuAside/Aside";
import ListGroups from "../../components/Groups/ListGroups";
import { Main } from "./styled";
import { motion } from "framer-motion";

const Groups = () => {
  return (
    <motion.div
      initial={{ translateX: "100%" }}
      animate={{ translateX: "0%" }}
      // exit={{ translateX: "50%" }}
      transition={{ duration: 0.5 }}
    >
      <Main>
        <Aside />
        <ListGroups />
      </Main>
    </motion.div>
  );
};

export default Groups;
