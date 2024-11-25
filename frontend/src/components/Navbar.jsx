import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { FaSun } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import CreateUser from "./CreateUser";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"900px"}>
      <Box
        px={4}
        my={4}
        borderRadius={5}
        bg={useColorModeValue("gray.200", "gray.700")}
      >
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          {/* left */}
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={3}
            display={{ base: "none", sm: "flex" }}
          >
            <img src="/react.png" alt="React logo" width={50} height={50} />
            <Text fontSize={"40px"}>+</Text>
            <img src="/python.png" alt="Python logo" width={50} height={40} />
            <Text fontSize={"40px"}>=</Text>
            <img src="/explode.png" alt="Explode emoji" width={45} height={4} />
          </Flex>
          {/* Right */}
          <Flex gap={3} alignItems={"center"}>
            <Text
              fontSize={"lg"}
              fontWeight={500}
              display={{ base: "none", sm: "flex" }}
            >
              BFFship 🔥
            </Text>
            <Button onClick={toggleColorMode}>
              {colorMode == "light" ? <FaSun /> : <IoMoon />}
            </Button>
            <CreateUser></CreateUser>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;
