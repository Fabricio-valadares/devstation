import React from "react";

import { Main } from "./styles";

const Container = ({ children }) => {
  return (
    <Main>
      <h1 style={{ color: "#fff" }}>{children}</h1>
    </Main>
  );
};

export default Container;
