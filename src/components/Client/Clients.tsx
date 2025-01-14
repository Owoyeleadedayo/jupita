import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Table, Tbody, Td, Text, Thead, Tr } from "@chakra-ui/react";


import { IoFilterOutline } from "react-icons/io5";
import { PiExportBold } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const tableBody = [
  {
    no: "01",
    userId: 223456789011,
    name: "Adeyemi Williams Olamilekan",
    phoneNo: "090774645363",
    status: "ACTIVE",
    accOfficer: "Folashade Akinjo",
    createdAt: "21-Jul-2024 23:05",
  },
  {
    no: "02",
    userId: 223456789012,
    name: "Chinonso Amaka Nwosu",
    phoneNo: "080344756938",
    status: "ACTIVE",
    accOfficer: "Chuka Ibe",
    createdAt: "22-Jul-2024 08:15",
  },
  {
    no: "03",
    userId: 223456789013,
    name: "Tolu Adebayo Olufemi",
    phoneNo: "070678345672",
    status: "ACTIVE",
    accOfficer: "Oluwaseun Adedeji",
    createdAt: "23-Jul-2024 09:25",
  },
  {
    no: "04",
    userId: 223456789014,
    name: "Jumoke Olufunke Adeola",
    phoneNo: "090344569104",
    status: "ACTIVE",
    accOfficer: "Chika Anyanwu",
    createdAt: "24-Jul-2024 11:05",
  },
  {
    no: "05",
    userId: 223456789015,
    name: "Micheal Chukwudi Okoye",
    phoneNo: "081234567890",
    status: "ACTIVE",
    accOfficer: "Folake Adedeji",
    createdAt: "25-Jul-2024 13:30",
  },
  {
    no: "06",
    userId: 223456789016,
    name: "Titi Deborah Oyewole",
    phoneNo: "090778812233",
    status: "ACTIVE",
    accOfficer: "Joshua Kanu",
    createdAt: "26-Jul-2024 14:40",
  },
  {
    no: "07",
    userId: 223456789017,
    name: "Olumide Durojaiye",
    phoneNo: "080345672891",
    status: "ACTIVE",
    accOfficer: "Olusegun Taiwo",
    createdAt: "27-Jul-2024 15:50",
  },
  {
    no: "08",
    userId: 223456789018,
    name: "Eunice Ifeoma Nnamani",
    phoneNo: "070567823567",
    status: "ACTIVE",
    accOfficer: "Tunde Akinwande",
    createdAt: "28-Jul-2024 17:10",
  },
  {
    no: "09",
    userId: 223456789019,
    name: "David Olamide Johnson",
    phoneNo: "080455678901",
    status: "ACTIVE",
    accOfficer: "Adebayo Oladipo",
    createdAt: "29-Jul-2024 19:20",
  },
  {
    no: "10",
    userId: 223456789020,
    name: "Sola Victoria Olorunfemi",
    phoneNo: "090612346567",
    status: "ACTIVE",
    accOfficer: "Deborah Kuti",
    createdAt: "30-Jul-2024 21:30",
  },
  {
    no: "11",
    userId: 223456789021,
    name: "Ifeanyi Obinna Okafor",
    phoneNo: "081256734567",
    status: "ACTIVE",
    accOfficer: "Samuel Adeyemi",
    createdAt: "31-Jul-2024 22:00",
  },
  {
    no: "12",
    userId: 223456789022,
    name: "Amina Binta Hassan",
    phoneNo: "090232344788",
    status: "ACTIVE",
    accOfficer: "Funmilola Ogunsanya",
    createdAt: "01-Aug-2024 09:05",
  },
  {
    no: "13",
    userId: 223456789023,
    name: "Ademola Babajide Ogunyemi",
    phoneNo: "070678945632",
    status: "ACTIVE",
    accOfficer: "Ibrahim Kola",
    createdAt: "02-Aug-2024 10:15",
  },
  {
    no: "14",
    userId: 223456789024,
    name: "Ruth Kemi Oluwadare",
    phoneNo: "090544353212",
    status: "ACTIVE",
    accOfficer: "Gbolahan Adefolalu",
    createdAt: "03-Aug-2024 12:25",
  },
  {
    no: "15",
    userId: 223456789025,
    name: "Adedeji Michael Omoniyi",
    phoneNo: "080322146987",
    status: "ACTIVE",
    accOfficer: "Oluwadare Olamide",
    createdAt: "04-Aug-2024 13:30",
  },
  {
    no: "16",
    userId: 223456789026,
    name: "Oluwaseun Akinyemi",
    phoneNo: "070323145672",
    status: "ACTIVE",
    accOfficer: "Kemi Abiola",
    createdAt: "05-Aug-2024 14:40",
  },
  {
    no: "17",
    userId: 223456789027,
    name: "Ngozi Ugochukwu Eze",
    phoneNo: "081345678987",
    status: "ACTIVE",
    accOfficer: "Oluwafunmilayo Adebayo",
    createdAt: "06-Aug-2024 16:55",
  },
  {
    no: "18",
    userId: 223456789028,
    name: "Victor Odunayo Olaniyan",
    phoneNo: "090231345678",
    status: "ACTIVE",
    accOfficer: "Ngozi Okoro",
    createdAt: "07-Aug-2024 18:10",
  },
  {
    no: "19",
    userId: 223456789029,
    name: "Imoh Efe Osagie",
    phoneNo: "070565432189",
    status: "ACTIVE",
    accOfficer: "Adebisi Ayinde",
    createdAt: "08-Aug-2024 19:25",
  },
  {
    no: "20",
    userId: 223456789030,
    name: "Tomiwa Tade Adebiyi",
    phoneNo: "081543879067",
    status: "ACTIVE",
    accOfficer: "Ayotunde Fashola",
    createdAt: "09-Aug-2024 20:35",
  },
  {
    no: "21",
    userId: 223456789031,
    name: "Precious Ifeyinwa Okwuosa",
    phoneNo: "090334567891",
    status: "ACTIVE",
    accOfficer: "Micheal Kalu",
    createdAt: "10-Aug-2024 21:45",
  },
  {
    no: "22",
    userId: 223456789032,
    name: "Cynthia Oluwadamilola Adeyemi",
    phoneNo: "080678945678",
    status: "ACTIVE",
    accOfficer: "Oluwakemi Olowookere",
    createdAt: "11-Aug-2024 23:00",
  },
  {
    no: "23",
    userId: 223456789033,
    name: "Ayodele Oluwaseun Akinwale",
    phoneNo: "081234509876",
    status: "ACTIVE",
    accOfficer: "Pauline Ibe",
    createdAt: "12-Aug-2024 07:05",
  },
  {
    no: "24",
    userId: 223456789034,
    name: "Kehinde Toluwalope Alabi",
    phoneNo: "070789456345",
    status: "ACTIVE",
    accOfficer: "Uche Okafor",
    createdAt: "13-Aug-2024 08:15",
  },
  {
    no: "25",
    userId: 223456789035,
    name: "Olufemi Yetunde Sulaimon",
    phoneNo: "090345678901",
    status: "ACTIVE",
    accOfficer: "Ngozi Adebayo",
    createdAt: "14-Aug-2024 09:25",
  },
  {
    no: "26",
    userId: 223456789036,
    name: "Tunde Olamide Oyebanji",
    phoneNo: "081245679234",
    status: "ACTIVE",
    accOfficer: "Taiwo Afolabi",
    createdAt: "15-Aug-2024 10:35",
  },
  {
    no: "27",
    userId: 223456789037,
    name: "Elizabeth Olufunke Ojo",
    phoneNo: "090563872451",
    status: "ACTIVE",
    accOfficer: "Hassan Obinna",
    createdAt: "16-Aug-2024 11:45",
  },
  {
    no: "28",
    userId: 223456789038,
    name: "Benedicta Idowu Ajayi",
    phoneNo: "070678923452",
    status: "ACTIVE",
    accOfficer: "Kayode Adebiyi",
    createdAt: "17-Aug-2024 12:55",
  },
  {
    no: "29",
    userId: 223456789039,
    name: "Zainab Amina Bello",
    phoneNo: "080234567890",
    status: "ACTIVE",
    accOfficer: "Simi Adediran",
    createdAt: "18-Aug-2024 14:05",
  },
  {
    no: "30",
    userId: 223456789040,
    name: "Francisca Mercy Anunobi",
    phoneNo: "081567890123",
    status: "ACTIVE",
    accOfficer: "Abiola Olamide",
    createdAt: "19-Aug-2024 15:15",
  },
];

