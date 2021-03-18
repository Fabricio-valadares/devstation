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
  Margin,
  GroupIcon,
  CategoryIcon,
} from "./styled";

import { Button } from "@material-ui/core";
import {
  SkeletonGroup,
  SkeletonGroupName,
  SkeletonGroupCategory,
} from "./SkeletonGroup";

const GroupCardUsers = () => {
  const [group, setGroup] = useState();
  const [open, setOpen] = useState(false);

  const groupId = JSON.parse(localStorage.getItem("groupId"));

  useEffect(() => {
    if (groupId) {
      api
        .get(`groups/${groupId}/`)
        .then((response) => {
          setGroup(response.data);
        })
        .catch(() => setGroup({ name: "", category: "", users: [] }));
    } else {
      setGroup({ name: "", category: "", users: [] });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId, open]);

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
            {group ? (
              <>
                {group?.name && (
                  <>
                    <h3>
                      <GroupIcon /> {group.name}
                    </h3>
                    <Button onClick={handleClick}>
                      <EditIcon />
                    </Button>
                  </>
                )}
              </>
            ) : (
              <SkeletonGroupName />
            )}
          </GroupName>

          {group ? (
            <Margin>
              {group?.category && (
                <>
                  <h3 id="category">
                    <CategoryIcon /> <span>{group.category}</span>
                  </h3>
                </>
              )}
            </Margin>
          ) : (
            <SkeletonGroupCategory />
          )}
        </div>

        <CardUsers>
          {group ? (
            group.users.map((user, index) => (
              <UserCardDiv key={index}>
                <figure>
                  <img
                    src="./assets/profile-man.svg"
                    alt="Profile"
                    draggable="false"
                  />
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
