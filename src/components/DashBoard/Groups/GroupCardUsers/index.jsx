import { useEffect, useState } from "react";

import api from "../../../../services";

import Modal from "../../../Modal";

import EditGroup from "./EditGroup";

import profilePicture from "../../../../assets/profile-man.svg";

import {
  CardUsers,
  EditIcon,
  GroupName,
  Main,
  Title,
  UserCardDiv,
  UserDiv,
  Margin,
} from "./styled";

import { Button } from "@material-ui/core";
import {
  SkeletonGroup,
  SkeletonGroupName,
  SkeletonGroupCategory,
} from "./SkeletonGroup";

const GroupCardUsers = () => {
  const [group, setGroup] = useState([]);
  const [open, setOpen] = useState(false);

  const groupId = localStorage.getItem("groupId");

  useEffect(() => {
    api
      .get(`groups/${groupId}/`)
      .then((response) => setGroup(response.data))
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId, open]);

  const { users, name, category } = group;

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
        <div id="info">
          <Title>
            <h4>Seu Grupo</h4>
          </Title>
          <GroupName>
            {name ? (
              <>
                <h3>{name}</h3>
                <Button onClick={handleClick}>
                  <EditIcon />
                </Button>
              </>
            ) : (
              <SkeletonGroupName />
            )}
          </GroupName>

          {category ? (
            <Margin>
              <h3 id="category">
                Categoria: <span>{category}</span>
              </h3>
            </Margin>
          ) : (
            <SkeletonGroupCategory />
          )}
        </div>

        <CardUsers>
          {users ? (
            users.map((user, index) => (
              <UserCardDiv key={index}>
                <figure>
                  <img src={profilePicture} alt="Profile" />
                </figure>
                <UserDiv>
                  <h1>{user.username}</h1>
                  <p>{user.email}</p>
                </UserDiv>
              </UserCardDiv>
            ))
          ) : (
            <SkeletonGroup />
          )}
        </CardUsers>
      </Main>
    </>
  );
};

export default GroupCardUsers;
