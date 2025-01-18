import { Button, Flex, Text } from "@chakra-ui/react";

const Compliance = () => {
  return (
    <>
      <Flex pt={"10px"} direction={"column"} gap={"40px"}>
        <Flex
          width={"100%"}
          height={"100%"}
          bgColor={"#FFFFFF"}
          p={"20px"}
          direction={"column"}
          gap={"20px"}
          borderRadius={"8px"}
        >
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={700}
            fontSize={"16px"}
            color={"#000000"}
          >
            DIRECTOR INFORMATION
          </Text>
          <Flex gap={"400px"}>
            <Flex direction={"column"} gap={"25px"}>
              <Flex direction={"column"} gap={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#000000"}
                >
                  First Name
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={800}
                  fontSize={"16px"}
                  color={"#000000"}
                >
                  WILLIAMS
                </Text>
              </Flex>
              <Flex direction={"column"} gap={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#000000"}
                >
                  Last Name
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={800}
                  fontSize={"16px"}
                  color={"#000000"}
                >
                  ADEYEMI
                </Text>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={"25px"}>
              <Flex direction={"column"} gap={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#000000"}
                >
                  Bank Verification Number
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={800}
                  fontSize={"16px"}
                  color={"#000000"}
                >
                  225*******456
                </Text>
              </Flex>
              <Flex direction={"column"} gap={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#000000"}
                >
                  Phone Number
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={800}
                  fontSize={"16px"}
                  color={"#000000"}
                >
                  09065512525
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex>
            <Button
              bgColor="#FC0C0C"
              width={"90px"}
              height={"40px"}
              color={"#FFFFFF"}
              fontFamily={"Nunito Sans"}
              fontWeight={600}
              fontSize={"14px"}
              type="submit"
            >
              EDIT
            </Button>
          </Flex>
        </Flex>

        <Flex
          width={"100%"}
          height={"100%"}
          bgColor={"#FFFFFF"}
          p={"20px"}
          direction={"column"}
          gap={"20px"}
          borderRadius={"8px"}
        >
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={700}
            fontSize={"16px"}
            color={"#000000"}
          >
            BUSINESS INFORMATION
          </Text>
          <Flex gap={"300px"}>
            <Flex direction={"column"} gap={"25px"}>
              <Flex direction={"column"} gap={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#000000"}
                >
                  Tax Identification Number
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={800}
                  fontSize={"16px"}
                  color={"#000000"}
                >
                  1003-0456-0967
                </Text>
              </Flex>
              <Flex direction={"column"} gap={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#000000"}
                >
                  CAC Document
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"16px"}
                  color={"#FC0C0C"}
                  textDecoration={"underline"}
                >
                  CAC File.pdf
                </Text>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={"25px"}>
              <Flex direction={"column"} gap={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#000000"}
                >
                  Business Address
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={800}
                  fontSize={"16px"}
                  color={"#000000"}
                >
                  28, Isaac John Street, Ikeja, Lagos State
                </Text>
              </Flex>
              <Flex direction={"column"} gap={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"16px"}
                  color={"#000000"}
                >
                  Utility Bill
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"16px"}
                  color={"#FC0C0C"}
                  textDecoration={"underline"}
                >
                  utility billt.docx
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex>
            <Button
              bgColor="#FC0C0C"
              width={"90px"}
              height={"40px"}
              color={"#FFFFFF"}
              fontFamily={"Nunito Sans"}
              fontWeight={600}
              fontSize={"14px"}
              type="submit"
            >
              EDIT
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Compliance;
