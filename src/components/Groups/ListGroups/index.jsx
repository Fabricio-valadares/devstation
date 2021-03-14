import { Content } from "./styled";
import { useEffect, useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import CardGroup from "../CardGroup";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { groupsThunks } from "../../../store/modules/groups/thunk";
import { useSelector } from "react-redux";
import axios from "axios";

const ListGroups = () => {
  const [url, setUrl] = useState(
    "https://kabit-api.herokuapp.com/groups/?page=1"
  );

  const [valueInput, setValueInput] = useState("");

  const [valueFilter, setValueFilter] = useState([]);
  const [booleanValue, setBooleanValue] = useState(false);

  const { groupsReduces } = useSelector((state) => state);
  const dispatch = useDispatch();

  const GroupIncludes = () => {
    const filterGroups = groupsReduces.filter((ele) => ele.name === valueInput);
    if (filterGroups.length === 0) {
      setBooleanValue(true);
    }
    setValueFilter(filterGroups);
  };

  const nextPrevPage = (urlPage, string) => {
    if (string === "next") {
      axios.get(`${urlPage}`).then((response) => {
        if (response.data.next !== null) {
          setUrl(response.data.next);
          dispatch(groupsThunks(response.data.next));
        }
      });
    } else {
      axios.get(`${urlPage}`).then((response) => {
        if (response.data.previous !== null) {
          setUrl(response.data.previous);
          dispatch(groupsThunks(response.data.previous));
        }
      });
    }
  };

  useEffect(() => {
    dispatch(groupsThunks(url));
  }, []);

  return (
    <Content>
      <div id="container">
        <div id="containerButton">
          <button id="buttonOne">
            <FaCaretLeft
              color="#fff"
              onClick={() => nextPrevPage(url, "prev")}
            />
          </button>
          <button id="buttonTwo">
            <FaCaretRight
              color="#fff"
              onClick={() => nextPrevPage(url, "next")}
            />
          </button>
        </div>
        <div id="buttonAdd">+</div>
      </div>
      <div id="group-users">
        <div id="searchGroup">
          <input
            id="search"
            type="text"
            onChange={(e) => setValueInput(e.target.value)}
          />
          <div id="buttonSearch" onClick={GroupIncludes}>
            <FaSearch size="20" color="#fff" />
          </div>
        </div>
        <CardGroup
          valueFilter={valueFilter}
          valueInput={valueInput}
          booleanValue={booleanValue}
          setBooleanValue={setBooleanValue}
        />
      </div>
    </Content>
  );
};

export default ListGroups;
