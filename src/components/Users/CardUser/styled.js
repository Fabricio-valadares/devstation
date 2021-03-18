import styled from "styled-components";
import { FiInfo, FiX, FiTag, FiBookmark } from "react-icons/fi";
import { HiOutlineMail, HiUserGroup } from "react-icons/hi";
export const DivCardUser = styled.div`
  width: 25vw;
  height: auto;
  background-color: #130f40;
  border-radius: 8px;
  color: white;
  padding: 24px;
  z-index: 2;
  position: relative;

  @media (max-width: 990px) {
    width: 320px;
  }

  h1 {
    color: #f72585;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;

    @media (max-width: 990px) {
      font-size: 20px;
    }
  }

  p {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
`;

export const InfoIcon = styled(FiInfo)`
  color: #dff9fb;
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const GroupIcon = styled(HiUserGroup)`
  color: #dff9fb;
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const MailIcon = styled(HiOutlineMail)`
  color: #e056fd;
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const DescriptionIcon = styled(FiBookmark)`
  color: #f9ca24;
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const TagIcon = styled(FiTag)`
  color: #f0932b;
  width: 24px;
  height: 24px;
  margin-right: 4px;
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
  margin-bottom: 26px;
  color: #f72585;
  width: 100%;
`;

export const DivTitleGroup = styled.div`
  font-size: 23px;
  margin: 23px 0 0 0;
  color: #f72585;
  width: 100%;
  margin: 20px 0;
`;

export const DivDataGroupUser = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 24px;
  }
`;

export const DivUserDataBase = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
  margin: 15px 0 0 0;
  justify-content: space-between;
`;

export const UserAvatar = styled.img`
  width: 66px;
  height: 68px;
  border: none;
`;

export const CloseIcon = styled(FiX)`
  color: #ff5252;
  width: 80%;
  height: 80%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #30336b;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease-in;

  &:hover {
    background-color: #f72585;
  }
`;
