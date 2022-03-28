import {  chakra, Stack } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <chakra.nav w="100%" ml="80px" color="hsl(219, 9%, 45%)" fontSize='16px'>
        <Stack direction="row" spacing="10">
          <Link href="/collections">
            <a>Collections</a>
          </Link>
          <Link href="/collections">
            <a>Men</a>
          </Link>
          <Link href="/collections">
            <a>women</a>
          </Link>
          <Link href="/collections">
            <a>About</a>
          </Link>
          <Link href="/collections">
            <a>Contact</a>
          </Link>
        </Stack>
      </chakra.nav>
    </>
  );
};

export default NavBar;
