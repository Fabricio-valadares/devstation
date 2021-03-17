import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUsers, FaSearch, FaRegEye } from "react-icons/fa";
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
} from "./styled";
import { getUsersThunk } from "../../../store/modules/get-users/thunks";
import Modal from "../../Modal";
import CardUser from "../CardUser";
import { SkeletonGroups } from "../../Groups/SkeletonGroups";

const GetUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState({});

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users.results);
  const next = useSelector((state) => state.users.next);
  // const previous = useSelector((state) => state.users.previous);
  const count = useSelector((state) => state.users.count);

  useEffect(() => {
    dispatch(getUsersThunk("https://kabit-api.herokuapp.com/users/"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (next) {
      setTimeout(() => {
        dispatch(getUsersThunk(next));
        setUsers([...users, ...usersList]);
        console.log("next", users.length);
      }, 1000);
    } else {
      if (usersList) {
        setTimeout(() => {
          setUsers([...users, ...usersList]);
          console.log("Ultimo", users.length + usersList.length);
        }, 1000);
      }
    }
    // eslint-disable-next-line
  }, [next]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (user) => {
    setUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal handleClose={handleClose} open={open}>
        <CardUser user={user} />
      </Modal>
      <UsersContainer>
        <DivHeader>
          <DivH1>
            <h1>Usuários</h1>
            <div id="dataNumberUser">
              <FaUsers />
              <p>{count && count}</p>
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
          {users[0] ? (
            users
              .filter((user) =>
                user.username?.toLowerCase().includes(input.toLowerCase())
              )
              .sort((a, b) => a.id - b.id)
              .map((user, index) => {
                return (
                  <Card key={index}>
                    <div id="user">
                      <UserAvatarContainer>
                        <UserAvatar src="https://picsum.photos/200/200" draggable="false" />
                      </UserAvatarContainer>
                      <DivPname>
                        <PnameUser>{user.username}</PnameUser>
                        <Pmail>{user.email}</Pmail>
                      </DivPname>
                    </div>

                    <ShowIcon>
                      <FaRegEye
                        onClick={() => handleClick(user)}
                        size={22}
                        color="#fff"
                        style={{ cursor: "pointer" }}
                      />
                    </ShowIcon>
                  </Card>
                );
              })
          ) : (
            <SkeletonGroups />
          )}
        </UserContent>
      </UsersContainer>
    </>
  );
};

export default GetUsersPage;
