import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

import { Container, ContainerFlex } from "./styled";
export const SkeletonHabits = () => {
  return (
    <>
      <Container>
        <ContainerFlex>
          <Skeleton>
            <h1>Titulo Habito</h1>
          </Skeleton>
          <Skeleton variant="text" width={15} height={20} />
        </ContainerFlex>
        <div style={{ margin: "1rem auto" }}>
          <ContainerFlex>
            <Skeleton>
              <h3>Categoria: </h3>
            </Skeleton>
            <Skeleton>
              <span>Dificuldade</span>
            </Skeleton>
          </ContainerFlex>
          <ContainerFlex>
            <Skeleton>
              <h1>Programação</h1>
            </Skeleton>
            <Skeleton>
              <h1>Médio</h1>
            </Skeleton>
          </ContainerFlex>
          <div>
            <Skeleton variant="text" width="100%" />
          </div>
        </div>
      </Container>
      <Container>
        <ContainerFlex>
          <Skeleton>
            <h1>Titulo Habito</h1>
          </Skeleton>
          <Skeleton variant="text" width={15} height={20} />
        </ContainerFlex>
        <div style={{ margin: "1rem auto" }}>
          <ContainerFlex>
            <Skeleton>
              <h3>Categoria: </h3>
            </Skeleton>
            <Skeleton>
              <span>Dificuldade</span>
            </Skeleton>
          </ContainerFlex>
          <ContainerFlex>
            <Skeleton>
              <h1>Programação</h1>
            </Skeleton>
            <Skeleton>
              <h1>Médio</h1>
            </Skeleton>
          </ContainerFlex>
          <div>
            <Skeleton variant="text" width="100%" />
          </div>
        </div>
      </Container>
    </>
  );
};
