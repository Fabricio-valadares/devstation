import { Main } from "./styled";

import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const NotFound = ({ toggleTheme }) => {
  return (
    <Main>
      <header>
        <h1>Ooops... nada por aqui dev</h1>
        <Link className="fi-log" to="/">
          <FiLogIn />
        </Link>
      </header>
      <img src={"./assets/not-found.svg"} alt="404 error" />
    </Main>
  );
};

export default NotFound;
