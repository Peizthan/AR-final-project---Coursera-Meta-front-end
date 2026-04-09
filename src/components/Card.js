import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      color="black"
      backgroundColor="white"
      borderRadius="xl"
      overflow="hidden"
      alignItems="flex-start"
      spacing={0}
    >
      <Image src={imageSrc} alt={title} />

      <VStack alignItems="flex-start" spacing={4} p={6}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>

        <HStack spacing={2}>
          <Text fontWeight="bold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
