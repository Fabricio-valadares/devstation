import styled from "styled-components";

import { FiInfo, FiTag, FiBookmark, FiX } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";

export const Main = styled.div`
  width: 30vw;
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
    display: flex;
    align-items: center;
    @media (max-width: 990px) {
      font-size: 20px;
    }
  }

  h3 {
    color: #f72585;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    @media (max-width: 990px) {
      font-size: 14px;
    }
  }
`;

export const ButtonStyled = styled.button`
  background-color: #f72585;
  border-radius: 3px;
  padding: 12px;
  font-size: 15px;
  color: #fff;
`;

export const DivNameCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DivDescription = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const DivWarning = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #30336b;
  padding-top: 20px;
`;

export const DivSpan = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  @media (max-width: 990px) {
    font-size: 12px;
  }
`;

export const MessageSuccess = styled.h1`
  color: #1dd1a1;
  text-align: center;
`;

export const InfoIcon = styled(FiInfo)`
  color: #dff9fb;
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

export const OutIcon = styled(GoSignOut)`
  color: #ff5252;
  width: 26px;
  height: 26px;
  margin-right: 4px;
`;

export const DescriptionIcon = styled(FiBookmark)`
  color: #e056fd;
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const CloseIcon = styled(FiX)`
  color: #ff5252;
  width: 24px;
  height: 24px;
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
