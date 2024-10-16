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
} from "@chakra-ui/react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiExportBold } from "react-icons/pi";


const Dashboard = () => {
  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        mx={"5px"}
        px={"20px"}
        py={"10px"}
        borderRadius={"8px"}
        bgColor={"white"}
        boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
      >
        <Box>
          <Heading fontFamily={"Poppins"} fontSize={"20px"}>
            Period
          </Heading>
          <Flex alignItems={"center"}>
            <Text fontFamily={"Poppins"} fontSize={"16px"} fontWeight={400}>
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
            width={"227px"}
            height={"40px"}
            bgColor={"rgba(212, 106, 53, 1)"}
            textAlign={"center"}
            fontSize={"14px"}
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

      <Grid templateColumns="repeat(12, 1fr)" gap={"10px"}>
        <GridItem
          colSpan={7}
          mx={"5px"}
          my={"20px"}
          px={"20px"}
          py={"10px"}
          borderRadius={"8px"}
          bgColor={"white"}
          boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
        >
          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            <Flex flexDirection={"column"}>
              <Heading
                fontSize={"20px"}
                fontFamily={"Poppins"}
                fontWeight={600}
                lineHeight={"32px"}
              >
                Applications
              </Heading>
              <Text
                fontSize={"16px"}
                fontFamily={"Poppins"}
                fontWeight={400}
                lineHeight={"30px"}
              >
                Summary
              </Text>
            </Flex>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Button border={"1px solid black"} variant={"none"}>
                <PiExportBold />
                Export
              </Button>
            </Flex>
          </Flex>
          
        </GridItem>
        <GridItem
          colSpan={5}
          mx={"5px"}
          my={"20px"}
          px={"20px"}
          py={"10px"}
          borderRadius={"8px"}
          bgColor={"white"}
          boxShadow={"0px 4px 10px rgba(0, 0, 0, 0.1)"}
        >
          <Flex>
            <Text
              fontFamily={"Poppins"}
              fontSize={"20px"}
              fontWeight={600}
              lineHeight={"32px"}
            >
              Insights
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
