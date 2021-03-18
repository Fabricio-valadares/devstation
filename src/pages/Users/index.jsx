import { Main } from "./styled";
import Aside from "../../components/MenuAside/Aside/index";
import GetUsersPage from "../../components/Users/GetUsersPage/index";

const GetUsers = () => {
  return (
    <Main>
      <Aside />
      <GetUsersPage />
    </Main>
  );
};

export default GetUsers;
