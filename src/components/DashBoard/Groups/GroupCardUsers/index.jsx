import { CardUsers, UserCardDiv, UserDiv, WhiteBall } from "./styled";

const GroupCardUsers = ({ users }) => {
  return (
    <CardUsers>
      {users &&
        users.map((user, index) => (
          <UserCardDiv key={index}>
            <WhiteBall />
            <UserDiv>
              <h1>{user.username}</h1>
              {/* <p>{user.email}</p> */}
            </UserDiv>
          </UserCardDiv>
        ))}
    </CardUsers>
  );
};

export default GroupCardUsers;
