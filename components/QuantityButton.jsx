import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const QuantityButton = () => {
  return (
    <>
      <Flex>
        <Button px="12" spacing='5'>
          <Text>+</Text>
          <Text>0</Text>
          <Text>-</Text>
        </Button>
      </Flex>
    </>
  );
};

export default QuantityButton;