const Clients = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(15);

    const indexOfLastTablebody = currentPage * rowsPerPage;
    const indexOfFirstTablebody = indexOfLastTablebody - rowsPerPage;
    const currentTablebody = tableBody.slice(
      indexOfFirstTablebody,
      indexOfLastTablebody
    );

    const totalPages = Math.ceil(tableBody.length / rowsPerPage);

    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage((prev) => prev + 1);
      }
    };

    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
      }
    };

    const handleRowsPerPageChange = (rows: React.SetStateAction<number>) => {
      setRowsPerPage(rows);
      setCurrentPage(1);
    };

  return (
    <>
      <Flex
        bgColor={"white"}
        width={"100%"}
        height={"100%"}
        p={{ md: "20px", base: "10px" }}
        borderRadius={"7px"}
        flexDirection={"column"}
        gap={"20px"}
      >
        <Flex justifyContent={"space-between"}>
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
              px={{ md: "12px", base: "3px" }}
              py={{ md: "5px", base: "1px" }}
              variant={"none"}
              bgColor={"#2261B0"}
              color={"white"}
              fontFamily={"Nunito Sans"}
              fontSize={{ md: "16px", base: "14px" }}
            >
              <Flex pr={"5px"}>
                <PiExportBold color="white" fontSize={"18px"} />
              </Flex>
              Export
            </Button>
          </Flex>
        </Flex>

        <Box>
          <Table>
            <Thead>
              <Tr>
                {" "}
                <Td fontSize={"16px"} color={"#96A5B8"} py={"5px"} px={"10px"}>
                  #
                </Td>
                <Td
                  fontSize={"16px"}
                  color={"#000000"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  py={"5px"}
                  px={"10px"}
                >
                  UserId
                </Td>
                <Td
                  fontSize={"16px"}
                  color={"#000000"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  py={"5px"}
                  px={"3px"}
                >
                  Name
                </Td>
                <Td
                  fontSize={"16px"}
                  color={"#000000"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  py={"5px"}
                  px={"10px"}
                >
                  Phone Number
                </Td>
                <Td
                  fontSize={"16px"}
                  color={"#000000"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  py={"5px"}
                  px={"10px"}
                >
                  Status
                </Td>
                <Td
                  fontSize={"16px"}
                  color={"#000000"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  py={"5px"}
                  px={"10px"}
                >
                  Account Officer
                </Td>
                <Td
                  fontSize={"16px"}
                  color={"#000000"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  py={"5px"}
                  px={"3px"}
                >
                  Created At
                </Td>
              </Tr>
            </Thead>
            <Tbody>
              {currentTablebody.map((body, index) => (
                <Tr
                  onClick={() => {
                    navigate(`/clients/${body.userId}`);
                  }}
                  cursor={"pointer"}
                  key={index}
                >
                  <Td
                    fontSize={"14px"}
                    color={"#444A6D"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    py={"7px"}
                    px={"10px"}
                  >
                    {body.no}
                  </Td>
                  <Td
                    fontSize={"14px"}
                    color={"#444A6D"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    py={"10px"}
                    px={"5px"}
                  >
                    {body.userId}
                  </Td>
                  <Td
                    fontSize={"14px"}
                    color={"#444A6D"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    py={"10px"}
                    px={"0px"}
                  >
                    {body.name}
                  </Td>
                  <Td
                    fontSize={"14px"}
                    color={"#444A6D"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    py={"5px"}
                    px={"10px"}
                  >
                    {body.phoneNo}
                  </Td>
                  <Td
                    fontSize={"14px"}
                    color={"#078861"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    py={"5px"}
                    px={"10px"}
                  >
                    {body.status}
                  </Td>
                  <Td
                    fontSize={"14px"}
                    color={"#444A6D"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    py={"5px"}
                    px={"10px"}
                  >
                    {body.accOfficer}
                  </Td>
                  <Td
                    fontSize={"14px"}
                    color={"#444A6D"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    py={"5px"}
                    px={"0px"}
                  >
                    {body.createdAt}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text
            fontSize={"12px"}
            fontFamily={"Nunito Sans"}
            color={"#687182"}
            fontWeight={500}
            onClick={() => handleRowsPerPageChange(0)}
          >
            {indexOfFirstTablebody + 1}-
            {Math.min(indexOfLastTablebody, tableBody.length)} of{" "}
            {tableBody.length}
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
}

export default Clients;
