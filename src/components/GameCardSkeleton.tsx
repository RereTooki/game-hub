import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card
      width={{
        sm: "465px",
        md: "350px",
        lg: "280px",
        xl: "240px",
        "2xl": "450px",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
