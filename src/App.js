import Routes from "./router";
import "react-toastify/dist/ReactToastify.css";
import { StyledContainer } from "./styles/globalStyle";

const App = () => {
  return (
    <>
      <StyledContainer />
      <Routes />
    </>
  );
};

export default App;
