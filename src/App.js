import Routes from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledContainer } from "./styles/globalStyle";

const App = () => {
  return (
    <>
      <StyledContainer />
      <ToastContainer />
      <Routes />
    </>
  );
};

export default App;
