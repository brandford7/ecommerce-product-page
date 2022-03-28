import { Box, chakra, Grid, GridItem, Img } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Box h="100vh" w="100vw" bg="white">
        <Head>
          <title>Ecommerce product-page</title>
          <meta name="description" content="A frontend mentor challenge" />
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>

        <Header />
        <Main/>
      </Box>
    </>
  );
}
