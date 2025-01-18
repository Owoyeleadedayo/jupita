import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Input, Menu, MenuButton, MenuItem, MenuList, Select, Stack, Text } from "@chakra-ui/react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CreditSearch = () => {
     const navigate = useNavigate();
  return (
    <>
      <Flex
        bgColor={"#FFFFFF"}
        width={"100%"}
        height={"100%"}
        p={{ md: "20px", base: "10px" }}
        borderRadius={"7px"}
        flexDirection={"column"}
        gap={"20px"}
      >
        <Flex gap={"20px"}>
          <Flex my={"auto"}>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={600}
              fontSize={"14px"}
              color={"#151D48"}
            >
              Report Type:
            </Text>
          </Flex>
          <Menu>
            <MenuButton
              fontFamily={"Nunito Sans"}
              fontWeight={400}
              fontSize={"14px"}
              color={"#151D48"}
              bgColor={"#D9D9D9"}
              as={Button}
              rightIcon={<IoChevronDownCircleOutline />}
            >
              Individual
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <FormControl>
          <Flex flexDirection={"column"} gap={"30px"}>
            <Box>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontWeight={600}
                fontSize={"14px"}
                color={"#151D48"}
              >
                BVN
              </FormLabel>
              <Input type="number" width={"518px"} height={"50px"} />
            </Box>
            <Box>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontWeight={600}
                fontSize={"14px"}
                color={"#151D48"}
              >
                Reason for Enquiry
              </FormLabel>
              <Select width={"518px"} height={"50px"}>
                <option></option>
                <option></option>
              </Select>
            </Box>
          </Flex>
        </FormControl>

        <Stack spacing={5} direction="row">
          <Checkbox
            sx={{
              ".chakra-checkbox__control": {
                borderColor: "#FC0C0C",
                _hover: {
                  borderColor: "#FC0C0C",
                },
                _checked: {
                  backgroundColor: "#FC0C0C",
                  borderColor: "#FC0C0C",
                  _before: {
                    backgroundColor: "#fff",
                  },
                },
              },
            }}
            defaultChecked
          >
            CRC
          </Checkbox>
          <Checkbox
            sx={{
              ".chakra-checkbox__control": {
                borderColor: "#FC0C0C",
                _hover: {
                  borderColor: "#FC0C0C",
                },
                _checked: {
                  backgroundColor: "#FC0C0C",
                  borderColor: "#FC0C0C",
                  _before: {
                    backgroundColor: "#FC0C0C",
                  },
                },
              },
            }}
          >
            CRS
          </Checkbox>
          <Checkbox
            sx={{
              ".chakra-checkbox__control": {
                borderColor: "#FC0C0C",
                _hover: {
                  borderColor: "#FC0C0C",
                },
                _checked: {
                  backgroundColor: "#FC0C0C",
                  borderColor: "#FC0C0C",
                  _before: {
                    backgroundColor: "#fff",
                  },
                },
              },
            }}
            defaultChecked
          >
            Checkbox
          </Checkbox>
        </Stack>

        <Flex mt={"20px"}>
          <Button
            bgColor={"#FC0C0C"}
            width={"560px"}
            height={"50px"}
            borderRadius={"10px"}
            color={"#FFFFFF"}
            _hover={{
              backgroundColor: "#FFFFFF",
              color: "#FC0C0C",
              border: "1px solid #FC0C0C",
            }}
            onClick={() => {
              navigate("/creditSearchResult");
            }}
          >
            CHECK CREDIT REPORT
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default CreditSearch;
