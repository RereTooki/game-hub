import { Card, HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Card marginY="10px" paddingY="2px">
      <HStack>
        <SkeletonCircle size="8" borderRadius={10} />
        <SkeletonText noOfLines={1}>AAAAAAAA</SkeletonText>
      </HStack>
    </Card>
  );
};

export default GenreListSkeleton;
