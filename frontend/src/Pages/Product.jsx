import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  flexbox,
} from "@chakra-ui/react";
import { useEffect,useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { MdLocalShipping } from "react-icons/md";
import { BsStar } from "react-icons/bs";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import Footer from "./Shop.home/Footer";
import Header from "../Components/Header";

export default function Product() {

  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8800/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setArts(res))
      .catch((err) => console.log(err));
  }, []);

  const location = useLocation();
  const { data } = location.state;

  useEffect(() => {
    localStorage.setItem("productDetails", JSON.stringify(data));
  }, []);

  console.log("data", data);

  return (
    <div>
      <Container maxW={"10xl"} bg={useColorModeValue("gray.900", "gray.50")}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
          bg={useColorModeValue("gray.900", "gray.50")}
          color={"white"}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={data.img}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
          <div className="title">{data.title} by {data.user}</div>
            <Text fontSize={"20px"}>Rs. {data.price}</Text>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"1xl"}
                  fontWeight={"700"}
                >
                  {data.desc}
                </Text>
                <Box display={"flex"} gap={"10px"}>
                  <Button>ai</Button>
                  <Button>bird</Button>
                  <Button>card</Button>
                  <Button>character</Button>
                  <Button>colorful</Button>
                  <Button>elaborate</Button>
                  <Button>female</Button>
                  <Button>paper</Button>
                  <Button>people</Button>
                </Box>
                <Box display={"flex"} gap={"10px"}>
                  <Button>das</Button>
                  <Button>cyan</Button>
                  <Button>sculptures</Button>
                </Box>
              </VStack>
              <Box className="add_favorite">
              <div className="product_icons">
                <BsStar />
                <Text>Add To Favorite</Text>
              </div>
              <div className="product_icons">
                <FaRegCommentAlt />
                <Text>Comment</Text>
              </div>
              <div className="product_icons">
                <AiOutlineLike />
                <Text>Like</Text>
              </div>
            </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Image details
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Image size</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>1024*102px1.64MB</ListItem>
                  </List>
                  {/* <Box w={'70%'} display={'flex'} margin={'auto'}>Creative Commons Attribution 3.0 License</Box> */}
                </SimpleGrid>
              </Box>
            </Stack>
            <RouterLink to="/checkout">
              <Button
                display={"flex"}
                margin={"auto"}
                rounded={"15px"}
                w={"20%"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg={useColorModeValue("white", "gray.900")}
                color={useColorModeValue("gray.900", "gray.50")}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
              >
                Checkout
              </Button>
            </RouterLink>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
              className="shopping_icon"
            >
              <MdLocalShipping />
              <div >3-4 business days delivery</div>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Header/>

      <div className="image-grid">
      {arts.map((el) => (
        <div className="image-item" key={el._id}>
          <RouterLink  to={`/product/${el._id}`} state={{ data: el }}>
         <img src={el.img} alt={el.img} />
          </RouterLink>
        </div>
      ))}
    </div>

    <Footer />

    </div>
  );
}
