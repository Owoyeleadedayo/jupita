import { Box, Button, Divider, Flex, Grid, GridItem,  Text } from "@chakra-ui/react";
import { tableBody } from "./Clients";
import { GrEdit } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ClientDetails = () => {

    const [show, setShow] = useState(8);

    const showMore = () => {
        setShow((prevCount) => prevCount + 8);
    }
 
    
    const param = useParams();
    const id = param.id;


      const currentTablebody = tableBody.find(
        (body) => body?.userId.toString() === id
      );

      const comments = [
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
        {
          text: "Williams Adeyemi sent a message:",
          subText:
            "Dear Janet, your loan repayment of 200,000 will be due tomorrow. Please pay to have a good...",
        },
        {
          text: "Femi Afelogun changed",
          subText: " employment type from Self-Employed to Employed",
        },
      ];

  return (
    <>
      <Grid templateColumns="repeat(12, 1fr)" gap={"10px"}>
        <GridItem colSpan={8}>
          <Box
            height={"300px"}
            bg={"#FFFFFF"}
            borderRadius={"10px"}
            p={"20px"}
            mb={"20px"}
            boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
          >
            <Flex flexDirection={"column"} gap={"15px"}>
              <Flex justifyContent={"space-between"}>
                <Flex gap={"20px"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={{ md: "13px", xl: "16px" }}
                    fontWeight={700}
                    color={"#000000"}
                  >
                    Personal Profile
                  </Text>
                  <Flex gap={"22px"}>
                    <Box pt={"3px"}>
                      <GrEdit color={"#207EDF"} fontSize={"13px"} />
                    </Box>
                    <Button
                      width={0}
                      height={0}
                      pt={"12px"}
                      variant={"none"}
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={600}
                      color={"#207EDF"}
                      cursor={"pointer"}
                    >
                      Edit Section
                    </Button>
                  </Flex>
                </Flex>
                <Flex>
                  <Button
                    width={"101px"}
                    height={"27px"}
                    bgColor={"#2261B0"}
                    color={"#FFFFFF"}
                    fontFamily={"Nunito Sans"}
                    fontSize={"10px"}
                    fontWeight={700}
                  >
                    Show BVN Data
                  </Button>
                </Flex>
              </Flex>

              <Flex gap={{ md: "30px", xl: "100px" }}>
                <Box>
                  <Flex flexDirection={"column"} gap={"30px"}>
                    <Flex gap={"10px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={500}
                        color={"#000000"}
                      >
                        Full Name:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={700}
                        color={"#000000"}
                      >
                        {currentTablebody?.name}
                      </Text>
                    </Flex>
                    <Flex gap={"10px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={500}
                        color={"#000000"}
                      >
                        Phone Number:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={700}
                        color={"#000000"}
                      >
                        {currentTablebody?.phoneNo}
                      </Text>
                    </Flex>
                    <Flex gap={"10px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={500}
                        color={"#000000"}
                      >
                        BVN:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={700}
                        color={"#000000"}
                      >
                        22334455667
                      </Text>
                    </Flex>
                    <Flex gap={"10px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={500}
                        color={"#000000"}
                      >
                        NIN:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={700}
                        color={"#000000"}
                      >
                        12345678909
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
                <Box>
                  <Flex flexDirection={"column"} gap={"30px"}>
                    <Flex gap={"10px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={500}
                        color={"#000000"}
                      >
                        Email:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={700}
                        color={"#000000"}
                      >
                        williams.adeyemi@yahoo.com
                      </Text>
                    </Flex>
                    <Flex gap={"10px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={500}
                        color={"#000000"}
                      >
                        Date of Birth:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={700}
                        color={"#000000"}
                      >
                        25-Sep-1993
                      </Text>
                    </Flex>
                    <Flex gap={"10px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={500}
                        color={"#000000"}
                      >
                        Gender:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={700}
                        color={"#000000"}
                      >
                        Male
                      </Text>
                    </Flex>
                    <Flex gap={"10px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={500}
                        color={"#000000"}
                      >
                        Address:
                      </Text>
                      <Box width={"200px"}>
                        <Text
                          fontFamily={"Nunito Sans"}
                          fontSize={"14px"}
                          fontWeight={700}
                          color={"#000000"}
                        >
                          14, Amazing Grace Street, Oloko Road, IDI IROKO, SANGO
                          OTA, OGUN STATE
                        </Text>
                      </Box>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Box
            height={"280px"}
            bg={"#FFFFFF"}
            borderRadius={"10px"}
            p={"20px"}
            boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
          >
            <Flex flexDirection={"column"} gap={"20px"}>
              <Flex justifyContent={"space-between"}>
                <Flex gap={"20px"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={700}
                    color={"#000000"}
                  >
                    Employment Profile
                  </Text>
                  <Flex gap={"22px"}>
                    <Box pt={"3px"}>
                      <GrEdit color={"#207EDF"} fontSize={"13px"} />
                    </Box>
                    <Button
                      width={0}
                      height={0}
                      pt={"12px"}
                      variant={"none"}
                      fontFamily={"Nunito Sans"}
                      fontSize={{ md: "12px", xl: "14px" }}
                      fontWeight={600}
                      color={"#207EDF"}
                      cursor={"pointer"}
                    >
                      Edit Section
                    </Button>
                  </Flex>
                </Flex>
                <Flex>
                  <IoIosArrowDown color="#000000" fontSize={"20px"} />
                </Flex>
              </Flex>
              <Flex gap={{ md: "40px", xl: "60px" }}>
                <Box>
                  <Flex
                    flexDirection={"column"}
                    gap={{ md: "15px", xl: "20px" }}
                  >
                    <Flex gap={{ md: "5px", xl: "10px" }}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={500}
                        color={"#000000"}
                      >
                        Employment Type:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={700}
                        color={"#000000"}
                      >
                        Employed
                      </Text>
                    </Flex>
                    <Flex gap={{ md: "5px", xl: "10px" }}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={500}
                        color={"#000000"}
                      >
                        Employer Name:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={700}
                        color={"#000000"}
                      >
                        DLM CAPITAL GROUP
                      </Text>
                    </Flex>
                    <Flex gap={{ md: "5px", xl: "10px" }}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={500}
                        color={"#000000"}
                      >
                        Sector:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={700}
                        color={"#000000"}
                      >
                        Financial Institution
                      </Text>
                    </Flex>
                    <Flex gap={{ md: "5px", xl: "10px" }}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={500}
                        color={"#000000"}
                      >
                        Net Pay:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={700}
                        color={"#000000"}
                      >
                        525,000.00
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    flexDirection={"column"}
                    gap={{ md: "20px", xl: "20px" }}
                  >
                    <Flex gap={{ md: "5px", xl: "10px" }}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={500}
                        color={"#000000"}
                      >
                        Work Email:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={700}
                        color={"#000000"}
                      >
                        wadeyemi@getjupita.co
                      </Text>
                    </Flex>
                    <Flex gap={{ md: "5px", xl: "10px" }}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={500}
                        color={"#000000"}
                      >
                        Date of Employment:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={700}
                        color={"#000000"}
                      >
                        25-September-2019
                      </Text>
                    </Flex>
                    <Flex gap={{ md: "5px", xl: "10px" }}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={500}
                        color={"#000000"}
                      >
                        Designation:
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={700}
                        color={"#000000"}
                      >
                        Credit Decision Scientist
                      </Text>
                    </Flex>
                    <Flex gap={{ md: "5px", xl: "10px" }}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={{ md: "12px", xl: "14px" }}
                        fontWeight={500}
                        color={"#000000"}
                      >
                        Address:
                      </Text>
                      <Box width={"200px"}>
                        <Text
                          fontFamily={"Nunito Sans"}
                          fontSize={{ md: "12px", xl: "14px" }}
                          fontWeight={700}
                          color={"#000000"}
                        >
                          14, Amazing Grace Street, Oloko Road, IDI IROKO, SANGO
                          OTA, OGUN STATE
                        </Text>
                      </Box>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </GridItem>
        <GridItem colSpan={4}>
          <Flex
            flexDirection={"column"}
            height="100vh"
            overflowY="auto"
            overflowX="hidden"
          >
            <Box>
              <Flex
                flexDirection={"column"}
                height="100%"
                overflowY="auto"
                overflowX="hidden"
              >
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#000000"}
                >
                  Activities
                </Text>
                <Divider borderColor={"#0000004D"} borderWidth={"1px"} />
                {comments.splice(0, show).map((item, index) => (
                  <Flex key={index} flexDir={"column"}>
                    <Box p={"5px"}>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={700}
                        color={"#000000"}
                      >
                        {item.text}
                      </Text>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontSize={"14px"}
                        fontWeight={400}
                        color={"#000000"}
                      >
                        {item.subText}
                      </Text>
                    </Box>
                    <Divider borderColor={"#0000004D"} borderWidth={"1px"} />
                  </Flex>
                ))}

                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  pt={"10px"}
                >
                  <Button
                    variant={"none"}
                    border={"none"}
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={700}
                    color={"#2261B0"}
                    textDecoration={"underline"}
                    onClick={showMore}
                  >
                    Show more activities
                  </Button>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
}

export default ClientDetails;
