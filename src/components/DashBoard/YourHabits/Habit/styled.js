import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { FiBookmark, FiTag, FiBarChart } from "react-icons/fi";
import { HiOutlineFire } from "react-icons/hi";

export const InfoIcon = styled(FiBookmark)`
  color: #dff9fb;
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const TagIcon = styled(FiTag)`
  color: #f0932b;
  width: 23px;
  height: 23px;
  margin-right: 4px;
`;

export const BarIcon = styled(FiBarChart)`
  color: var(--red-bar);
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const FireIcon = styled(HiOutlineFire)`
  color: #f9ca24;
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const Card = styled.div`
  & + div {
    margin-top: 28px;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;

  h4 {
    font-size: 18px;
    font-weight: 500;
    color: var(--text);
    display: flex;
    margin-bottom: 4px;
  }

  button {
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background-color: transparent;
  }
`;

export const EditIcon = styled(FaEdit)`
  color: var(--secondary);
  font-size: 18px;
`;

export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text);
  margin-bottom: 14px;
  p {
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  span {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }
`;

export const ProgressBox = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  align-items: center;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 14px;
  background-color: var(--soft-primary);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => `${props.progress}%`};
    background-color: ${(props) =>
      props.progress <= 30
        ? "#FF5252"
        : props.progress <= 70
        ? "#FFDA79"
        : "#1DD1A1"};
    border-radius: 14px;
  }
`;
