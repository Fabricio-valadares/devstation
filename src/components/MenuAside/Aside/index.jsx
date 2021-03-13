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

const Aside = () => {
  return (
    <Menu>
      <Profile>
        <img src={User} alt="User" />
        <div className="user-info">
          <h3>User name</h3>
          <p>user@email.com</p>
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
