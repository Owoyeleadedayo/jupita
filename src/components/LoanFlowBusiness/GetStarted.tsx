import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Logo from '../../assets/Images/mfbLogo.png'
import Logo11 from "../../assets/Images/JupitaLogo.png";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();
  const goToNextPage = () => {
    navigate('/loan-login')
  }
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        bgColor={"#FFFFFF"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        gap={{ md: "100px", lg: "250px", xl: "160px" }}
      >
        <Flex
          flexDirection={"column"}
          gap={"10px"}
          pt={"100px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box>
            <Box width={"300px"} height={"50px"}>
              <Image src={Logo} width={"100%"} height={"100%"} />
            </Box>
          </Box>
          <Flex>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={700}
              fontSize={{ md: "30px", lg: "40px", xl: "40px" }}
              color={"#000000"}
            >
              Welcome to Sly Microfinance Bank
            </Text>
          </Flex>
          <Flex width={"280px"}>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={400}
              fontSize={"24px"}
              color={"#000000"}
              textAlign={"center"}
            >
              Get up to 5 Million Naira in less than 5 minutes
            </Text>
          </Flex>
          <Flex pt={{ md: "30px", lg: "35px", xl: "40px" }}>
            <Button
              width={"400px"}
              height={"50px"}
              variant={'none'}
              bgColor={"#2261B0"}
              fontFamily={"Nunito Sans"}
              fontWeight={700}
              fontSize={"20px"}
              color={"#FFFFFF"}
              onClick={goToNextPage}
            >
              GET STARTED
            </Button>
          </Flex>
        </Flex>
        <Flex gap={"5px"}>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={400}
            fontSize={"20px"}
            color={"#000000"}
          >
            Powered by
          </Text>
          <Box width={"104px"} height={"28px"}>
            <Image src={Logo11} width={"100%"} height={"100%"} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default GetStarted;
