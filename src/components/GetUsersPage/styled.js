import styled from "styled-components";

export const UsersContainer = styled.div`
  /* width: 100%;
  height: 100%;
  

  @media (max-width: 1000px) {
  } */
`;

export const UserContent = styled.div`
  position: relative;
  width: 100%;

  /* margin: 10px; */
  /* padding-left: 10px;
  padding-right: 10px; */
  /* background-color: yellow; */

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  max-height: 34.1vh;
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
  }

  p {
    display: block;
    font-size: 0.7rem;
    text-align: center;
    color: white;
  }
`;

export const Pname = styled.div`
  display: block;
  margin-top: 5px;
  font-size: 0.7rem;
  text-align: center;
  color: white;
`;

export const DivH1 = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  /* border: 1px solid black; */
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: fit-content;
  /* border: 1px solid black; */
`;

export const UserAvatarContainer = styled.div`
  width: 40px;
  height: 34px;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 34px;
  border: none;
`;
