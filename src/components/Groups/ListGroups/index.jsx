import { Content } from "./styled";
import { useEffect, useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import CardGroup from "../CardGroup";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { groupsThunks } from "../../../store/modules/groups/thunk";
import { useSelector } from "react-redux";
import api from "../../../services";

const ListGroups = () => {
  const [valueInput, setValueInput] = useState("");
  const [numberRota, setNumberRota] = useState(1);

  const [next, setNext] = useState("");
  const [previ, setPrevi] = useState("");

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

  const nextFunction = () => {
    if (typeof next === "string") {
      api
        .get(`https://kabit-api.herokuapp.com/groups/?page=${numberRota}`)
        .then((response) => {
          setNext(response.data.next);
          dispatch(
            groupsThunks(
              `https://kabit-api.herokuapp.com/groups/?page=${numberRota}`
            )
          );
        });
    }
  };

  const previFunction = () => {
    if (typeof setPrevi === "string") {
      api
        .get(`https://kabit-api.herokuapp.com/groups/?page=${numberRota}`)
        .then((response) => {
          setPrevi(response.data.previous);
          dispatch(
            groupsThunks(
              `https://kabit-api.herokuapp.com/groups/?page=${numberRota}`
            )
          );
        });
    }
  };

  useEffect(() => {
    dispatch(groupsThunks("https://kabit-api.herokuapp.com/groups/"));
  }, []);

  return (
    <Content>
      <div id="container">
        <div id="containerButton">
          <div
            id="buttonOne"
            onClick={() => {
              numberRota > 1 && setNumberRota(numberRota - 1);
              nextFunction();
            }}
          >
            <FaCaretLeft color="#fff" />
          </div>
          <div
            id="buttonTwo"
            onClick={() => {
              setNumberRota(numberRota + 1);
              previFunction();
            }}
          >
            <FaCaretRight color="#fff" />
          </div>
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
