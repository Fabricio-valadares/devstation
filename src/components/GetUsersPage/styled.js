import styled from "styled-components";

export const UsersContainer = styled.div`
  left: 0px;
  top: 0px;
  width: 730px;
  height: 379px;

  @media (max-width: 1000px) {
  }
`;

export const UserContent = styled.div`
  width: 730px;
  height: 379px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  background: var(--dark-primary);
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  max-height: 37vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    background-color: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  
  h1 {
    text-align: left;
    margin: 10px;
  }

  p {
    font-size: 10px;
    text-align: center;
  }
`;


export const DivH1 = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  flex: 4;
  width: 150px;
  height: 62px;
  margin: 5px;
`;

export const UserAvatarContainer = styled.div`
  width: 40px;
  height: 34px;
  margin: 0 auto;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 34px;
  border: none;
`;
