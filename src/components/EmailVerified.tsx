import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/Images/JupitaLogo.png";
import verified from "../assets/Images/verified.png";


const EmailVerified = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100vh"}
        bgColor={"#F6F6F6"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Flex width={"119px"} height={"32px"} mb={'100px'}>
          <Image src={Logo} alt={"logo"} width={"100%"} height={"100%"} />
        </Flex>
        <Flex  direction={"column"} gap={"20px"}>
          <Box
            width={"320px"}
            height={"290px"}
            bgColor={"#FFFFFF"}
            borderRadius={"8px"}
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
            p={"20px"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={"20px"}
            >
              <Flex width={"64px"} height={"64px"} mx={"auto"}>
                <Image
                  src={verified}
                  alt={"logo"}
                  width={"100%"}
                  height={"100%"}
                />
              </Flex>

              <Flex width={"250px"} direction={"column"} gap={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#000000"}
                  textAlign={"center"}
                >
                  Email Verified
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"#000000"}
                  textAlign={"center"}
                >
                  You’ve successfully confirmed your email. Sign in to continue.
                </Text>
              </Flex>
              <Flex pt={"20px"} gap={"3px"}>
                <Button
                  width={"135px"}
                  height={"40px"}
                  bgColor={"#2261B0"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#FFFFFF"}
                >
                  Sign in
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default EmailVerified;
