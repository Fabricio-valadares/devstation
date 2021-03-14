import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiShow } from "react-icons/bi";
import { FcSearch } from "react-icons/fc";
import { FaUsers } from "react-icons/fa";
import {
  UsersContainer,
  UserAvatarContainer,
  UserAvatar,
  UserContent,
  Card,
  DivH1,
  Pname,
  ShowIcon,
  DivPname,
  DivHeader,
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
  console.log(open);

  useEffect(() => {
    dispatch(getUsersThunk("https://kabit-api.herokuapp.com/users/"));
    setNumber(users.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (next) {
      dispatch(getUsersThunk(next));
      setUsers([...users, ...usersList]);
      setNumber(0);
      setNumber(users.length);
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
          </DivH1>
          <FcSearch
            style={{
              fontSize: "40px",
              verticalAlign: "center",
            }}
          />
          <input
            placeholder="Buscar usuário"
            value={input}
            onChange={handleInput}
          />
          <FaUsers
            style={{
              fontSize: "20px",
              marginTop: "460px",
              color: "white",
            }}
          />
          <p>{number}</p>
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
                      <UserAvatar src={userAvatar} />
                    </UserAvatarContainer>
                    <DivPname>
                      <Pname>{user.username}</Pname>
                      <Pname>{user.email}</Pname>
                    </DivPname>
                    <ShowIcon>
                      <BiShow
                        onClick={() => handleClick(user)}
                        style={{
                          fontSize: "35px",
                          color: "white",
                        }}
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
