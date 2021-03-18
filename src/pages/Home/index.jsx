import Homepage from "../../components/Home/Homepage";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ translateY: "-100%" }}
      animate={{ translateY: "0%" }}
      transition={{ duration: 0.5 }}
    >
      <Homepage />
    </motion.div>
  );
};

export default Home;
