import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  UsersContainer,
  UserAvatarContainer,
  UserAvatar,
  UserContent,
  Card,
  DivH1,
  Pname,
} from "./styled";
import { getUsersThunk } from "../../store/modules/get-users/thunks";
import userAvatar from "../../assets/user2.png";

const GetUsersPage = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  let usersList = useSelector((state) => state.users.results);
  const next = useSelector((state) => state.users.next);
  console.log(usersList);

  useEffect(() => {
    dispatch(getUsersThunk("https://kabit-api.herokuapp.com/users/"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (next) {
      dispatch(getUsersThunk(next));
      setUsers([...users, ...usersList]);
    }
    // eslint-disable-next-line
  }, [next]);

  return (
    <>
      {/* <UsersContainer> */}
        <UserContent>
          {/* <DivH1>
            <h1>Usuários</h1>
          </DivH1> */}
          {usersList &&
            users.map((user, index) => {
              return (
                <Card key={index}>
                  <UserAvatarContainer>
                    <UserAvatar src={userAvatar} />
                  </UserAvatarContainer>
                  <Pname>{user.username}</Pname>
                  <p>
                    {" "}
                    {user.group && "Grupo:"} {user.group}
                  </p>
                  <br />
                </Card>
              );
            })}
        </UserContent>
      {/* </UsersContainer> */}
    </>
  );
};

export default GetUsersPage;
