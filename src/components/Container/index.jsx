import React from "react";

import { Main } from "./styles";

const Container = ({ children }) => {
  return (
    <Main>
      <div style={{ color: "#fff" }}>{children}</div>
    </Main>
  );
};

export default Container;
