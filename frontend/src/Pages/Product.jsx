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
import { useEffect } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { BsStar } from "react-icons/bs";
import {FaRegCommentAlt} from "react-icons/fa";

const productDetail = {
  img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/362ab4d7-6228-4d21-a4f5-215c1c6ce6b7/dfzuxvn-a7429e11-5079-48de-a1c8-c9552d9dbf32.png/v1/fill/w_900,h_900,q_80,strp/a_colorful_card_featuring_a_female_character_by_aiphotos123_dfzuxvn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMzYyYWI0ZDctNjIyOC00ZDIxLWE0ZjUtMjE1YzFjNmNlNmI3XC9kZnp1eHZuLWE3NDI5ZTExLTUwNzktNDhkZS1hMWM4LWM5NTUyZDlkYmYzMi5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.38aa_IMv0_SiwqYabydvuw-ZOI1-RjjhHOESG70aTDE",
  user: "aiphoto",
  price: "1999",
  like: "200",
  comment: "10",
  views: "600",
};

export default function Product() {
  useEffect(() => {
    localStorage.setItem("productDetails", JSON.stringify(productDetail));
  }, []);

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
              src={productDetail.img}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
          
           <Box className="add_favorite">
           <BsStar/>
          <Text className="add_to_favorite">Add To Favorite</Text>
          <FaRegCommentAlt className="comment"/>
          <Text >Comment</Text>
           </Box>

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
                 A colourful card featuring a female character by aiphotos.
                </Text>
                <Box display={'flex'} gap={'10px'}>
                <Button >
                ai
                </Button>
                <Button>
                bird
                </Button>
                <Button>
                card
                </Button>
                <Button>
                character
                </Button>
                <Button>
               colorful
                </Button>
                <Button>
               elaborate
                </Button>
                <Button>
                    female
                </Button>
                <Button>
                 paper
                </Button>
                <Button>
                people
                </Button>
                </Box>
                <Box display={'flex'} gap={'10px'}>
                <Button>
                das
                </Button>
                <Button>
                cyan
                </Button>
                <Button>
                sculptures
                </Button>
                <Button>
                sunil
                </Button>
                </Box>

              </VStack>
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
              {/* <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Between lugs:
                    </Text>{" "}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Bracelet:
                    </Text>{" "}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Case:
                    </Text>{" "}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Case diameter:
                    </Text>{" "}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Dial color:
                    </Text>{" "}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Crystal:
                    </Text>{" "}
                    Domed, scratch‑resistant sapphire crystal with
                    anti‑reflective treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Water resistance:
                    </Text>{" "}
                    5 bar (50 metres / 167 feet){" "}
                  </ListItem>
                </List>
              </Box> */}
            </Stack>

            <Button display={'flex'} margin={'auto'}
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
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>3-4 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </div>
  );
}
