import { Content } from "./styled";
import { useEffect, useState } from "react";
import CardGroup from "../CardGroup";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { groupsThunks } from "../../../store/modules/groups/thunk";
import { useSelector } from "react-redux";
import Modal from "../../Modal";
import ModalCreateGroup from "../ModalCreateGroup";
import { openModalThunk } from "../../../store/modules/Modal/thunks";

const ListGroups = () => {
  const dispatch = useDispatch();

  const [valueInput, setValueInput] = useState("");

  const [groupsData, setGroupsData] = useState([]);
  const [groupsItem, setGroupsItem] = useState([]);
  const [cardGroup, setCardGroup] = useState([]);

  const { next, results } = useSelector((state) => state.groupsReduces);

  useEffect(() => {
    dispatch(groupsThunks("https://kabit-api.herokuapp.com/groups/"));
  }, []);

  useEffect(() => {
    if (results !== undefined) {
      dispatch(groupsThunks(`${next}`));
      setGroupsData([...groupsData, ...results]);
      setCardGroup(groupsData);
    }

    // if (next !== null && results !== undefined) {

    // }
  }, [next]);

  const handleClickInput = (e) => {
    setValueInput(e.target.value);
  };

  return (
    <>
      <Content>
        <div id="container">
          <div id="containerButton"></div>
          <ModalCreateGroup />
        </div>
        <div id="group-users">
          <div id="searchGroup">
            <input
              id="search"
              type="text"
              placeholder="Buscar Grupo"
              onChange={handleClickInput}
            />
            <div id="buttonSearch">
              <FaSearch size="20" color="#fff" />
            </div>
          </div>
          <CardGroup groupsData={groupsData} valueInput={valueInput} />
        </div>
      </Content>
    </>
  );
};

export default ListGroups;
