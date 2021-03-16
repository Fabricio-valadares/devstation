import styled from "styled-components";

export const UsersContainer = styled.div`
  /* display: block; */

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
  /* box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.09),
    6px 6px 16px rgba(0, 0, 0, 0.2); */

  @media (min-width: 700px) {
    justify-content: flex-start;
    width: 65vw;
    height: 93vh;
  }
`;

export const UserContent = styled.div`
  /* position: relative; */
  /* margin: 10px;
  padding-left: 35px;
  padding-right: 30px; */
  /* background-color: yellow; */

  width: 90%;
  flex-direction: column;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    border-radius: 50px;
    /* background-color: 0px 0px 4px 4px rgba(0, 0, 0, 0.50); */
  }
  @media (min-width: 700px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;

    max-height: 69vh;
    /* height: 80%; */

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
      display: block;
      font-size: 0.7rem;
      text-align: center;
      color: var(--text);
    }
  }
`;

export const DivPname = styled.div`
  /* width: 50vw; */
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
  /* display: flex; */
  padding: 24px 25px 5px 25px;
  width: 100%;
  /* height: 20px; */

  /* input {
    height: 30px;
  } */

  p {
    margin-left: 2px;
    vertical-align: center;
    font-size: 10px;
    color: var(--text);
  }

  div#dataNumberUser {
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    width: 60px;
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
    width: 85%;

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
  width: 60%;
  height: 20px;
  vertical-align: center;
  font-size: 1.25rem;
  color: var(--text);
  margin-bottom: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  background-color: var(--middle-primary);
  margin-bottom: 10px;

  border-radius: 5px;

  div#user {
    margin: 1rem;
  }

  @media (min-width: 700px) {
    align-items: center;
    /* Rectangle 49 */

    /* height: 15vh; */
    width: 60.4vw;
    height: 72px;
    margin-left: 27px;

    div#user {
      display: flex;
    }

    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  }
`;

export const UserAvatarContainer = styled.div`
  width: 43px;
  padding: 8px 10px;
  margin-right: 20px;
`;

export const UserAvatar = styled.img`
  width: 43px;
  height: 43px;
  border-radius: 50%;
  border: none;
`;

export const ShowIcon = styled.div`
  /* width: 80px; */
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
