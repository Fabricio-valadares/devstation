import { useEffect, useState } from "react";

import api from "../../../../services";

import Modal from "../../../Modal";

import EditGroup from "./EditGroup";

import {
  CardUsers,
  EditIcon,
  GroupName,
  Main,
  Title,
  UserCardDiv,
  UserDiv,
  WhiteBall,
  Margin,
} from "./styled";

import { Button } from "@material-ui/core";

const GroupCardUsers = () => {
  const [group, setGroup] = useState([]);
  const [open, setOpen] = useState(false);

  const groupId = localStorage.getItem("groupId");

  useEffect(() => {
    //consumindo rota get one group
    api
      .get(`groups/${groupId}/`)
      .then((response) => setGroup(response.data))
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId, open]);

  const { users, name, description, category } = group;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} handleClose={handleClose}>
        <EditGroup groupId={groupId} handleClose={handleClose} />
      </Modal>
      <Main>
        <div>
          <Title>
            <h4>Seu Grupo</h4>
          </Title>
          <GroupName>
            <h3>{name}</h3>
            <Button onClick={handleClick}>
              <EditIcon />
            </Button>
          </GroupName>
          <Margin>
            <h3 id="category">
              Categoria: <span>{category}</span>
            </h3>
          </Margin>
          <Margin>
            <h3 id="description">
              Descrição: <span>{description}</span>
            </h3>
          </Margin>
        </div>

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
    </>
  );
};

export default GroupCardUsers;
