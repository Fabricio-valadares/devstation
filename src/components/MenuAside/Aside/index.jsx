import { useState, useEffect } from "react";
import {
  Menu,
  Profile,
  ButtonBox,
  Button,
  ConfigIcon,
  LogOutIcon,
  Navigation,
  DashIcon,
  GroupIcon,
  UsersIcon,
  MobileDiv,
  LinkDashBoard,
  LinkGroups,
  LinkUsers,
} from "./styled";
import UpdateUserForm from "../UpdateUserForm";
import Modal from "../../Modal";
import { useHistory } from "react-router-dom";

import api from "../../../services";

import MobileMenu from "../MobileMenu";
import { SkeletonUser } from "../SkeletonUser";
import { motion } from "framer-motion";

const Aside = () => {
  const storagedId = localStorage.getItem("id");
  const userId = JSON.parse(storagedId);
  const history = useHistory();
  const [user, setUser] = useState();

  const [updateView, setUpdateView] = useState(false);

  const getUser = async () => {
    try {
      const response = await api.get(`/users/${userId}/`);
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateView]);

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };

  const handleOpen = () => {
    setUpdateView(true);
  };

  const handleClose = () => {
    setUpdateView(false);
  };

  return (
    <motion.div
      initial={{ translateX: "-100%" }}
      animate={{ translateX: "0%" }}
      transition={{ duration: 0.7 }}
    >
      <Menu>
        <Profile>
          {updateView && (
            <Modal open={updateView} handleClose={handleClose}>
              <UpdateUserForm close={handleClose} />
            </Modal>
          )}
          <figure>
            <img src="./assets/user-avatar.svg" alt="User" draggable="false" />
          </figure>
          {user ? (
            <div className="user-info">
              <h3>
                {user.username &&
                  user.username[0].toUpperCase() + user.username.slice(1)}
              </h3>
              <p>{user.email}</p>
              <ButtonBox>
                <Button title="Configuração" onClick={handleOpen}>
                  <ConfigIcon />
                </Button>
                <Button title="Sair" onClick={handleLogout}>
                  <LogOutIcon />
                </Button>
              </ButtonBox>
            </div>
          ) : (
            <SkeletonUser />
          )}
        </Profile>
        <MobileDiv>
          <MobileMenu />
        </MobileDiv>
        <Navigation>
          <LinkDashBoard
            location={history.location.pathname}
            className="menu-link"
            to="/dashboard"
          >
            <DashIcon />

            <p>Dashboard</p>
          </LinkDashBoard>
          <LinkGroups
            location={history.location.pathname}
            className="menu-link"
            to="/groups"
          >
            <GroupIcon />
            <p>Grupos</p>
          </LinkGroups>
          <LinkUsers
            location={history.location.pathname}
            className="menu-link"
            to="/users"
          >
            <UsersIcon />
            <p>Devs</p>
          </LinkUsers>
        </Navigation>
      </Menu>
    </motion.div>
  );
};

export default Aside;
