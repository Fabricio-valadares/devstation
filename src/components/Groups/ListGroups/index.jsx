import {
  DivButtonAdd,
  DivH1,
  DivHeader,
  UserContent,
  GroupsContainer,
} from "./styled";
import { useEffect, useState } from "react";
import CardGroup from "../CardGroup";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { groupsThunks } from "../../../store/modules/groups/thunk";
import { useSelector } from "react-redux";
import ModalCreateGroup from "../ModalCreateGroup";

import Modal from "../../Modal";
import { SkeletonGroups } from "../SkeletonGroups";
import { useHistory } from "react-router";

const ListGroups = () => {
  const dispatch = useDispatch();

  const [valueInput, setValueInput] = useState("");

  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("token"));

  const [open, setOpen] = useState(false);

  const [groupsData, setGroupsData] = useState([]);

  const results = useSelector((state) => state.groupsReduces.results);
  const next = useSelector((state) => state.groupsReduces.next);

  useEffect(() => {
    if (!token) {
      history.push("login");
    }
    setGroupsData([]);
    dispatch(groupsThunks("https://kabit-api.herokuapp.com/groups/"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (next) {
      dispatch(groupsThunks(`${next}`));
      setGroupsData([...groupsData, ...results]);
    } else {
      if (results) {
        setTimeout(() => {
          setGroupsData([...groupsData, ...results]);
        }, 1000);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [next]);

  const handleClickInput = (e) => {
    setValueInput(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} handleClose={handleClose}>
        <ModalCreateGroup
          groupsData={groupsData}
          setGroupsData={setGroupsData}
          close={handleClose}
        />
      </Modal>
      <GroupsContainer>
        <DivHeader>
          <DivH1>
            <div
              style={{
                color: "#f72585",
                fontSize: "24px",
                fontWeight: "bold",
              }}
              id="containerButton"
            >
              Grupos
            </div>
            <DivButtonAdd
              style={{ backgroundColor: "#30336B" }}
              onClick={handleOpen}
            >
              +
            </DivButtonAdd>
          </DivH1>
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
        </DivHeader>

        <UserContent>
          {groupsData[0] ? (
            <CardGroup groupsData={groupsData} valueInput={valueInput} />
          ) : (
            <SkeletonGroups />
          )}
        </UserContent>
      </GroupsContainer>
    </>
  );
};

export default ListGroups;
