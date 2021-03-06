import styled from "styled-components";

export const GroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  height: 100vh;
  margin: 4vh auto;
  padding-bottom: 1rem;
  background-color: var(--dark-primary);
  border-radius: 8px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);

  h1 {
    color: #f72585;
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 990px) {
      font-size: 20px;
    }
  }

  @media (min-width: 700px) {
    justify-content: flex-start;
    width: 76%;
    height: 93vh;
  }
`;

export const UserContent = styled.div`
  width: 100%;
  display: flex;
  padding: 0 9px;
  flex-direction: column;

  overflow-y: scroll;
  align-items: center;

  ::-webkit-scrollbar {
    border-radius: 50px;
  }

  @media (min-width: 700px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;

    max-height: 69vh;

    h1 {
      top: 0;
      position: relative;
      text-align: left;
      font-size: 1.25rem;
      width: 30%;
      background-color: var(--dark-primary);
      color: var(--text);
    }

    p {
      display: flex;
      font-size: 0.7rem;
      text-align: center;
      color: var(--text);
    }
  }
`;

export const DivPname = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Pmail = styled.div`
  margin-top: 5px;
  font-size: 1rem;
  text-align: left;
  color: #fff;
  font-weight: 100;
`;

export const PnameUser = styled.div`
  margin-top: 5px;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  color: #fff;
`;

export const DivHeader = styled.div`
  padding: 24px 25px 5px 25px;
  width: 100%;

  p {
    margin-left: 2px;
    vertical-align: center;
    font-size: 10px;
    color: var(--text);
  }

  div#dataNumberUser {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    width: 60px;

    p {
      font-size: 14px;
      font-weight: bold;
    }
  }

  div#searchGroup {
    width: 100%;
    margin: 15px 0;
    display: flex;
  }

  input#search {
    padding: 18px 0 18px 18px;
    border-radius: 5px 0 0 5px;
    background-color: var(--middle-primary);
    color: var(--text);
    flex: 1;

    ::-webkit-input-placeholder {
      color: #eee;
    }
  }

  div#buttonSearch {
    background-color: var(--secondary);
    border-radius: 0 5px 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    cursor: pointer;
  }
`;

export const DivH1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20px;
  font-size: 1.25rem;
  color: var(--text);
  margin-bottom: 20px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--middle-primary);
  margin-bottom: 10px;

  border-radius: 5px;

  div#user {
    margin: 1rem;

    @media (max-width: 700px) {
      margin: 0.4rem;
      display: flex;
      align-items: center;
    }
  }

  @media (min-width: 700px) {
    align-items: center;
    width: 95%;
    height: 72px;
    margin-left: 27px;

    div#user {
      display: flex;
    }
  }
`;

export const UserAvatarContainer = styled.div`
  width: 43px;
  margin-right: 20px;
`;

export const UserAvatar = styled.img`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  border: none;
`;

export const ShowIcon = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 2rem;
    height: 2rem;
  }

  margin-right: 1rem;

  @media (min-width: 700px) {
    display: block;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const UsersDiv = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  margin-left: 14px;
  p {
    font-size: 0.8rem;
  }
`;

export const ContainerCard = styled.div`
  overflow-y: auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivButtonAdd = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  display: flex;
  color: var(--text);
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  background-color: #130f40;
  box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.09),
    6px 6px 16px rgba(0, 0, 0, 0.2);
  transition: all 200ms ease-in;
  &:hover {
    background-color: rgba(19, 15, 64, 0.5);
  }

  &:active {
    box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.09),
      6px 6px 16px rgba(0, 0, 0, 0.2),
      inset -6px -6px 16px rgba(255, 255, 255, 0.09),
      inset 6px 6px 16px rgba(0, 0, 0, 0.2);
  }
`;
