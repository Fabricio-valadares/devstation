import {
  Main,
  Menu,
  Profile,
  Navigation,
  DashIcon,
  GroupIcon,
  Content,
} from "./styled";
import User from "../../assets/user-avatar.svg";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
const DashBoard = () => {
  return (
    <Main>
      <Menu>
        <Profile>
          <img src={User} alt="User" />
          <div className="user-info">
            <h3>User name</h3>
            <p>user@email.com</p>
          </div>
        </Profile>
        <Navigation>
          <Link className="menu-link">
            <DashIcon />
            <p>Dashboard</p>
          </Link>
          <Link className="menu-link">
            <GroupIcon />
            <p>Groups</p>
          </Link>
        </Navigation>
      </Menu>
      <Content>
        <div id="habits-card">
          <Container />
        </div>
        <div id="group-card">
          <Container />
        </div>
        <div id="activities-card">
          <Container />
        </div>
      </Content>
    </Main>
  );
};

export default DashBoard;
