import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

import { Container, ContainerFlex } from "./styled";
export const SkeletonGoals = () => {
  return (
    <Container>
      <div style={{ margin: "1rem auto" }}>
        <ContainerFlex>
          <Skeleton variant="text" width={80} />
          <Skeleton variant="text" width={15} height={20} />
        </ContainerFlex>
        <div>
          <Skeleton variant="text" width={80} />
          <Skeleton variant="text" width="100%" />
        </div>
      </div>
      <div style={{ margin: "1rem auto" }}>
        <ContainerFlex>
          <Skeleton variant="text" width={80} />
          <Skeleton variant="text" width={15} height={20} />
        </ContainerFlex>
        <div>
          <Skeleton variant="text" width={80} />
          <Skeleton variant="text" width="100%" />
        </div>
      </div>
    </Container>
  );
};
