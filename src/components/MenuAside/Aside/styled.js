import styled from "styled-components";
import { AiFillDashboard } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";

export const Menu = styled.aside`
  width: 350px;
  height: 100vh;
  background-color: var(--dark-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
`;

export const Profile = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }

  div.user-info {
    color: var(--text);

    h3 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    p {
      font-size: 18px;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 120px;

  a.menu-link {
    width: 280px;
    height: 60px;
    padding: 8px 16px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    background-color: var(--soft-primary);
    box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.09),
      6px 6px 16px rgba(0, 0, 0, 0.2);
    transition: all 200ms ease-in;

    &:hover {
      background-color: var(--middle-primary);
    }

    &:active {
      box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.09),
        6px 6px 16px rgba(0, 0, 0, 0.2),
        inset -6px -6px 16px rgba(255, 255, 255, 0.09),
        inset 6px 6px 16px rgba(0, 0, 0, 0.2);
    }
    p {
      font-size: 18px;
      color: var(--text);
      font-weight: bold;
    }
  }
`;

export const DashIcon = styled(AiFillDashboard)`
  color: var(--secondary);
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
export const GroupIcon = styled(HiUserGroup)`
  color: var(--secondary);
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
