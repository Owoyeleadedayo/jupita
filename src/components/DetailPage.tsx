import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { transacts } from "./Transaction";
import { useParams } from "react-router-dom";
import Passport1 from '../assets/Images/Passport1.png'
import Passport2 from "../assets/Images/Passport2.png";

const DetailPage = () => {
  const menuItems = [
    {
      name: "Treat Transaction",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.25em"
          height="1em"
          viewBox="0 0 640 512"
        >
          <path
            fill="currentColor"
            d="M224 0a128 128 0 1 1 0 256a128 128 0 1 1 0-256m-45.7 304h91.4c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7v.9c0 9.2 2.7 18.5 7.9 26.3l-382.2.1C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304M436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8v30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1.7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4L546.3 442c-6.9 5.1-14.3 9.4-22.3 12.8v30.6c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8v-30.5c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3.7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9v-30.5zm92.1 133.5a48.1 48.1 0 1 0-96.1 0a48.1 48.1 0 1 0 96.1 0"
          />
        </svg>
      ),
      color: "#4E96FF",
    },
    {
      name: "Edit Decision",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M15 23v1a1 1 0 0 1-1 1h-2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2.586A2 2 0 0 1 4.586 22l7.738-7.739A8 8 0 1 1 20 20h-2v2a1 1 0 0 1-1 1zm7-11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
          />
        </svg>
      ),
      color: "#F97FD9",
    },
    {
      name: "Send Message",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M5.516 14.224c-2.262-2.432-2.222-6.244.128-8.611a6.07 6.07 0 0 1 3.414-1.736L8.989 1.8a8.1 8.1 0 0 0-4.797 2.351c-3.149 3.17-3.187 8.289-.123 11.531l-1.741 1.752l5.51.301l-.015-5.834zm6.647-11.959l.015 5.834l2.307-2.322c2.262 2.434 2.222 6.246-.128 8.611a6.07 6.07 0 0 1-3.414 1.736l.069 2.076a8.12 8.12 0 0 0 4.798-2.35c3.148-3.172 3.186-8.291.122-11.531l1.741-1.754z"
          />
        </svg>
      ),
      color: "#9E8FFF",
    },
  ];

  const param = useParams();
  const id = param.id;

  const currentTransaction = transacts.find(
    (item) => item?.LoanId.toString() === id
  );

  console.log(currentTransaction?.name.split(" "));

  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        p={{ md: "14px", base: "10px" }}
        borderRadius={"7px"}
        flexDirection={"column"}
        gap={"20px"}
      >
        <Flex justifyContent={"space-between"}>
          <Flex flexDirection={"column"}>
            <Flex gap={"10px"}>
              <Text
                fontFamily={"Poppins"}
                fontSize={"20px"}
                color={"#000000"}
                fontWeight={600}
                textTransform={"uppercase"}
              >
                {currentTransaction?.name}
              </Text>
              <Text
                fontFamily={"Poppins"}
                fontSize={"20px"}
                color={"#D46A35"}
                fontWeight={700}
              >
                ₦{currentTransaction?.loanAmount}
              </Text>
            </Flex>
            <Text
              fontFamily={"Poppins"}
              fontSize={"11px"}
              color={"#000000"}
              fontWeight={400}
            >
              Updated October 27, 2021, 11:40 AM
            </Text>
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"} gap={"10px"}>
            <Button
              width={"150px"}
              height={"40px"}
              borderRadius={"8px"}
              bg={"#D46A35"}
              fontSize={"14px"}
              fontWeight={600}
              color={"#FFFFFF"}
            >
              CREATE PROFILE
            </Button>

            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="3.75"
                      d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                    />
                  </svg>
                }
                width={"20px"}
                height={"40px"}
                variant="outline"
              />
              <MenuList>
                {menuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    icon={
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {item.icon && (
                          <span
                            style={{
                              marginRight: "8px",
                              color: item.color,
                              fontSize: "16px",
                            }}
                          >
                            {item.icon}
                          </span>
                        )}
                      </div>
                    }
                    fontFamily={"Poppins"}
                    fontWeight={500}
                    fontSize={"14px"}
                    borderBottom={
                      index < menuItems.length - 1
                        ? "0.5px solid #bfbfbf"
                        : "none"
                    }
                    color={"#404040"}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        <Grid templateColumns="repeat(12, 2fr)" gap={"10px"}>
          <Flex flexDirection={"column"} gap={"20px"}>
            <GridItem
              width={"600px"}
              height={"300px"}
              bg={"#FFFFFF"}
              borderRadius={"10px"}
              p={"20px"}
              boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
            >
              <Flex flexDirection={"column"} gap={"20px"}>
                <Flex justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={"14px"}
                    fontWeight={600}
                    color={"#000000"}
                  >
                    Personal Profile
                  </Text>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={"12px"}
                    fontWeight={600}
                    textDecoration={"underline"}
                    color={"#207EDF"}
                    cursor={"pointer"}
                  >
                    Edit
                  </Text>
                </Flex>

                <Flex gap={"2px"}>
                  <Box>
                    <Flex flexDirection={"column"} gap={"20px"}>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          First Name:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#000000"}
                        >
                          {currentTransaction?.name.split(" ")}
                        </Text>
                      </Flex>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          Last Name:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#000000"}
                        >
                          {currentTransaction?.name.split(" ")}
                        </Text>
                      </Flex>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          Other Name:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#000000"}
                        >
                          {currentTransaction?.name.split(" ")}
                        </Text>
                      </Flex>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          Phone Number:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#000000"}
                        >
                          {currentTransaction?.phoneNumber}
                        </Text>
                      </Flex>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          Address:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#000000"}
                        >
                          14, Amazing Grace Street, Oloko Road, IDI IROKO, SANGO
                          OTA, OGUN STATE
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex flexDirection={"column"} gap={"20px"}>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          Email:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#000000"}
                        >
                          williams.adeyemi@yahoo.com
                        </Text>
                      </Flex>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          BVN:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#000000"}
                        >
                          223345667788
                        </Text>
                      </Flex>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          NIN:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#000000"}
                        >
                          12345678901
                        </Text>
                      </Flex>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          Date of Birth:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#000000"}
                        >
                          25-Sep-1993
                        </Text>
                      </Flex>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          Marital Status:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#000000"}
                        >
                          Married
                        </Text>
                      </Flex>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          Number of Dependents:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
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
            </GridItem>
            <GridItem
              width={"600px"}
              height={"250px"}
              bg={"#FFFFFF"}
              borderRadius={"10px"}
              p={"20px"}
              boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
            >
              <Flex flexDirection={"column"} gap={"20px"}>
                <Flex justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={"14px"}
                    fontWeight={600}
                    color={"#000000"}
                  >
                    Employment Profile
                  </Text>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={"12px"}
                    fontWeight={600}
                    textDecoration={"underline"}
                    color={"#207EDF"}
                    cursor={"pointer"}
                  >
                    Edit
                  </Text>
                </Flex>
                <Flex gap={"10px"}>
                  <Box>
                    <Flex flexDirection={"column"} gap={"20px"}>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"12px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          Employment Type:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"12px"}
                          fontWeight={400}
                          color={"#000000"}
                        >
                          Employed
                        </Text>
                      </Flex>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"12px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          Employer Name:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"12px"}
                          fontWeight={400}
                          color={"#000000"}
                        >
                          DLM CAPITAL GROUP
                        </Text>
                      </Flex>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"13px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          Sector:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"13px"}
                          fontWeight={400}
                          color={"#000000"}
                        >
                          Financial Institution
                        </Text>
                      </Flex>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          Net Pay:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
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
                          fontFamily={"Poppins"}
                          fontSize={"13px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          Employer Address:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"12px"}
                          fontWeight={400}
                          color={"#000000"}
                        >
                          14, Amazing Grace Street, Oloko Road
                        </Text>
                      </Flex>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          Work Email:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#000000"}
                        >
                          wadeyemi@getjupita.co
                        </Text>
                      </Flex>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          Role:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#000000"}
                        >
                          Credit Risk Manager
                        </Text>
                      </Flex>
                      <Flex gap={"5px"}>
                        <Text
                          fontFamily={"Poppins"}
                          fontSize={"14px"}
                          fontWeight={400}
                          color={"#737791"}
                        >
                          Employment Duration:
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
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
            </GridItem>
          </Flex>
          <GridItem
            width={"480px"}
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
                    fontFamily={"Poppins"}
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
                <Text fontFamily={"Poppins"} fontWeight={400} fontSize={"14px"}>
                  BVN DATA
                </Text>
              </Flex>
              <Flex gap={"20px"}>
                <Flex flexDirection={"column"} gap={"10px"}>
                  <Box width={"213.48px"} height={"260.76px"}>
                    <Image src={Passport1} width={"100%"} height={"100%"} />
                  </Box>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={"14px"}
                    fontWeight={600}
                    color={"#000000"}
                    textAlign={"center"}
                  >
                    Picture from ID Authority
                  </Text>
                </Flex>

                <Flex flexDirection={"column"} gap={"10px"}>
                  <Box width={"213.48px"} height={"260.76px"}>
                    <Image src={Passport2} width={"100%"} height={"100%"} />
                  </Box>
                  <Text
                    fontFamily={"Poppins"}
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
                <Flex flexDirection={"column"} gap={"10px"}>
                  <Flex gap={"10px"}>
                    <Text
                      fontFamily={"Poppins"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#737791"}
                    >
                      First Name:
                    </Text>
                    <Text
                      fontFamily={"Poppins"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      {currentTransaction?.name.split(" ")}
                    </Text>
                  </Flex>
                  <Flex gap={"10px"}>
                    <Text
                      fontFamily={"Poppins"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#737791"}
                    >
                      Last Name:
                    </Text>
                    <Text
                      fontFamily={"Poppins"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      {currentTransaction?.name.split(" ")}
                    </Text>
                  </Flex>
                  <Flex gap={"10px"}>
                    <Text
                      fontFamily={"Poppins"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#737791"}
                    >
                      Other Name:
                    </Text>
                    <Text
                      fontFamily={"Poppins"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      {currentTransaction?.name.split(" ")}
                    </Text>
                  </Flex>
                  <Flex gap={"10px"}>
                    <Text
                      fontFamily={"Poppins"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#737791"}
                    >
                      ID Number:
                    </Text>
                    <Text
                      fontFamily={"Poppins"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      {currentTransaction?.LoanId}
                    </Text>
                  </Flex>
                  <Flex gap={"10px"}>
                    <Text
                      fontFamily={"Poppins"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#737791"}
                    >
                      Date of Birth:
                    </Text>
                    <Text
                      fontFamily={"Poppins"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#000000"}
                    >
                      09/25/2000
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default DetailPage;
