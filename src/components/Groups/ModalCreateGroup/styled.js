import styled from "styled-components";
import { FiInfo, FiAlertTriangle, FiFileText, FiTag } from "react-icons/fi";
import { shade } from "polished";
import { InputBase } from "@material-ui/core";

export const FormStyled = styled.form`
  /* background-color: red; */
`;

export const Message = styled.p`
  color: #1dd1a1;
`;

export const InputStyled = styled(InputBase)`
  flex: 1;
  height: 40px;
  background-color: #30336b;
  border-radius: 8px;
  padding: 8px 16px;
  box-sizing: border-box;
  font-size: 18px;
  color: white;
`;

export const Title = styled.div`
  font-size: 21px;
  margin: 26px 0;
  color: #f72585;
  font-weight: bold;
`;

export const SaveButton = styled.button`
  flex: 1;
  height: 40px;
  background-color: transparent;
  border-radius: 8px;
  padding: 8px 16px;
  box-sizing: border-box;
  font-size: 18px;
  color: white;
  font-weight: bold;
  transition: all 200ms ease-in;
  background-color: #f72585;
  margin-top: 12px;
  width: 204px;

  &:hover {
    background-color: ${shade(0.2, "#f72585")};
  }
`;

export const InputBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const ErrorIcon = styled(FiAlertTriangle)`
  color: #ff5252;
  width: 80%;
  height: 80%;
`;

export const TagIcon = styled(FiTag)`
  color: #f72585;
  width: 80%;
  height: 80%;
`;

export const DescriotionIcon = styled(FiFileText)`
  color: #f72585;
  width: 80%;
  height: 80%;
`;

export const InfoIcon = styled(FiInfo)`
  color: #f72585;
  width: 80%;
  height: 80%;
`;

export const IconBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  /* background-color: #30336b; */
  margin-right: 8px;
`;
