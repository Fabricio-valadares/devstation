import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { FcSearch } from "react-icons/fc";
import { FaUsers, FaSearch, FaRegEye } from "react-icons/fa";

import { BiShow } from "react-icons/bi";
import { FcSearch } from "react-icons/fc";
import {
  UsersContainer,
  UserAvatarContainer,
  UserAvatar,
  UserContent,
  Card,
  DivH1,
  PnameUser,
  Pmail,
  ShowIcon,
  DivPname,
  DivHeader,
  UsersDiv,
} from "./styled";
import { getUsersThunk } from "../../../store/modules/get-users/thunks";
import userAvatar from "../../../assets/avatardefault.svg";
import Modal from "../../Modal";
import { openModalThunk } from "../../../store/modules/Modal/thunks";
import CardUser from "../CardUser";

const GetUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({});

  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users.results);
  const open = useSelector((state) => state.open);
  const next = useSelector((state) => state.users.next);
  const count = useSelector((state) => state.users.count);

  console.log(open);

  useEffect(() => {
    dispatch(getUsersThunk("https://kabit-api.herokuapp.com/users/"));
    setNumber(count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (next) {
      dispatch(getUsersThunk(next));
      setUsers([...users, ...usersList]);
    }
    // eslint-disable-next-line
  }, [next]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (user) => {
    dispatch(openModalThunk(true));
    setUser(user);
  };

  return (
    <>
      <Modal>
        <CardUser user={user} />
      </Modal>
      <UsersContainer>
        <DivHeader>
          <DivH1>
            <h1>Usuários</h1>
            <div id="dataNumberUser">
              <FaUsers />
              <p>{number}</p>
            </div>
          </DivH1>
          <div id="searchGroup">
            <input
              id="search"
              type="text"
              placeholder="Buscar usuário"
              value={input}
              onChange={handleInput}
            />
            <div id="buttonSearch">
              <FaSearch size="20" color="#fff" />
            </div>
          </div>
        </DivHeader>
        <UserContent>
          {usersList &&
            users
              .filter((user) =>
                user.username?.toLowerCase().includes(input.toLocaleLowerCase())
              )
              .sort((a, b) => a.id - b.id)
              .map((user, index) => {
                return (
                  <Card key={index}>
                    <UserAvatarContainer>
                      <UserAvatar src="https://picsum.photos/200/200" />
                    </UserAvatarContainer>
                    <DivPname>
                      <PnameUser>{user.username}</PnameUser>
                      <Pmail>{user.email}</Pmail>
                    </DivPname>
                    <ShowIcon>
                      <FaRegEye
                        onClick={() => handleClick(user)}
                        size={22}
                        color="#000"
                        style={{ cursor: "pointer" }}
                      />
                    </ShowIcon>
                  </Card>
                );
              })}
        </UserContent>
      </UsersContainer>
    </>
  );
};

export default GetUsersPage;
