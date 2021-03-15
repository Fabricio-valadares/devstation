import styled from "styled-components";

export const DivCardUser = styled.div`
  color: var(--text);
`;

export const UserAvatarContainer = styled.div`
  margin: 10px 10px 10px 0;
  width: 66px;
  height: 68px;
  color: var(--text);

  p {
    color: var(--text);
  }
`;

export const DivTitleUser = styled.div`
  font-size: 23px;
  /* text-align: center; */
  margin-bottom: 26px;
  color: #f72585;
  width: 100%;
`;

export const DivTitleGroup = styled.div`
  font-size: 23px;
  margin: 23px 0 0 0;
  color: #f72585;
  width: 100%;
`;

export const DivDataGroupUser = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 19px 0 30px 0;
`;

export const DivUserDataBase = styled.div`
  width: 401px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #30336b;
  padding-bottom: 10px;
  margin: 15px 0 0 0;
  justify-content: space-between;
`;

export const UserAvatar = styled.img`
  width: 66px;
  height: 68px;
  border: none;
`;
