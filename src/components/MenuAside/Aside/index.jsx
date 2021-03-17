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
} from "./styled";
import User from "../../../assets/user-avatar.svg";
import UpdateUserForm from "../UpdateUserForm";
import Modal from "../../Modal";
import { Link, useHistory } from "react-router-dom";

import api from "../../../services";

import MobileMenu from "../MobileMenu";

const Aside = () => {
  const storagedId = localStorage.getItem("id");
  const userId = JSON.parse(storagedId);
  const history = useHistory();
  const [user, setUser] = useState({});

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
    <Menu>
      <Profile>
        {updateView && (
          <Modal open={updateView} handleClose={handleClose}>
            <UpdateUserForm close={handleClose} />
          </Modal>
        )}
        <figure>
          <img src={User} alt="User" />
        </figure>
        <div className="user-info">
          <h3>
            {user.username &&
              user.username[0].toUpperCase() + user.username.slice(1)}
          </h3>
          <p>{user.email}</p>
          <ButtonBox>
            <Button onClick={handleOpen}>
              <ConfigIcon />
            </Button>
            <Button onClick={handleLogout}>
              <LogOutIcon />
            </Button>
          </ButtonBox>
        </div>
      </Profile>
      <MobileDiv>
        <MobileMenu />
      </MobileDiv>
      <Navigation>
        <Link className="menu-link" to="/dashboard">
          <DashIcon />
          <p>Dashboard</p>
        </Link>
        <Link className="menu-link" to="/groups">
          <GroupIcon />
          <p>Grupos</p>
        </Link>
        <Link className="menu-link" to="/users">
          <UsersIcon />
          <p>Usuários</p>
        </Link>
      </Navigation>
    </Menu>
  );
};

export default Aside;
