import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/Images/JupitaLogo.png";
import mail from "../assets/Images/mail.png";

const EmailVerification = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100vh"}
        bgColor={"#F6F6F6"}
        py={"20px"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        gap={"20px"}
      >
        <Flex width={"119px"} height={"32px"}>
          <Image src={Logo} alt={"logo"} width={"100%"} height={"100%"} />
        </Flex>
        <Flex pt={"50px"} direction={"column"} gap={"20px"}>
          <Flex direction={"column"}>
            <Heading
              fontFamily={"Nunito Sans"}
              fontSize={"24px"}
              fontWeight={600}
              color={"#000000"}
              textAlign={"center"}
            >
              Email Verification
            </Heading>
            <Text
              fontFamily={"Nunito Sans"}
              fontSize={"14px"}
              fontWeight={600}
              color={"#000000"}
              textAlign={"center"}
            >
              Thank you for signing up for a Jupita account.
            </Text>
          </Flex>
          <Box
            width={"370px"}
            height={"320px"}
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
                <Image src={mail} alt={"logo"} width={"100%"} height={"100%"} />
              </Flex>

              <Flex direction={"column"} gap={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={600}
                  color={"#000000"}
                  textAlign={"center"}
                >
                  Verify your email address
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"#000000"}
                  textAlign={"center"}
                >
                  Verification email has been sent to:wadeyemi@getjupita.com
                </Text>
              </Flex>
              <Flex pt={"20px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"13px"}
                  fontWeight={400}
                  color={"#000000"}
                  textAlign={"center"}
                >
                  Click on the link in the email to activate your account.
                </Text>
              </Flex>
              <Flex pt={"20px"} gap={"3px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"13px"}
                  fontWeight={400}
                  color={"#979797"}
                  textAlign={"center"}
                >
                  Didn’t receive the email?
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"13px"}
                  fontWeight={700}
                  color={"#D46A35"}
                  textAlign={"center"}
                >
                  Click here to resend
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default EmailVerification;
