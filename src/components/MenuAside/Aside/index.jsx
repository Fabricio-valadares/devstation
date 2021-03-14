import { useState, useEffect } from "react";
import {
  Menu,
  Profile,
  Navigation,
  DashIcon,
  GroupIcon,
  UsersIcon,
} from "./styled";
import User from "../../../assets/user-avatar.svg";
import { Link } from "react-router-dom";

import api from "../../../services";

const Aside = () => {
  const storagedId = localStorage.getItem("id");
  const userId = JSON.parse(storagedId);
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
  }, []);

  return (
    <Menu>
      <Profile>
        <img src={User} alt="User" />
        <div className="user-info">
          <h3>{user.username}</h3>
          <p>{user.email}</p>
        </div>
      </Profile>
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
