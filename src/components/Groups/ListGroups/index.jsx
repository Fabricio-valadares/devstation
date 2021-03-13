import { Content } from "./styled";
import { useEffect } from "react";
import { FaCaretUp } from "react-icons/fa";
import CardGroup from "../CardGroup";

import { useDispatch } from "react-redux";
import { groupsThunks } from "../../../store/modules/groups/thunk";

const ListGroups = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(groupsThunks());
  }, []);

  return (
    <Content>
      <div id="container">
        <div id="containerButton">
          <div id="buttonOne">
            <FaCaretUp color="#fff" />
          </div>
          <div id="buttonTwo">
            <FaCaretUp color="#fff" />
          </div>
        </div>
        <div id="buttonAdd">+</div>
      </div>
      <div id="group-users">
        <CardGroup />
      </div>
    </Content>
  );
};

export default ListGroups;
