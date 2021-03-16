import { useState, useEffect } from "react";
import {
  Menu,
  Profile,
  Navigation,
  DashIcon,
  GroupIcon,
  UsersIcon,
  MobileDiv,
} from "./styled";
import User from "../../../assets/user-avatar.svg";
import { Link, useHistory } from "react-router-dom";

import api from "../../../services";
import { Button } from "@material-ui/core";
import { FiLogOut } from "react-icons/fi";
import MobileMenu from "../MobileMenu";

const Aside = () => {
  const storagedId = localStorage.getItem("id");
  const userId = JSON.parse(storagedId);
  const history = useHistory();
  const [user, setUser] = useState({});
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
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Menu>
      <Profile>
        <img src={User} alt="User" />
        <div className="user-info">
          <h3>
            {user.username &&
              user.username[0].toUpperCase() + user.username.slice(1)}
          </h3>
          <p>{user.email}</p>
          <Button onClick={handleLogout}>
            <FiLogOut />
          </Button>
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
          <p>Groups</p>
        </Link>
        <Link className="menu-link" to="/users">
          <UsersIcon />
          <p>Users</p>
        </Link>
      </Navigation>
    </Menu>
  );
};

export default Aside;
