import styled from "styled-components";

export const UsersContainer = styled.div`
  display: block;
  width: 65vw;
  height: 80vh;
  margin: 8vh auto;
  background-color: var(--dark-primary);
  border-radius: 8px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.09),
    6px 6px 16px rgba(0, 0, 0, 0.2); */

  @media (max-width: 1000px) {
  }
`;

export const UserContent = styled.div`
  /* position: relative; */
  width: 100%;

  /* margin: 10px;
  padding-left: 35px;
  padding-right: 30px; */
  /* background-color: yellow; */

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  max-height: 69vh;
  height: 80%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    border-radius: 50px;
    /* background-color: 0px 0px 4px 4px rgba(0, 0, 0, 0.50); */
  }

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
`;

export const DivPname = styled.div`
  width: 50vw;
`;

export const Pname = styled.div`
  margin-top: 5px;
  font-size: 1rem;
  text-align: left;
  color: var(--text);
`;

export const DivHeader = styled.div`
  display: flex;
  padding: 20px 30px 40px 30px;
  width: 100%;
  height: 20px;

  input {
    height: 30px;
  }

  p {
    /* margin-top: 465px; */
    margin-left: 2px;
    vertical-align: center;
    font-size: 10px;
    color: var(--text);
  }
`;

export const DivH1 = styled.div`
  display: flex;
  width: 60%;
  height: 20px;
  vertical-align: center;
  font-size: 1.25rem;
  color: var(--text);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: how;
  align-items: center;
  /* Rectangle 49 */

  width: 61vw;
  height: 15vh;
  margin-left: 30px;
  margin-bottom: 10px;

  background: #560bad;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const UserAvatarContainer = styled.div`
  margin: 16px;
  width: 66px;
  height: 68px;
`;

export const UserAvatar = styled.img`
  width: 66px;
  height: 68px;
  border: none;
`;

export const ShowIcon = styled.div`
  width: 80px;
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
