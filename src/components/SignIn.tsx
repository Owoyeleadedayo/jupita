import { Box, Button, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import Logo from '../assets/Images/jupita2.png';
import DT from '../assets/Images/signin.png'

const SignIn = () => {
  return (
    <>
      <Flex width={"100%"} height={"100vh"} flexDirection={"row"}>
        <Flex
          display={{ lg: "flex", base: "none" }}
          width={{ lg: "100%", base: "none" }}
          height={"100%"}
          bgGradient={
            "linear-gradient(to bottom, rgba(212, 106, 53, 1), rgba(110, 55, 28, 1))"
          }
          flexDirection={"column"}
        >
          <Flex>
            <Flex
              width={"60px"}
              height={"60px"}
              bgColor={"white"}
              borderRadius={"50%"}
              m={"30px"}
              position={"relative"}
            />
            <Image
              src={Logo}
              alt="Logo"
              width={"180px"}
              h={"88px"}
              position={"absolute"}
              mt={"20px"}
              ml={"5px"}
            />
            <Text
              color={"white"}
              mt={"60px"}
              fontFamily={"Nunito Sans"}
              fontSize={"20px"}
              fontWeight={600}
              position={"absolute"}
              ml={"90px"}
            >
              Jupita
            </Text>
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Image
              src={DT}
              alt="desktop"
              width={"543px"}
              height={"440px"}
              mx={"auto"}
            />
            <Text color={"white"} fontFamily={"Nunito Sans"}>
              Africa’s Leading Credit as a Platform Solution
            </Text>
          </Flex>
        </Flex>
        <Flex
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          p={{ lg: "100px", md: "100px", base: "20px" }}
        >
          <Box
            width={"100%"}
            maxWidth={{ lg: "650px", md: "650px", base: "800px" }}
            mx={"auto"}
          >
            <Flex flexDirection={"column"} gap={"10px"}>
              <Heading
                as={"h1"}
                fontFamily={"Nunito Sans"}
                fontSize={"18px"}
                fontWeight={"bold"}
                textTransform={"capitalize"}
              >
                welcome back
              </Heading>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"16px"}
                textTransform={"capitalize"}
              >
                login to jupita admin
              </Text>
            </Flex>
            <Flex flexDirection={"column"} pt={"25px"} gap={"10px"}>
              <Flex flexDirection={"column"} gap={2}>
                <Text fontFamily={"Nunito Sans"} fontWeight={500} fontSize={"16px"}>
                  Email
                </Text>
                <Input
                  type={"email"}
                  placeholder={"Your email address"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                />
              </Flex>
              <Flex flexDirection={"column"} gap={2}>
                <Text fontFamily={"Nunito Sans"} fontWeight={500} fontSize={"16px"}>
                  Password
                </Text>
                <Input
                  type={"password"}
                  placeholder={"Your email address"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                />
              </Flex>
            </Flex>
            <Button
              width={"100%"}
              maxWidth={{ lg: "650px", md: "650px", base: "800px" }}
              mx={"auto"}
              mt={"30px"}
              bgColor={"rgba(212, 106, 53, 1)"}
              color={"white"}
              textTransform={"uppercase"}
              fontFamily={"Nunito Sans"}
              _hover={{
                bg: "#f1f2f3",
                color: "rgba(212, 106, 53, 1)",
                border: "1px solid rgba(212, 106, 53, 1)",
              }}
            >
              Sign In
            </Button>
            <Text
              textAlign={"center"}
              mt={"20px"}
              fontFamily={"Nunito Sans"}
              color={"rgba(212, 106, 53, 1)"}
              fontSize={"14px"}
              fontWeight={500}
              cursor={"pointer"}
            >
              Forgot Password?
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default SignIn;
