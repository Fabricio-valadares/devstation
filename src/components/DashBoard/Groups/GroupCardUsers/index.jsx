import { useEffect, useState } from "react";
import api from "../../../../services";
import {
  CardUsers,
  DivFlex,
  HeaderStyled,
  Main,
  UserCardDiv,
  UserDiv,
  WhiteBall,
} from "./styled";

const GroupCardUsers = () => {
  const [group, setGroup] = useState([]);

  useEffect(() => {
    //consumindo rota get one group
    api
      .get(`groups/${2}/`)
      .then((response) => setGroup(response.data))
      .catch((e) => console.log(e));
  }, []);
  const { users, name, description, category } = group;

  return (
    <Main>
      <DivFlex>
        <WhiteBall />
        <HeaderStyled>
          <h1>{name}</h1>
          <p>Categoria: {category}</p>
          <p>Descrição: {description}</p>
        </HeaderStyled>
      </DivFlex>

      <CardUsers>
        {users &&
          users.map((user, index) => (
            <UserCardDiv key={index}>
              <WhiteBall />
              <UserDiv>
                <h1>{user.username}</h1>
                <p>{user.email}</p>
              </UserDiv>
            </UserCardDiv>
          ))}
      </CardUsers>
    </Main>
  );
};

export default GroupCardUsers;
