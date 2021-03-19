import styled from "styled-components";
import { shade } from "polished";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      180deg,
      var(--dark-primary) 0%,
      var(--dark-primary) 52.34%,
      var(--soft-primary) 100%
    ),
    linear-gradient(0deg, var(--text), var(--text));

  header {
    width: 70%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 48px;
      color: var(--text);
      font-weight: bold;
      letter-spacing: 2px;
    }

    .fi-log {
      width: 40px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      background-color: lightblue;
      box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      color: #3498db;
      transition: all 200ms ease-in;
      &:hover {
        background-color: ${shade(0.1, "lightblue")};
      }
    }
  }

  img {
    width: 900px;
  }
`;
