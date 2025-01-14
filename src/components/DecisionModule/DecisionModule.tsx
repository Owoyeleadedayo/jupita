import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const DecisionModule = () => {
  const module = [
    {
      no: "01",
      id: "223456789011",
      name: "SME Loan",
      version: 1.1,
      status: "ACTIVE",
      createdAt: "21-Jul- 2024 23:05",
    },
    {
      no: "02",
      id: "22345664789",
      name: "Private Sector Loan",
      version: 1.1,
      status: "ACTIVE",
      createdAt: "21-Jul- 2024 23:05",
    },
    {
      no: "03",
      id: "227465253678",
      name: "Quick Credit",
      version: 1.1,
      status: "ACTIVE",
      createdAt: "21-Jul- 2024 23:05",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const indexOfLastModule = currentPage * rowsPerPage;
  const indexOfFirstModule = indexOfLastModule - rowsPerPage;

  const currentModuleBody = module.slice(indexOfFirstModule, indexOfLastModule);

  const totalPages = Math.ceil(module.length / rowsPerPage);

  const handleNextPage = () => {
    if(currentPage < totalPages){
      setCurrentPage((prev) => prev + 1)
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  };

   const handleRowsPerPageChange = (rows: React.SetStateAction<number>) => {
     setRowsPerPage(rows);
     setCurrentPage(1);
   };

   const navigate = useNavigate();

  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        bgColor={"#FFFFFF"}
        borderRadius={"8px"}
        p={"10px"}
        direction={"column"}
        gap={"30px"}
      >

        


        <Flex width={"100%"} justifyContent={"space-between"}>
          <Flex gap={{ md: "10px", base: "4px" }} flexDirection={"row-reverse"}>
            <InputGroup bg="#F9FAFB" width={"350px"}>
              <InputLeftElement pointerEvents="none">
                <BsSearch color="#2261B0" fontSize={"18px"} />
              </InputLeftElement>
              <Input placeholder="Search here..." />
            </InputGroup>
            <Button
              width={{ md: "100px", base: "60px" }}
              bgColor="#F9FAFB"
              gap={"10px"}
              color={"#737791"}
            >
              <IoFilterOutline color="#2261B0" fontSize={"18px"} />
              Filter
            </Button>
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"} gap={"10px"}>
            <Button
              width={"100%"}
              height={"100%"}
              px={"15px"}
              py={"10px"}
              variant={"none"}
              bgColor={"#2261B0"}
              color={"white"}
              fontFamily={"Nunito Sans"}
              fontSize={"12px"}
              onClick={() => navigate("/create-module")}
            >
              CREATE NEW MODULE
            </Button>
          </Flex>
        </Flex>

        <Table>
          <Thead>
            <Tr>
              <Th
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"13px"}
                color={"#96A5B8"}
              >
                #
              </Th>
              <Th
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"13px"}
                color={"#000000"}
                textTransform={"capitalize"}
              >
                Module Id
              </Th>
              <Th
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"13px"}
                color={"#000000"}
                textTransform={"capitalize"}
              >
                Module Name
              </Th>
              <Th
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"13px"}
                color={"#000000"}
                textTransform={"capitalize"}
              >
                version
              </Th>
              <Th
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"13px"}
                color={"#000000"}
                textTransform={"capitalize"}
              >
                status
              </Th>
              <Th
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"13px"}
                color={"#000000"}
                textTransform={"capitalize"}
              >
                Created at
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentModuleBody.map((item, index) => (
              <Tr key={index}>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#444A6D"}
                  textTransform={"capitalize"}
                >
                  {item.no}
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#444A6D"}
                  textTransform={"capitalize"}
                >
                  {item.id}
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#444A6D"}
                  textTransform={"capitalize"}
                >
                  {item.name}
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#444A6D"}
                  textTransform={"capitalize"}
                >
                  {item.version}
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"14px"}
                  color={"#078861"}
                  textTransform={"capitalize"}
                >
                  {item.status}
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#444A6D"}
                  textTransform={"capitalize"}
                >
                  {item.createdAt}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          px={"20px"}
        >
          <Text
            fontSize={"12px"}
            fontFamily={"Nunito Sans"}
            color={"#687182"}
            fontWeight={500}
            onClick={() => handleRowsPerPageChange(0)}
          >
            {indexOfFirstModule + 1}-
            {Math.min(indexOfLastModule, module.length)} of {module.length}
          </Text>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Text
              fontSize={"13px"}
              fontFamily={"Nunito Sans"}
              color={"#687182"}
              fontWeight={500}
            >
              Rows per page:
            </Text>
            <Button
              width={"24px"}
              height={"20px"}
              mx={"5px"}
              onClick={handlePrevPage}
            >
              <FaChevronLeft color="#687182" />
            </Button>
            <Text
              fontSize={"12px"}
              fontFamily={"Nunito Sans"}
              color={"#687182"}
              fontWeight={500}
            >
              {currentPage}/{totalPages}
            </Text>
            <Button
              width={"24px"}
              height={"20px"}
              mx={"5px"}
              onClick={handleNextPage}
            >
              <FaChevronRight color="#687182" />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default DecisionModule;
