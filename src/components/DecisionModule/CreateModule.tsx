import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Select,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardBackspace, MdQuestionMark } from "react-icons/md";

const CreateModule = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        p={"10px"}
        direction={"column"}
        gap={"30px"}
      >
        <Flex
          width={"100%"}
          height={"100%"}
          bgColor={"#FFFFFF"}
          borderRadius={"8px"}
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
          p={"10px"}
          direction={"column"}
          gap={"30px"}
        >
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
              pt={"3px"}
            >
              Back
            </Text>
          </Flex>
          <Heading
            fontFamily={"Nunito Sans"}
            fontWeight={600}
            fontSize={"20px"}
            color={"#000000"}
            textAlign={"center"}
          >
            Create New Module
          </Heading>

          <Flex justifyContent={"space-between"}>
            <Flex direction={"column"} gap={"5px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#000000"}
                textTransform={"capitalize"}
              >
                Decision module name
              </Text>
              <Input
                width={"400px"}
                borderRadius={"8px"}
                border={"1px solid #C4C4C4"}
                fontFamily={"Nunito Sans"}
                _focus={{
                  border: "1px solid #D46A35",
                }}
                variant={"none"}
              />
            </Flex>

            <Flex pt={"30px"}>
              <Button
                variant={"none"}
                fontFamily={"Nunito Sans"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#D46A35"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                Edit
              </Button>
              <Button
                variant={"none"}
                fontFamily={"Nunito Sans"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#D46A35"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                Save changes
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <Box
          bgColor={"#FFFFFF"}
          borderRadius={"8px"}
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
        >
          <Flex p={"20px"}>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={600}
              fontSize={"20px"}
              color={"#151D48"}
            >
              Define KYC Rule
            </Text>
          </Flex>
          <TableContainer width={"100%"}>
            <Table>
              <Thead>
                <Tr>
                  <Th
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    fontSize={"14px"}
                    color={"#000000"}
                    textTransform={"capitalize"}
                  >
                    Parameter
                  </Th>
                  <Th
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    fontSize={"14px"}
                    color={"#000000"}
                    textTransform={"capitalize"}
                  >
                    Parameter Type
                  </Th>
                  <Th
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    fontSize={"14px"}
                    color={"#000000"}
                    textTransform={"capitalize"}
                  >
                    Operator
                  </Th>
                  <Th
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    fontSize={"14px"}
                    color={"#000000"}
                    textTransform={"capitalize"}
                  >
                    Value
                  </Th>
                  <Th
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    fontSize={"14px"}
                    color={"#000000"}
                    textTransform={"capitalize"}
                  ></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Age"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option value="">Select Age</option>
                        {Array.from({ length: 83 }, (_, i) => i + 18).map(
                          (age) => (
                            <option key={age} value={age}>
                              {age}
                            </option>
                          )
                        )}
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Integer"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>VarChar</option>
                        <option>Float</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Between"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex gap={"3px"}>
                      <Input
                        border={"none"}
                        width={"50px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      />
                      <Text
                        pt={"20px"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"16px"}
                      >
                        and
                      </Text>
                      <Input
                        border={"none"}
                        width={"50px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      />
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Button
                        variant={"none"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"14px"}
                        color={"#FC0C0C"}
                      >
                        Delete
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="State of Residence"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Varchar"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="In"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Input
                      placeholder="5 selections"
                      textColor={"#D46A35"}
                      border={"none"}
                      width={"120px"}
                      borderBottom={"1px solid black"}
                      borderRadius={"0px"}
                    />
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Button
                        variant={"none"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"14px"}
                        color={"#FC0C0C"}
                      >
                        Delete
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Net Income"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Float"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Minimum"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Input
                      placeholder="50,000.00"
                      textColor={"#D46A35"}
                      border={"none"}
                      width={"120px"}
                      borderBottom={"1px solid black"}
                      borderRadius={"0px"}
                    />
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Button
                        variant={"none"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"14px"}
                        color={"#FC0C0C"}
                      >
                        Delete
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Flex p={"20px"} justifyContent={"space-between"}>
            <Button
              width={"80px"}
              height={"30px"}
              bgColor={"#FFF4EE"}
              fontFamily={"Nunito Sans"}
              fontWeight={800}
              fontSize={"14px"}
              color={"#D46A35"}
              p={"3px"}
            >
              Add Rule +
            </Button>

            <Button variant={"none"} color={"#D46A35"} pb={"3px"}>
              Save changes
            </Button>
          </Flex>
        </Box>

        <Box
          bgColor={"#FFFFFF"}
          borderRadius={"8px"}
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
        >
          <Flex p={"20px"}>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={600}
              fontSize={"20px"}
              color={"#151D48"}
            >
              Define Credit Bureau Rule
            </Text>
          </Flex>
          <TableContainer width={"100%"}>
            <Table>
              <Thead>
                <Tr>
                  <Th
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    fontSize={"14px"}
                    color={"#000000"}
                    textTransform={"capitalize"}
                  >
                    Parameter
                  </Th>
                  <Th
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    fontSize={"14px"}
                    color={"#000000"}
                    textTransform={"capitalize"}
                  >
                    Parameter Type
                  </Th>
                  <Th
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    fontSize={"14px"}
                    color={"#000000"}
                    textTransform={"capitalize"}
                  >
                    Operator
                  </Th>
                  <Th
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    fontSize={"14px"}
                    color={"#000000"}
                    textTransform={"capitalize"}
                  >
                    Value
                  </Th>
                  <Th
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    fontSize={"14px"}
                    color={"#000000"}
                    textTransform={"capitalize"}
                  ></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Past Due Loans (60..."
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Integer"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Between"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex gap={"3px"}>
                      <Input
                        border={"none"}
                        width={"50px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      />
                      <Text
                        pt={"20px"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"16px"}
                      >
                        and
                      </Text>
                      <Input
                        border={"none"}
                        width={"50px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      />
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Button
                        variant={"none"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"14px"}
                        color={"#FC0C0C"}
                      >
                        Delete
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Past Due Loans (90..."
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Integer"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Between"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex gap={"3px"}>
                      <Input
                        border={"none"}
                        width={"50px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      />
                      <Text
                        pt={"20px"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"16px"}
                      >
                        and
                      </Text>
                      <Input
                        border={"none"}
                        width={"50px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      />
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Button
                        variant={"none"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"14px"}
                        color={"#FC0C0C"}
                      >
                        Delete
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Inquiry in 12 months"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Integer"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="between"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex gap={"3px"}>
                      <Input
                        border={"none"}
                        width={"50px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      />
                      <Text
                        pt={"20px"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"16px"}
                      >
                        and
                      </Text>
                      <Input
                        border={"none"}
                        width={"50px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      />
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Button
                        variant={"none"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"14px"}
                        color={"#FC0C0C"}
                      >
                        Delete
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Flex p={"20px"} justifyContent={"space-between"}>
            <Button
              width={"80px"}
              height={"30px"}
              bgColor={"#FFF4EE"}
              fontFamily={"Nunito Sans"}
              fontWeight={800}
              fontSize={"14px"}
              color={"#D46A35"}
              p={"3px"}
            >
              Add Rule +
            </Button>

            <Button variant={"none"} color={"#D46A35"} pb={"3px"}>
              Save changes
            </Button>
          </Flex>
        </Box>

        <Box
          bgColor={"#FFFFFF"}
          borderRadius={"8px"}
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
        >
          <Flex p={"20px"}>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={600}
              fontSize={"20px"}
              color={"#151D48"}
            >
              Loan Offer
            </Text>
          </Flex>
          <TableContainer width={"100%"}>
            <Table>
              <Thead>
                <Tr>
                  <Th
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    fontSize={"14px"}
                    color={"#000000"}
                    textTransform={"capitalize"}
                  >
                    Parameter
                  </Th>
                  <Th
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    fontSize={"14px"}
                    color={"#000000"}
                    textTransform={"capitalize"}
                  >
                    Parameter Type
                  </Th>
                  <Th
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    fontSize={"14px"}
                    color={"#000000"}
                    textTransform={"capitalize"}
                  >
                    Operator
                  </Th>
                  <Th
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    fontSize={"14px"}
                    color={"#000000"}
                    textTransform={"capitalize"}
                  >
                    Value
                  </Th>
                  <Th
                    fontFamily={"Nunito Sans"}
                    fontWeight={800}
                    fontSize={"14px"}
                    color={"#000000"}
                    textTransform={"capitalize"}
                  ></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Loan Amount"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Integer"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Between"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex gap={"3px"}>
                      <Input
                        border={"none"}
                        width={"50px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      />
                      <Text
                        pt={"20px"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"16px"}
                      >
                        and
                      </Text>
                      <Input
                        border={"none"}
                        width={"50px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      />
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Button
                        variant={"none"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"14px"}
                        color={"#FC0C0C"}
                      >
                        Delete
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Interest Rate"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Integer"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Between"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex gap={"3px"}>
                      <Input
                        border={"none"}
                        width={"50px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      />
                      <Text
                        pt={"20px"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"16px"}
                      >
                        and
                      </Text>
                      <Input
                        border={"none"}
                        width={"50px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      />
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Button
                        variant={"none"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"14px"}
                        color={"#FC0C0C"}
                      >
                        Delete
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="inquiry in 12 months"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Integer"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Select
                        placeholder="Between"
                        border={"none"}
                        width={"120px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      >
                        <option>Hello</option>
                      </Select>
                      <Flex
                        width={"20px"}
                        height={"20px"}
                        borderRadius={"50%"}
                        bgColor={"#FFF4EE"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mb={"20px"}
                      >
                        <MdQuestionMark fontSize={"14px"} color="#D46A35" />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex gap={"3px"}>
                      <Input
                        border={"none"}
                        width={"50px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      />
                      <Text
                        pt={"20px"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"16px"}
                      >
                        and
                      </Text>
                      <Input
                        border={"none"}
                        width={"50px"}
                        borderBottom={"1px solid black"}
                        borderRadius={"0px"}
                      />
                    </Flex>
                  </Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Button
                        variant={"none"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={400}
                        fontSize={"14px"}
                        color={"#FC0C0C"}
                      >
                        Delete
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Flex p={"20px"} justifyContent={"space-between"}>
            <Button
              width={"80px"}
              height={"30px"}
              bgColor={"#FFF4EE"}
              fontFamily={"Nunito Sans"}
              fontWeight={800}
              fontSize={"14px"}
              color={"#D46A35"}
              p={"3px"}
            >
              Add Rule +
            </Button>

            <Button variant={"none"} color={"#D46A35"} pb={"3px"}>
              Save changes
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default CreateModule;
