import { Box, Button, Checkbox, Flex, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/Images/JupitaLogo.png";

const SelectProduct = () => {
  return (
    <>
      <Flex p={"20px"} flexDirection={"column"}>
        <Flex width={"119px"} height={"32px"}>
          <Image src={Logo} alt={"logo"} width={"100%"} height={"100%"} />
        </Flex>
        <Flex pl={"130px"} py={"50px"} flexDirection={"column"} gap={"20px"}>
          <Text
            fontFamily={"Nunito Sans"}
            fontSize={"20px"}
            fontWeight={800}
            color={"#000000"}
          >
            SELECT PRODUCT
          </Text>
          <Flex flexDirection={"column"} gap={"30px"}>
            <Box
              width={"1000px"}
              height={"150px"}
              bgColor={"#FFFFFF"}
              boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
              p={"20px"}
              borderRadius={"8px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
            >
              <Flex>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"20px"}
                  fontWeight={800}
                  color={"#000000"}
                >
                  Loan Origination
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Flex>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={400}
                    color={"#000000"}
                  >
                    Securely onboard and review loan requests
                  </Text>
                </Flex>
                <Flex>
                  <Checkbox
                    defaultChecked
                    sx={{
                      input: {
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        opacity: 0,
                      },
                      "input:checked + span": {
                        backgroundColor: "#2261B0",
                        borderColor: "#2261B0",
                      },
                      span: {
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        border: "2px solid #2261B0",
                        display: "inline-block",
                      },
                    }}
                  />
                </Flex>
              </Flex>
              <Flex pt={"10px"} gap={"70px"}>
                <Flex gap={"5px"}>
                  <Flex>
                    <Checkbox
                      defaultChecked
                      colorScheme="#078861"
                      sx={{
                        input: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          opacity: 0,
                        },
                        "input:checked + span": {
                          backgroundColor: "white",
                          borderColor: "#078861",
                          color: "#078861",
                        },
                        span: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: "2px solid #078861",
                          display: "inline-block",
                          transition: "all 0.3s ease",
                        },
                        "span:hover": {
                          borderColor: "#065f4a",
                          backgroundColor: "#065f4a",
                        },
                      }}
                    />
                  </Flex>
                  <Flex>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      Customized loan request form
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap={"5px"}>
                  <Flex>
                    <Checkbox
                      defaultChecked
                      colorScheme="#078861"
                      sx={{
                        input: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          opacity: 0,
                        },
                        "input:checked + span": {
                          backgroundColor: "white",
                          borderColor: "#078861",
                          color: "#078861",
                        },
                        span: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: "2px solid #078861",
                          display: "inline-block",
                          transition: "all 0.3s ease",
                        },
                        "span:hover": {
                          borderColor: "#065f4a",
                          backgroundColor: "#065f4a",
                        },
                      }}
                    />
                  </Flex>
                  <Flex>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      Liveliness Check
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap={"5px"}>
                  <Flex>
                    <Checkbox
                      defaultChecked
                      colorScheme="#078861"
                      sx={{
                        input: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          opacity: 0,
                        },
                        "input:checked + span": {
                          backgroundColor: "white",
                          borderColor: "#078861",
                          color: "#078861",
                        },
                        span: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: "2px solid #078861",
                          display: "inline-block",
                          transition: "all 0.3s ease",
                        },
                        "span:hover": {
                          borderColor: "#065f4a",
                          backgroundColor: "#065f4a",
                        },
                      }}
                    />
                  </Flex>
                  <Flex>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      Product Creation
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap={"5px"}>
                  <Flex>
                    <Checkbox
                      defaultChecked
                      colorScheme="#078861"
                      sx={{
                        input: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          opacity: 0,
                        },
                        "input:checked + span": {
                          backgroundColor: "white",
                          borderColor: "#078861",
                          color: "#078861",
                        },
                        span: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: "2px solid #078861",
                          display: "inline-block",
                          transition: "all 0.3s ease",
                        },
                        "span:hover": {
                          borderColor: "#065f4a",
                          backgroundColor: "#065f4a",
                        },
                      }}
                    />
                  </Flex>
                  <Flex>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      Underwriting
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            <Box
              width={"1000px"}
              height={"150px"}
              bgColor={"#FFFFFF"}
              boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
              p={"20px"}
              borderRadius={"8px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
            >
              <Flex>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"20px"}
                  fontWeight={800}
                  color={"#000000"}
                >
                  Bank Statement Analysis
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Flex>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={400}
                    color={"#000000"}
                  >
                    instantly analyze any bank statement regardless of bank type
                    and number of pages
                  </Text>
                </Flex>
                <Flex>
                  <Checkbox
                    sx={{
                      input: {
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        opacity: 0,
                      },
                      "input:checked + span": {
                        backgroundColor: "#2261B0",
                        borderColor: "#2261B0",
                      },
                      span: {
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        border: "2px solid #2261B0",
                        display: "inline-block",
                      },
                    }}
                  />
                </Flex>
              </Flex>
              <Flex pt={"10px"} gap={"70px"}>
                <Flex gap={"5px"}>
                  <Flex>
                    <Checkbox
                      defaultChecked
                      colorScheme="#078861"
                      sx={{
                        input: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          opacity: 0,
                        },
                        "input:checked + span": {
                          backgroundColor: "white",
                          borderColor: "#078861",
                          color: "#078861",
                        },
                        span: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: "2px solid #078861",
                          display: "inline-block",
                          transition: "all 0.3s ease",
                        },
                        "span:hover": {
                          borderColor: "#065f4a",
                          backgroundColor: "#065f4a",
                        },
                      }}
                    />
                  </Flex>
                  <Flex>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      Monthly Metrics
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap={"5px"}>
                  <Flex>
                    <Checkbox
                      defaultChecked
                      colorScheme="#078861"
                      sx={{
                        input: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          opacity: 0,
                        },
                        "input:checked + span": {
                          backgroundColor: "white",
                          borderColor: "#078861",
                          color: "#078861",
                        },
                        span: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: "2px solid #078861",
                          display: "inline-block",
                          transition: "all 0.3s ease",
                        },
                        "span:hover": {
                          borderColor: "#065f4a",
                          backgroundColor: "#065f4a",
                        },
                      }}
                    />
                  </Flex>
                  <Flex>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      Weekly Metrics
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap={"5px"}>
                  <Flex>
                    <Checkbox
                      defaultChecked
                      colorScheme="#078861"
                      sx={{
                        input: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          opacity: 0,
                        },
                        "input:checked + span": {
                          backgroundColor: "white",
                          borderColor: "#078861",
                          color: "#078861",
                        },
                        span: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: "2px solid #078861",
                          display: "inline-block",
                          transition: "all 0.3s ease",
                        },
                        "span:hover": {
                          borderColor: "#065f4a",
                          backgroundColor: "#065f4a",
                        },
                      }}
                    />
                  </Flex>
                  <Flex>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      Trends Insight
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap={"5px"}>
                  <Flex>
                    <Checkbox
                      defaultChecked
                      colorScheme="#078861"
                      sx={{
                        input: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          opacity: 0,
                        },
                        "input:checked + span": {
                          backgroundColor: "white",
                          borderColor: "#078861",
                          color: "#078861",
                        },
                        span: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: "2px solid #078861",
                          display: "inline-block",
                          transition: "all 0.3s ease",
                        },
                        "span:hover": {
                          borderColor: "#065f4a",
                          backgroundColor: "#065f4a",
                        },
                      }}
                    />
                  </Flex>
                  <Flex>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      Income Verification
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            <Box
              width={"1000px"}
              height={"150px"}
              bgColor={"#FFFFFF"}
              boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
              p={"20px"}
              borderRadius={"8px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
            >
              <Flex>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"20px"}
                  fontWeight={800}
                  color={"#000000"}
                >
                  Credit Search
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Flex>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={400}
                    color={"#000000"}
                  >
                    instantly perform credit search from more than one credit
                    bureau
                  </Text>
                </Flex>
                <Flex>
                  <Checkbox
                    defaultChecked
                    sx={{
                      input: {
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        opacity: 0,
                      },
                      "input:checked + span": {
                        backgroundColor: "#2261B0",
                        borderColor: "#2261B0",
                      },
                      span: {
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        border: "2px solid #2261B0",
                        display: "inline-block",
                      },
                    }}
                  />
                </Flex>
              </Flex>
              <Flex pt={"10px"} gap={"70px"}>
                <Flex gap={"5px"}>
                  <Flex>
                    <Checkbox
                      defaultChecked
                      colorScheme="#078861"
                      sx={{
                        input: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          opacity: 0,
                        },
                        "input:checked + span": {
                          backgroundColor: "white",
                          borderColor: "#078861",
                          color: "#078861",
                        },
                        span: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: "2px solid #078861",
                          display: "inline-block",
                          transition: "all 0.3s ease",
                        },
                        "span:hover": {
                          borderColor: "#065f4a",
                          backgroundColor: "#065f4a",
                        },
                      }}
                    />
                  </Flex>
                  <Flex>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      CRC
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap={"5px"}>
                  <Flex>
                    <Checkbox
                      defaultChecked
                      colorScheme="#078861"
                      sx={{
                        input: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          opacity: 0,
                        },
                        "input:checked + span": {
                          backgroundColor: "white",
                          borderColor: "#078861",
                          color: "#078861",
                        },
                        span: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: "2px solid #078861",
                          display: "inline-block",
                          transition: "all 0.3s ease",
                        },
                        "span:hover": {
                          borderColor: "#065f4a",
                          backgroundColor: "#065f4a",
                        },
                      }}
                    />
                  </Flex>
                  <Flex>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      First Central
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap={"5px"}>
                  <Flex>
                    <Checkbox
                      defaultChecked
                      colorScheme="#078861"
                      sx={{
                        input: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          opacity: 0,
                        },
                        "input:checked + span": {
                          backgroundColor: "white",
                          borderColor: "#078861",
                          color: "#078861",
                        },
                        span: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: "2px solid #078861",
                          display: "inline-block",
                          transition: "all 0.3s ease",
                        },
                        "span:hover": {
                          borderColor: "#065f4a",
                          backgroundColor: "#065f4a",
                        },
                      }}
                    />
                  </Flex>
                  <Flex>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      Credit Registry
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            <Box
              width={"1000px"}
              height={"150px"}
              bgColor={"#FFFFFF"}
              boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
              p={"20px"}
              borderRadius={"8px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
            >
              <Flex>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"20px"}
                  fontWeight={800}
                  color={"#000000"}
                >
                  Client Management
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Flex>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={400}
                    color={"#000000"}
                  >
                    Securely manage clients
                  </Text>
                </Flex>
                <Flex>
                  <Checkbox
                    defaultChecked
                    sx={{
                      input: {
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        opacity: 0,
                      },
                      "input:checked + span": {
                        backgroundColor: "#2261B0",
                        borderColor: "#2261B0",
                      },
                      span: {
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        border: "2px solid #2261B0",
                        display: "inline-block",
                      },
                    }}
                  />
                </Flex>
              </Flex>
              <Flex pt={"10px"} gap={"70px"}>
                <Flex gap={"5px"}>
                  <Flex>
                    <Checkbox
                      defaultChecked
                      colorScheme="#078861"
                      sx={{
                        input: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          opacity: 0,
                        },
                        "input:checked + span": {
                          backgroundColor: "white",
                          borderColor: "#078861",
                          color: "#078861",
                        },
                        span: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: "2px solid #078861",
                          display: "inline-block",
                          transition: "all 0.3s ease",
                        },
                        "span:hover": {
                          borderColor: "#065f4a",
                          backgroundColor: "#065f4a",
                        },
                      }}
                    />
                  </Flex>
                  <Flex>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      Customer profile
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap={"5px"}>
                  <Flex>
                    <Checkbox
                      defaultChecked
                      colorScheme="#078861"
                      sx={{
                        input: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          opacity: 0,
                        },
                        "input:checked + span": {
                          backgroundColor: "white",
                          borderColor: "#078861",
                          color: "#078861",
                        },
                        span: {
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: "2px solid #078861",
                          display: "inline-block",
                          transition: "all 0.3s ease",
                        },
                        "span:hover": {
                          borderColor: "#065f4a",
                          backgroundColor: "#065f4a",
                        },
                      }}
                    />
                  </Flex>
                  <Flex>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"16px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      Loan history and profile
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Flex>

          <Flex pt={"20px"}>
            <Button
              width={"135px"}
              height={"40px"}
              bgColor={"#2261B0"}
              fontFamily={"Nunito Sans"}
              fontSize={"14px"}
              fontWeight={700}
              color={"#FFFFFF"}
            >
              Proceed
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default SelectProduct;
