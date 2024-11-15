import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import CP from "../../assets/Images/clientprofile.png";
import { useNavigate, useParams } from "react-router-dom";
import { tableBody } from "./Clients";
import Passport1 from "../../assets/Images/ID.png";
import Passport2 from "../../assets/Images/selfie.png";
import ClientsDocument from "./ClientsDocument";
import ClientsLoans from "./ClientsLoans";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useEffect } from "react";

const ClientsProfile = () => {
  const navigate = useNavigate();
  const param = useParams();
  const id = param.id;

  const currentTablebody = tableBody.find(
    (body) => body?.userId.toString() === id
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subNav = [
    { name: "User Details" },
    { name: "Documents" },
    { name: "Loans" },
  ];

  return (
    <>
      <Flex flexDirection={"column"} gap={"20px"} width={"100%"}>
        <Flex gap={"10px"}>
          <Flex
            width={"25px"}
            height={"25px"}
            bgColor={"white"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"50%"}
            color={"#D46A35"}
            cursor={"pointer"}
            onClick={() => {
              navigate(-1);
            }}
          >
            <MdOutlineKeyboardBackspace fontSize={"20px"} />
          </Flex>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={500}
            fontSize={"14px"}
            color={"#000000"}
            pt={"2px"}
          >
            Back
          </Text>
        </Flex>
        <Flex
          bgColor={"#FFFFFF"}
          width={"full"}
          height={"100%"}
          p={{ md: "10px", base: "10px" }}
          borderRadius={"7px"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Flex justifyContent={"space-between"}>
            <Flex gap={"10px"} p={"20px"}>
              <Box width={"75px"} height={"75px"}>
                <Image
                  src={CP}
                  alt="Client Image"
                  width={"100%"}
                  height={"100%"}
                  objectFit={"cover"}
                />
              </Box>
              <Flex flexDirection={"column"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"36px"}
                  fontWeight={600}
                >
                  {currentTablebody?.name}
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"#078861"}
                >
                  userId: {currentTablebody?.userId}
                </Text>
              </Flex>
            </Flex>

            <Grid display={"flex"} my={"auto"}>
              <GridItem>
                <Button
                  bgColor={"#D9D9D9"}
                  borderRadius={"2px"}
                  borderRight={"1px solid black"}
                >
                  Edit
                </Button>
              </GridItem>
              <GridItem>
                <Button
                  bgColor={"#D9D9D9"}
                  borderRadius={"2px"}
                  borderRight={"1px solid black"}
                >
                  Send Message
                </Button>
              </GridItem>
              <GridItem>
                <Button bgColor={"#D9D9D9"} borderRadius={"2px"}>
                  More
                </Button>
              </GridItem>
            </Grid>
          </Flex>

          <Tabs pt={"60px"}>
            <TabList>
              <Flex flexDirection={"column"}>
                <Flex gap={"25px"} mx={"10px"}>
                  {subNav.map((item, index) => (
                    <Tab
                      key={index}
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={500}
                      color={"#000000"}
                    >
                      {item.name}
                    </Tab>
                  ))}
                </Flex>
              </Flex>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="#D46A35"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel pt={"30px"}>
                <Grid templateColumns="repeat(12, 1fr)" gap={"10px"}>
                  <GridItem colSpan={{ xl: 6, base: 12 }}>
                    <Box
                      height={"300px"}
                      bg={"#FFFFFF"}
                      borderRadius={"10px"}
                      p={"20px"}
                      mb={"20px"}
                      boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
                    >
                      <Flex flexDirection={"column"} gap={"12px"}>
                        <Flex>
                          <Text
                            fontFamily={"Nunito Sans"}
                            fontSize={"14px"}
                            fontWeight={600}
                            color={"#000000"}
                          >
                            Personal Profile
                          </Text>
                        </Flex>

                        <Flex gap={"2px"}>
                          <Box>
                            <Flex flexDirection={"column"} gap={"20px"}>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  First Name:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  {currentTablebody?.name}
                                </Text>
                              </Flex>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  Last Name:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  {currentTablebody?.name}
                                </Text>
                              </Flex>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  Other Name:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  {currentTablebody?.name}
                                </Text>
                              </Flex>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  Phone Number:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  {currentTablebody?.phoneNo}
                                </Text>
                              </Flex>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  Address:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  14, Amazing Grace Street, Oloko Road, IDI
                                  IROKO, SANGO OTA, OGUN STATE
                                </Text>
                              </Flex>
                            </Flex>
                          </Box>
                          <Box>
                            <Flex flexDirection={"column"} gap={"20px"}>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  Email:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  williams.adeyemi@yahoo.com
                                </Text>
                              </Flex>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  BVN:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  223345667788
                                </Text>
                              </Flex>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  NIN:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  12345678901
                                </Text>
                              </Flex>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  Date of Birth:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  25-Sep-1993
                                </Text>
                              </Flex>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  Marital Status:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  Married
                                </Text>
                              </Flex>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  Number of Dependents:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  3
                                </Text>
                              </Flex>
                            </Flex>
                          </Box>
                        </Flex>
                      </Flex>
                    </Box>
                    <Box
                      height={"250px"}
                      bg={"#FFFFFF"}
                      borderRadius={"10px"}
                      p={"20px"}
                      boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
                    >
                      <Flex flexDirection={"column"} gap={"20px"}>
                        <Flex>
                          <Text
                            fontFamily={"Nunito Sans"}
                            fontSize={"14px"}
                            fontWeight={600}
                            color={"#000000"}
                          >
                            Employment Profile
                          </Text>
                        </Flex>
                        <Flex gap={"10px"}>
                          <Box>
                            <Flex flexDirection={"column"} gap={"20px"}>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  Employment Type:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  Employed
                                </Text>
                              </Flex>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"12px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  Employer Name:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"12px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  DLM CAPITAL GROUP
                                </Text>
                              </Flex>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  Sector:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  Financial Institution
                                </Text>
                              </Flex>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  Net Pay:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  525,000.00
                                </Text>
                              </Flex>
                            </Flex>
                          </Box>
                          <Box>
                            <Flex flexDirection={"column"} gap={"10px"}>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  Employer Address:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"12px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  14, Amazing Grace Street, Oloko Road
                                </Text>
                              </Flex>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  Work Email:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  wadeyemi@getjupita.co
                                </Text>
                              </Flex>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  Role:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  Credit Risk Manager
                                </Text>
                              </Flex>
                              <Flex gap={"5px"}>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#737791"}
                                >
                                  Employment Duration:
                                </Text>
                                <Text
                                  fontFamily={"Nunito Sans"}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  color={"#000000"}
                                >
                                  23 months
                                </Text>
                              </Flex>
                            </Flex>
                          </Box>
                        </Flex>
                      </Flex>
                    </Box>
                  </GridItem>
                  <GridItem
                    colSpan={{ xl: 6, base: 12 }}
                    height={"100%"}
                    bg={"#FFFFFF"}
                    borderRadius={"10px"}
                    p={"20px"}
                    boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
                  >
                    <Flex flexDirection={"column"} gap={"30px"}>
                      <Flex justifyContent={"space-between"}>
                        <Flex
                          justifyContent={"center"}
                          alignItems={"center"}
                          gap={"10px"}
                        >
                          <Text
                            fontFamily={"Nunito Sans"}
                            fontSize={"14px"}
                            fontWeight={600}
                            color={"#000000"}
                          >
                            Face Match:{" "}
                          </Text>
                          <Button
                            width={"110px"}
                            height={"30px"}
                            bgColor={"#98F4D5"}
                            textAlign={"center"}
                            fontFamily={"Nunito Sans"}
                            fontSize={"14px"}
                            fontWeight={600}
                            color={"#000000"}
                            _hover={{
                              bgColor: "#000000",
                              color: "#98F4D5",
                            }}
                          >
                            SUCCESSFUL
                          </Button>
                        </Flex>
                        <Text
                          fontFamily={"Nunito Sans"}
                          fontWeight={400}
                          fontSize={"14px"}
                        >
                          BVN DATA
                        </Text>
                      </Flex>
                      <Flex justifyContent={"space-evenly"}>
                        <Flex flexDirection={"column"} gap={"10px"}>
                          <Box width={"209px"} height={"196px"}>
                            <Image
                              src={Passport1}
                              width={"100%"}
                              height={"100%"}
                              objectFit={"contain"}
                            />
                          </Box>
                          <Text
                            fontFamily={"Nunito Sans"}
                            fontSize={"14px"}
                            fontWeight={600}
                            color={"#000000"}
                            textAlign={"center"}
                          >
                            Picture from ID Authority
                          </Text>
                        </Flex>
                        <Flex flexDirection={"column"} gap={"10px"}>
                          <Box width={"209px"} height={"196px"}>
                            <Image
                              src={Passport2}
                              width={"100%"}
                              height={"100%"}
                              objectFit={"contain"}
                            />
                          </Box>
                          <Text
                            fontFamily={"Nunito Sans"}
                            fontSize={"14px"}
                            fontWeight={600}
                            color={"#000000"}
                            textAlign={"center"}
                          >
                            Incoming Selfie/Passport
                          </Text>
                        </Flex>
                      </Flex>

                      <Box>
                        <Text
                          fontFamily={"Nunito Sans"}
                          fontSize={"14px"}
                          fontWeight={600}
                          textColor={"#D46A35"}
                          textAlign={"center"}
                          textDecoration={"underline"}
                          cursor={"pointer"}
                        >
                          View ID Details
                        </Text>
                      </Box>
                    </Flex>
                  </GridItem>
                </Grid>
              </TabPanel>

              <TabPanel pt={"30px"}>
                <ClientsDocument />
              </TabPanel>

              <TabPanel>
                <ClientsLoans />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
};

export default ClientsProfile;
