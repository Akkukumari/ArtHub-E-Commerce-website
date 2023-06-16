import react from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Navbar.css";

import {
  Box,
  Flex,
  Image,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, BellIcon } from "@chakra-ui/icons";

const NavLink = ({ children }) => (
  <Link className="navbar_link"
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("black", "black"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("black", "black")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Image
              w="10%"
              // src="https://drive.google.com/file/d/1rczXE7kUg27GHBeS1k8hukBiohfkWeo1/view?usp=sharing"
            />
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink>For You</NavLink>
              <NavLink>Shop</NavLink>
              <NavLink>Discover</NavLink>
              <NavLink>Live</NavLink>
              <NavLink>Hire</NavLink>
              <NavLink>Jobs</NavLink>
              <NavLink>Sale</NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
           <Menu className="icons">

           <BellIcon w={8} h={8} color="white" />
           
           <RouterLink to="/signup">
            <Button>SignUp </Button>
            </RouterLink>

            <RouterLink to="/login">
              <Button> LogIn</Button>
              </RouterLink>
              
           
            </Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              ></MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavLink>For You</NavLink>
              <NavLink>Shop</NavLink>
              <NavLink>Discover</NavLink>
              <NavLink>Live</NavLink>
              <NavLink>Hire</NavLink>
              <NavLink>Jobs</NavLink>
              <NavLink>Sale</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
