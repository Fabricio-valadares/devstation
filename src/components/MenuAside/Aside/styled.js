import styled from "styled-components";
import { AiFillDashboard } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { FaUserFriends } from "react-icons/fa";

export const Menu = styled.aside`
  width: 100%;
  display: flex;
  align-items: center;
  height: 10vh;
  padding: 80px 0;
  justify-content: space-around;

  background-color: var(--dark-primary);

  @media (min-width: 900px) {
    width: 20vw;
    height: 100vh;
    flex-direction: column;
    justify-content: start;

    padding: 80px 0;
  }
`;

export const Profile = styled.div`
  @media (min-width: 900px) {
  }
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  img {
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }

  div.user-info {
    color: var(--text);

    h3 {
      font-size: 20px;
      @media (min-width: 1000px) {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 8px;
      }
    }

    p {
      font-size: 0.8rem;
    }
    button {
      color: var(--secondary);
      font-size: 2rem;
    }
  }
`;
export const MobileDiv = styled.div`
  display: block;
  @media (min-width: 900px) {
    display: none;
  }
`;

export const Navigation = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 80%;

    a.menu-link {
      padding: 8px 16px;
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: space-around;
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
        font-size: 10px;
        color: var(--text);
        font-weight: bold;
      }
    }
  }

  @media (min-width: 900px) {
    flex-direction: column;
    margin-top: 120px;
    width: 100%;

    a.menu-link {
      width: 80%;
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

export const UsersIcon = styled(FaUserFriends)`
  color: var(--secondary);
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
