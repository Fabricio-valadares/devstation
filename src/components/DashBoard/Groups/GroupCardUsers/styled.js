import { FaEdit } from "react-icons/fa";
import { FiInfo, FiTag } from "react-icons/fi";
import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;

  color: var(--text);

  justify-content: space-around;
  padding: 1rem;

  #info {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  div h3#category {
    display: flex;
    align-items: center;
    margin-top: 4px;
  }

  div h3#category,
  div h3#description {
    font-size: 1.1rem;
    font-weight: bold;
  }
  div h3#description span,
  div h3#category span {
    font-size: 1rem;
    font-weight: normal;
  }
`;

export const Margin = styled.div`
  margin-bottom: 1rem;
`;

export const GroupName = styled.div`
  display: flex;
  align-items: center;

  h3 {
    display: flex;
    align-items: center;
  }
  h4 {
    color: var(--text);
  }
`;

export const GroupIcon = styled(FiInfo)`
  width: 24px;
  height: 24px;
  color: #dff9fb;
  margin-right: 4px;
`;

export const CategoryIcon = styled(FiTag)`
  color: #f0932b;
  margin-right: 4px;
  width: 24px;
  height: 24px;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--secondary);
    margin-bottom: 24px;
  }
`;

export const EditIcon = styled(FaEdit)`
  color: var(--secondary);
  font-size: 18px;
`;

export const CardUsers = styled.div`
  @media (max-width: 500px) {
    display: none;
  }

  background-color: var(--soft-primary);

  padding: 1rem;

  font-size: 1rem;
  width: 50%;
  height: 100%;

  transition: 0.3s;
  border-radius: 3%;

  figure {
    position: relative;
    &:after {
      position: absolute;
      bottom: 0;
      right: 0;
      content: "";
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 2px solid #fff;
      background-color: var(--green-bar);
    }
  }

  figure img {
    width: 3.6rem;
  }

  overflow-y: auto;
  ::-webkit-scrollbar-track {
    background-color: var(--soft-primary);
  }
  ::-webkit-scrollbar {
    width: 8px;
    background: var(--dark-primary);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--dark-primary);
    border-radius: 5px;
  }
`;

export const UserDiv = styled.div`
  margin: 1rem;
`;

export const UserCardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 14px;
  @media (max-width: 1000px) {
    font-size: 0.8rem;
  }
`;
