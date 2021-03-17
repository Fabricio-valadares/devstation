import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

import { ContainerFlex } from "./styled";
export const SkeletonActivities = () => {
  return (
    <>
      <ContainerFlex>
        <Skeleton variant="circle" width={50} height={50} />
        <div>
          <ContainerFlex>
            <Skeleton variant="text" width={80} />
            <Skeleton variant="text" width={15} height={20} />
          </ContainerFlex>
          <div>
            <Skeleton variant="text" width={80} />
          </div>
        </div>
      </ContainerFlex>
      <ContainerFlex>
        <Skeleton variant="circle" width={50} height={50} />
        <div>
          <ContainerFlex>
            <Skeleton variant="text" width={80} />
            <Skeleton variant="text" width={15} height={20} />
          </ContainerFlex>
          <div>
            <Skeleton variant="text" width={80} />
          </div>
        </div>
      </ContainerFlex>
      <ContainerFlex>
        <Skeleton variant="circle" width={50} height={50} />
        <div>
          <ContainerFlex>
            <Skeleton variant="text" width={80} />
            <Skeleton variant="text" width={15} height={20} />
          </ContainerFlex>
          <div>
            <Skeleton variant="text" width={80} />
          </div>
        </div>
      </ContainerFlex>
    </>
  );
};
