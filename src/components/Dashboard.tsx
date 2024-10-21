import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  Text,
  IconButton,
  Button,
  MenuList,
  MenuItem,
  Grid,
  GridItem,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Progress,
  Divider,
} from "@chakra-ui/react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiExportBold } from "react-icons/pi";
import StatsCard from "./StatsCard";
import Chart from "./Chart";
import BarChart from "./BarChart";



const Dashboard = () => {
  return (
    <>
      <Flex
        alignItems={{
          lg: "center",
          md: "center",
          base: "flex-start",
        }}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          base: "flex-start",
        }}
        flexDirection={{ lg: "row", md: "row", base: "column" }}
        mx={{ md: "5px", base: "0px" }}
        p={{ md: "20px", base: "15px" }}
        borderRadius={"8px"}
        bgColor={"white"}
        boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
      >
        <Box pl={{ lg: 0, md: 0, base: 2 }} gap={{ md: "20px", base: "6px" }}>
          <Heading
            fontFamily={"Poppins"}
            fontSize={{ md: "20px", base: "17px" }}
          >
            Period
          </Heading>
          <Flex alignItems={"center"}>
            <Text
              fontFamily={"Poppins"}
              fontSize={{ md: "16px", base: "14px" }}
              fontWeight={400}
            >
              September 2024
            </Text>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<MdOutlineArrowDropDown />}
                border={"none"}
                fontSize={"24px"}
                variant="outline"
                _hover={{
                  bg: "none",
                }}
              />
              <MenuList>
                <MenuItem>September 2024</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
        <Flex>
          <Button
            width={{ md: "227px", base: "120px" }}
            height={{ md: "40px", base: "30px" }}
            bgColor={"rgba(212, 106, 53, 1)"}
            textAlign={"center"}
            fontSize={{ md: "14px", base: "12px" }}
            lineHeight={"20px"}
            fontFamily={"Poppins"}
            fontWeight={500}
            color={"white"}
            _hover={{
              bg: "white",
              border: "1px solid rgba(212, 106, 53, 1)",
              color: "rgba(212, 106, 53, 1)",
            }}
          >
            View API Status
          </Button>
        </Flex>
      </Flex>
      {/* first Grid */}
      <Grid mb={{  md: "50px", base: "20px" }}>
        <GridItem
          mx={{ md: "5px", base: "3px" }}
          my={{ md: "20px", base: "10px" }}
          p={{ md: "20px", base: "16px" }}
          height={'100%'}
          borderRadius={"8px"}
          bgColor={"white"}
          boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
        >
          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            <Flex flexDirection={"column"}>
              <Heading
                fontSize={{ md: "20px", base: "17px" }}
                fontFamily={"Poppins"}
                fontWeight={600}
                lineHeight={"25px"}
              >
                Applications
              </Heading>
              <Text
                fontSize={{ md: "16px", base: "14px" }}
                fontFamily={"Poppins"}
                fontWeight={400}
                lineHeight={"30px"}
              >
                Summary
              </Text>
            </Flex>
            <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
              <Button
                border={"1px solid #0F3659"}
                px={{ md: "12px", base: "5px" }}
                py={{ md: "5px", base: "2px" }}
                variant={"none"}
                color={"#0F3659"}
                fontFamily={"Poppins"}
                fontSize={{ md: "16px", base: "14px" }}
              >
                <Flex pr={"5px"}>
                  <PiExportBold />
                </Flex>
                Export
              </Button>
            </Flex>
          </Flex>
          <StatsCard />
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(12, 1fr)" gap={"10px"}>
        <GridItem
          colSpan={{ lg: 6, md: 12, base: 12 }}
          mx={{ md: "5px", base: "3px" }}
          my={{ md: "20px", base: "10px" }}
          p={{ md: "20px", base: "15px" }}
          height={""}
          borderRadius={"8px"}
          bgColor={"white"}
          boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
        >
          <Flex>
            <Text
              fontFamily={"Poppins"}
              fontSize={{ md: "20px", base: "17px" }}
              fontWeight={600}
              lineHeight={"32px"}
              color={"#0F3659"}
            >
              Insights
            </Text>
          </Flex>
          <Flex
            my={"30px"}
            // justifyContent={"center"}
            // alignItems={"center"}
          >
            <Chart />
          </Flex>
        </GridItem>
        <GridItem
          colSpan={{ lg: 6, md: 12, base: 12 }}
          mx={{ md: "5px", base: "3px" }}
          my={{ md: "20px", base: "10px" }}
          p={{ md: "20px", base: "15px" }}
          height={""}
          borderRadius={"8px"}
          bgColor={"white"}
          boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
        >
          <Heading
            fontSize={{ md: "20px", base: "17px" }}
            fontWeight={600}
            fontFamily={"Poppins"}
            color={"rgba(5, 0, 78, 1)"}
          >
            Loan Products
          </Heading>
          <Table my={{ md: "30px", base: "10px" }}>
            <Thead>
              <Tr>
                <Th textAlign={"center"}>#</Th>
                <Th textAlign={"center"}>Name</Th>
                <Th textAlign={"center"} display={{xl: 'flex', lg:'none', md: "flex", base: "none" }}>
                  Volume
                </Th>
                <Th>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td
                  fontSize={{ md: "14px", base: "12px" }}
                  fontFamily={"Poppins"}
                  textAlign={"center"}
                >
                  01
                </Td>
                <Td
                  fontSize={{ md: "14px", base: "12px" }}
                  fontFamily={"Poppins"}
                  textAlign={"center"}
                >
                  Salary Assurance
                </Td>
                <Td>
                  <Progress
                    sx={{
                      "& > div": {
                        backgroundColor: "rgba(0, 149, 255, 1)",
                        borderRadius: "8px",
                      },
                    }}
                    size="xs"
                    value={40}
                    display={{ md: "flex", base: "none" }}
                  />
                </Td>

                <Td>
                  <Button
                    color={"rgba(0, 149, 255, 1)"}
                    border={"1px solid rgba(0, 149, 255, 1)"}
                    bgColor={"rgba(240, 249, 255, 1)"}
                    fontSize={"13px"}
                    width={"50px"}
                    height={"30px"}
                    borderRadius={"8px"}
                  >
                    45%
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td
                  fontSize={{ md: "14px", base: "12px" }}
                  fontFamily={"Poppins"}
                  textAlign={"center"}
                >
                  02
                </Td>
                <Td
                  fontSize={{ md: "14px", base: "12px" }}
                  fontFamily={"Poppins"}
                  textAlign={"center"}
                >
                  Rent Loan
                </Td>
                <Td>
                  <Progress
                    sx={{
                      "& > div": {
                        backgroundColor: "rgba(0, 229, 143, 1)",
                      },
                    }}
                    size="xs"
                    value={29}
                    borderRadius={"8px"}
                  />
                </Td>
                <Td>
                  <Button
                    color={"rgba(0, 229, 143, 1)"}
                    border={"1px solid rgba(0, 229, 143, 1)"}
                    bgColor={"rgba(240, 253, 244, 1)"}
                    fontSize={"13px"}
                    width={"50px"}
                    height={"30px"}
                    borderRadius={"8px"}
                  >
                    29%
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td
                  fontSize={{ md: "14px", base: "12px" }}
                  fontFamily={"Poppins"}
                  textAlign={"center"}
                >
                  03
                </Td>
                <Td
                  fontSize={"14px"}
                  fontFamily={"Poppins"}
                  textAlign={"center"}
                >
                  Public Sector Loan
                </Td>
                <Td>
                  <Progress
                    sx={{
                      "& > div": {
                        backgroundColor: "rgba(136, 77, 255, 1)",
                        borderRadius: "8px",
                      },
                    }}
                    size="xs"
                    value={18}
                  />
                </Td>
                <Td>
                  <Button
                    color={"rgba(136, 77, 255, 1)"}
                    border={"1px solid rgba(136, 77, 255, 1)"}
                    bgColor={"rgba(251, 241, 255, 1)"}
                    fontSize={"13px"}
                    width={"50px"}
                    height={"30px"}
                    borderRadius={"8px"}
                  >
                    18%
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td
                  fontSize={{ md: "14px", base: "12px" }}
                  fontFamily={"Poppins"}
                  textAlign={"center"}
                >
                  04
                </Td>
                <Td
                  fontSize={{ md: "14px", base: "12px" }}
                  fontFamily={"Poppins"}
                  textAlign={"center"}
                >
                  BNPL
                </Td>
                <Td>
                  <Progress
                    sx={{
                      "& > div": {
                        backgroundColor: "rgba(255, 143, 13, 1)",
                        borderRadius: "8px",
                      },
                    }}
                    size="xs"
                    value={25}
                  />
                </Td>
                <Td>
                  <Button
                    color={"rgba(255, 143, 13, 1)"}
                    border={"1px solid rgba(255, 143, 13, 1)"}
                    bgColor={"rgba(254, 246, 230, 1)"}
                    fontSize={"13px"}
                    width={"50px"}
                    height={"30px"}
                    borderRadius={"8px"}
                  >
                    25%
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(12, 1fr)" gap={"10px"}>
        <GridItem
          colSpan={{ lg: 6, md: 12, base: 12 }}
          mx={{ md: "5px", base: "3px" }}
          my={{ md: "20px", base: "10px" }}
          p={{ md: "20px", base: "15px" }}
          borderRadius={"8px"}
          bgColor={"white"}
          boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
        >
          <Flex flexDirection={"column"} h={"full"} gap={"20px"}>
            <Flex>
              <Heading
                fontSize={{ md: "20px", base: "17px" }}
                fontWeight={600}
                fontFamily={"Poppins"}
                color={"rgba(5, 0, 78, 1)"}
              >
                Request Mapping by State
              </Heading>
            </Flex>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Box
                as="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155455.2783282673!2d-2.028441231146848!3d52.49744370051306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2sBirmingham%2C%20UK!5e0!3m2!1sen!2sng!4v1729380698592!5m2!1sen!2sng"
                width={"100%"}
                height={"260px"}
                borderRadius={"8px"}
                style={{ border: "0" }}
                _fullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          colSpan={{ lg: 6, md: 12, base: 12 }}
          mx={{ md: "5px", base: "3px" }}
          my={{ md: "20px", base: "10px" }}
          p={{ md: "20px", base: "15px" }}
          height={"351px"}
          borderRadius={"8px"}
          bgColor={"white"}
          boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
        >
          <Heading
            fontSize={{ md: "20px", base: "17px" }}
            fontWeight={600}
            fontFamily={"Poppins"}
            color={"rgba(5, 0, 78, 1)"}
          >
            Approval vs Decline
          </Heading>
          <Flex
            my={"10px"}
            justifyContent={"center"}
            alignItems={"center"}
            mx={"auto"}
          >
            <BarChart />
          </Flex>
          <Divider orientation="horizontal" />
          <Flex
            maxW={"202px"}
            height={"50px"}
            my={"50px"}
            justifyContent={"center"}
            alignItems={"center"}
            mx={"auto"}
            gap={"20px"}
          >
            <Flex
              flexDirection={"column"}
              gap={{ md: "10px", base: "5px" }}
              borderRight={"1px solid rgba(189, 201, 211, 1)"}
              pr={"15px"}
            >
              <Flex gap={{ md: "10px", base: "5px" }}>
                <Flex
                  width={{ md: "20px", base: "15px" }}
                  height={{ md: "20px", base: "15px" }}
                  borderRadius={"50%"}
                  bgColor={"rgba(0, 224, 150, 1)"}
                  mt={{ md: "0px", base: "2px" }}
                />
                <Text
                  fontFamily={"Poppins"}
                  fontSize={{ md: "16px", base: "14px" }}
                  fontWeight={400}
                  color={"rgba(150, 165, 184, 1)"}
                >
                  Approved
                </Text>
              </Flex>
              <Text
                fontFamily={"Poppins"}
                fontWeight={600}
                fontSize={{ md: "14px", base: "12px" }}
                color={"rgba(34, 43, 69, 1)"}
                pl={{ md: "30px", base: "20px" }}
              >
                1,135
              </Text>
            </Flex>
            <Flex
              flexDirection={"column"}
              gap={{ md: "10px", base: "5px" }}
              pr={"10px"}
            >
              <Flex gap={{ md: "10px", base: "5px" }}>
                <Flex
                  width={{ md: "20px", base: "15px" }}
                  height={{ md: "20px", base: "15px" }}
                  borderRadius={"50%"}
                  bgColor={"rgba(252, 12, 12, 1)"}
                  mt={{ md: "0px", base: "2px" }}
                />
                <Text
                  fontFamily={"Poppins"}
                  fontSize={{ md: "16px", base: "14px" }}
                  fontWeight={400}
                  color={"rgba(150, 165, 184, 1)"}
                >
                  Decline
                </Text>
              </Flex>
              <Text
                fontFamily={"Poppins"}
                fontWeight={600}
                fontSize={{ md: "14px", base: "12px" }}
                color={"rgba(34, 43, 69, 1)"}
                pl={{ md: "30px", base: "20px" }}
              >
                635
              </Text>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;