import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UsersContainer } from "./styled";
import { getUsersThunk } from "../../store/modules/get-users/thunks";

const GetUsers = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.users);
  usersList.sort((a, b) => a.id - b.id);

  useEffect(() => {
    dispatch(getUsersThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <UsersContainer>
        <h1>Users</h1>

        <table>
          <thead>
            <th style={{ width: "5%" }}>ID</th>
            <th style={{ width: "30%" }}>USERNAME</th>
            <th style={{ width: "30%" }}>EMAIL</th>
            <th style={{ width: "30%" }}>GROUP</th>
          </thead>

          {usersList.map((user, index) => {
            return (
              <tbody key={index}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.group}</td>
              </tbody>
            );
          })}
        </table>
      </UsersContainer>
    </>
  );
};

export default GetUsers;
