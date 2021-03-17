import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

import { Container, ContainerFlex } from "./styled";
export const SkeletonUser = () => {
  return (
    <Container>
      <ContainerFlex>
        <Skeleton>
          <h1>Titulo Habito</h1>
        </Skeleton>
      </ContainerFlex>
      <Skeleton>
        <h1>seuemail@email.com</h1>
      </Skeleton>
      <ContainerFlex>
        <Skeleton variant="circle" height={30} width={30} />
        <Skeleton variant="circle" height={30} width={30} />
      </ContainerFlex>
    </Container>
  );
};
