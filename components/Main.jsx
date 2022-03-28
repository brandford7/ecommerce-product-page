import {
  Grid,
  GridItem,
  chakra,
  Img,
  Container,
  Flex,Button,
  Box,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { activeImages, images as data } from "../images";
activeImages
import QuantityButton from "./QuantityButton";

const Main = () => {
  const [images, setImages] = useState(data);
  const [activeImage, setActiveImage] = useState(activeImages[0]);

  const showNextImage = (e) => {
    e.stopPropagation();

    let currentIndex = activeImages.indexOf(activeImage);

    let nextImage = activeImages[currentIndex + 1];

    setActiveImage(nextImage);
  };

  const showActiveImage = (e) => {
    let currentIndex = activeImages.indexOf(activeImage);
    setActiveImage(activeImage[currentIndex])
    console.log()
  }

  return (
    <>
      <chakra.main h="100%" mt="">
        <Container maxW="container.xl">
          <Stack direction="row" spacing="150px">
            <Box display="flex" flexDirection="column" mt="100px">
              <Box mb="20px">
                <Img
                  src={activeImage}
                  alt="image-1"
                  h="450px"
                  w="450px"
                  borderRadius="10px"
                />
                <Button onClick={showNextImage}>⭢</Button>
              </Box>
              <Grid templateColumns="repeat(4,1fr)" gap="4">
                {images.map((image) => (
                  <GridItem key={image.id} cursor="pointer" onClick={showActiveImage}>
                    <Img src={image.img} h="100px" borderRadius="10px" />
                  </GridItem>
                ))}
              </Grid>
            </Box>
            <Stack direction="column" spacing="10">
              <Heading fontSize="16px" mt="150px" color="hsl(26, 100%, 55%)">
                SNEAKER COMPANY
              </Heading>
              <Heading>
                Fall Limited Edition
                <br /> Sneakers
              </Heading>
              <Box>
                <Text
                  fontSize="16px"
                  verticalAlign="middle"
                  color="hsl(219, 9%, 45%)"
                >
                  These low profile sneakers are your perfect casual wear
                  <br />
                  companions. Featuring a durable rubber outer sole, they'll{" "}
                  <br />
                  withstand everything the weather can offer.
                </Text>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="700">
                  $125.00
                  <chakra.span ml="10" font color="hsl(26, 100%, 55%)">
                    50%
                  </chakra.span>
                </Text>
                <Text
                  fontSize="16px"
                  fontWeight="700"
                  color="hsl(220, 14%, 75%)"
                >
                  <del> $250.00</del>
                </Text>
              </Box>
              <Box>
                <QuantityButton />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </chakra.main>
    </>
  );
};

export default Main;
