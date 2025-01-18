import { Box, Button, Divider, Flex, FormControl, FormLabel, Image, Input, Text } from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Logo11 from "../../assets/Images/JupitaLogo.png";
import { useNavigate } from "react-router-dom";

const LoanInfo = () => {
    const navigate = useNavigate()
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        py={"10px"}
        direction={"column"}
        bgColor={"#FFFFFF"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex width={"500px"} direction={"column"} gap={"50px"}>
          <Flex direction={"column"}>
            <Flex
              py={"10px"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              gap={"5px"}
            >
              <Flex
                onClick={() => {
                  navigate(-1);
                }}
                cursor={"pointer"}
              >
                <IoMdArrowRoundBack fontSize={"22px"} color="#2261B0" />
              </Flex>
              <Flex>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  Back
                </Text>
              </Flex>
            </Flex>
            <Divider
              color={"#2261B0"}
              width={"100px"}
              border={"1px solid #2261B0"}
            />
          </Flex>
          <Flex
            px={"20px"}
            py={"10px"}
            borderRadius={"8px"}
            direction={"column"}
            width={"450px"}
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
          >
            <Flex direction={"column"} gap={"20px"}>
              <Flex>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"16px"}
                  color={"#000000"}
                >
                  LOAN INFORMATION
                </Text>
              </Flex>
              <Flex>
                <FormControl>
                  <FormLabel
                    fontFamily={"Nunito Sans"}
                    fontWeight={600}
                    fontSize={"16px"}
                    color={"#000000"}
                  >
                    Desired Amount
                  </FormLabel>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={600}
                    fontSize={"14px"}
                    color={"#979797"}
                    pb={"5px"}
                  >
                    Tell us how much you need
                  </Text>
                  <Input
                    width={"400px"}
                    height={"50px"}
                    variant={"none"}
                    bgColor={"#F6F6F6"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={600}
                    fontSize={"16px"}
                    color={"#000000"}
                    pb={"5px"}
                  />
                </FormControl>
              </Flex>
              <Flex>
                <FormControl>
                  <FormLabel
                    fontFamily={"Nunito Sans"}
                    fontWeight={600}
                    fontSize={"16px"}
                    color={"#000000"}
                  >
                    Desired Tenor
                  </FormLabel>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={600}
                    fontSize={"14px"}
                    color={"#979797"}
                    pb={"5px"}
                  >
                    Tell us how long you need the loan for
                  </Text>
                  <Input
                    width={"400px"}
                    height={"50px"}
                    variant={"none"}
                    bgColor={"#F6F6F6"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={600}
                    fontSize={"16px"}
                    color={"#000000"}
                    pb={"5px"}
                  />
                </FormControl>
              </Flex>
              <Flex>
                <FormControl>
                  <FormLabel
                    fontFamily={"Nunito Sans"}
                    fontWeight={600}
                    fontSize={"16px"}
                    color={"#000000"}
                  >
                    Loan Purpose
                  </FormLabel>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={600}
                    fontSize={"14px"}
                    color={"#979797"}
                    pb={"5px"}
                  >
                    Tell us how long you need the loan for
                  </Text>
                  <Input
                    width={"400px"}
                    height={"50px"}
                    variant={"none"}
                    bgColor={"#F6F6F6"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={600}
                    fontSize={"16px"}
                    color={"#000000"}
                    pb={"5px"}
                  />
                </FormControl>
              </Flex>
            </Flex>
            <Flex pt={"40px"} pb={"20px"}>
              <Button
                width={"400px"}
                height={"50px"}
                variant={"none"}
                bgColor={"#FC0C0C"}
                fontFamily={"Nunito Sans"}
                fontWeight={600}
                fontSize={"16px"}
                color={"#FFFFFF"}
                onClick={() => {
                  navigate("/director");
                }}
              >
                Continue
              </Button>
            </Flex>
          </Flex>
          <Flex pt={"50px"} pl={"100px"} gap={"5px"}>
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
}

export default LoanInfo;
