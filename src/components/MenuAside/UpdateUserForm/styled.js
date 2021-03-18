import styled from "styled-components";
import {
  FiInfo,
  FiSave,
  FiAlertTriangle,
  FiX,
  FiAlertOctagon,
} from "react-icons/fi";

export const FormContainer = styled.div`
  flex-direction: column;
  max-width: 30vw;
  margin: 0 auto;
`;

export const DeleteButton = styled.button`
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
  border: 2px solid #ff5252;

  &:hover {
    background-color: #ff5252;
  }
`;

export const DeleteIcon = styled(FiAlertOctagon)`
  color: #ff5252;
  width: 80%;
  height: 80%;
`;

export const Main = styled.article`
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

    @media (max-width: 990px) {
      font-size: 20px;
    }
  }
`;

export const InputsContainer = styled.form`
  width: 100%;

  height: auto;
`;

export const InputBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const IconBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 8px;
`;

export const InfoIcon = styled(FiInfo)`
  color: #dff9fb;
  width: 80%;
  height: 80%;
`;

export const ErrorIcon = styled(FiAlertTriangle)`
  color: #ff5252;
  width: 80%;
  height: 80%;
`;

export const CloseIcon = styled(FiX)`
  color: #ff5252;
  width: 80%;
  height: 80%;
`;

export const SaveIcon = styled(FiSave)`
  color: #1dd1a1;
  width: 80%;
  height: 80%;
`;

export const Input = styled.input`
  width: 90%;
  height: 40px;
  background-color: #30336b;
  border-radius: 8px;
  padding: 8px 16px;
  box-sizing: border-box;
  font-size: 18px;
  color: white;
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
  border: 2px solid #1dd1a1;

  &:hover {
    background-color: #1dd1a1;
  }
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
