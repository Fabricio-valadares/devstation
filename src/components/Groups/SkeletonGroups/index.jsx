import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

import { Container, ContainerFlex } from "./styled";
export const SkeletonGroups = () => {
  return (
    <Container>
      <ContainerFlex>
        <Skeleton variant="text" width="50%" height={60} />
        <Skeleton variant="text" width="10%" height={60} />
      </ContainerFlex>
      <ContainerFlex>
        <Skeleton variant="text" width="50%" height={60} />
        <Skeleton variant="text" width="10%" height={60} />
      </ContainerFlex>
      <ContainerFlex>
        <Skeleton variant="text" width="50%" height={60} />
        <Skeleton variant="text" width="10%" height={60} />
      </ContainerFlex>
    </Container>
  );
};
