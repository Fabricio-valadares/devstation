import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

import { Container, ContainerFlex } from "./styled";
export const SkeletonGroup = () => {
  return (
    <Container>
      <ContainerFlex>
        <Skeleton animation="wave" variant="circle" width={40} height={40} />
        <div>
          <Skeleton variant="text" width={80} />
          <Skeleton variant="text" width={150} />
        </div>
      </ContainerFlex>
      <ContainerFlex>
        <Skeleton variant="circle" width={40} height={40} />
        <div>
          <Skeleton variant="text" width={80} />
          <Skeleton variant="text" width={150} />
        </div>
      </ContainerFlex>
    </Container>
  );
};

export const SkeletonGroupName = () => {
  return (
    <ContainerFlex>
      <Skeleton style={{ marginRight: "1rem" }} variant="text" width={70} />
      <Skeleton variant="text" height={20} width={20} />
    </ContainerFlex>
  );
};

export const SkeletonGroupCategory = () => {
  return (
    <ContainerFlex>
      <Skeleton style={{ marginRight: "1rem" }} variant="text" width={70} />
      <Skeleton variant="text" width={70} />
    </ContainerFlex>
  );
};
