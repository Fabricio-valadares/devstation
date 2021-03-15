import Aside from "../../components/MenuAside/Aside";
import ListUsers from "../../components/Groups/ListGroups";
import { Main } from "./styled";

const Groups = () => {
  return (
    <Main>
      <Aside />
      <ListUsers />
    </Main>
  );
};

export default Groups;
