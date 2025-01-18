import {
  Box,
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import Logo11 from "../../assets/Images/JupitaLogo.png";
import Check from '../../assets/Images/check.png'



const LoanSubmitted = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100vh"}
        direction={"column"}
        bgColor={"#FFFFFF"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          width={"500px"}
          height={"100vh"}
          direction={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
          pt={"100px"}
        >
          <Flex
            px={"20px"}
            py={"30px"}
            borderRadius={"8px"}
            flexDirection={"column"}
            gap={"20px"}
            width={"450px"}
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
          >
            <Flex
              direction={"column"}
              gap={"15px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box width={"40px"} height={"40px"}>
                <Image src={Check} alt="check" width={"100%"} height={"100%"} />
              </Box>
              <Flex
                direction={"column"}
                pt={"10px"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"5px"}
              >
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={600}
                  color={"#000000"}
                >
                  Loan Application Submitted Successfully{" "}
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={600}
                  color={"#000000"}
                >
                  You will be contacted within
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={600}
                  color={"#000000"}
                >
                  2 hours
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <Button
                width={"100%"}
                height={"48px"}
                bgColor={"#FC0C0C"}
                variant={"none"}
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                color={"#FFFFFF"}
                fontWeight={700}
              >
                Close
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
      </Flex>
    </>
  );
};

export default LoanSubmitted;
