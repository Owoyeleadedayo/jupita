/* eslint-disable no-constant-condition */
import React, { useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Button,
  Table,
  Thead,
  Tr,
  Td,
  Tbody,
  Text,
  Box,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { IoFilterOutline } from "react-icons/io5";
import { PiExportBold } from "react-icons/pi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";




export const transacts = [
  {
    no: 1,
    LoanId: 223456789011,
    name: "Adeyemi Williams Olamilekan",
    phoneNumber: "090774645363",
    product: "IPPIS-TOP UP",
    status: "PENDING",
    loanAmount: "200,000.00",
    Reviewer: "Unassigned",
    applicationDate: "21-Jul-2024 23:05",
  },
  {
    no: 2,
    LoanId: 223456789012,
    name: "Temitope Olubunmi",
    phoneNumber: "09012345678",
    product: "CASH ADVANCE",
    status: "APPROVED",
    loanAmount: "150,000.00",
    Reviewer: "John Doe",
    applicationDate: "22-Jul-2024 09:15",
  },
  {
    no: 3,
    LoanId: 223456789013,
    name: "Sarah Johnson",
    phoneNumber: "08087654321",
    product: "EDUCATION LOAN",
    status: "REJECTED",
    loanAmount: "300,000.00",
    Reviewer: "Jane Smith",
    applicationDate: "23-Jul-2024 11:30",
  },
  {
    no: 4,
    LoanId: 223456789014,
    name: "Daniel Okoye",
    phoneNumber: "08123456789",
    product: "HOME IMPROVEMENT",
    status: "PENDING",
    loanAmount: "500,000.00",
    Reviewer: "Unassigned",
    applicationDate: "24-Jul-2024 14:45",
  },
  {
    no: 5,
    LoanId: 223456789015,
    name: "Tolu Adebayo",
    phoneNumber: "09098765432",
    product: "CAR LOAN",
    status: "APPROVED",
    loanAmount: "1,200,000.00",
    Reviewer: "Emily Davis",
    applicationDate: "25-Jul-2024 10:00",
  },
  {
    no: 6,
    LoanId: 223456789016,
    name: "Kola Ibrahim",
    phoneNumber: "07012345678",
    product: "PERSONAL LOAN",
    status: "PENDING",
    loanAmount: "100,000.00",
    Reviewer: "Unassigned",
    applicationDate: "26-Jul-2024 12:05",
  },
  {
    no: 7,
    LoanId: 223456789017,
    name: "Fatima Abubakar",
    phoneNumber: "08023456789",
    product: "BUSINESS LOAN",
    status: "APPROVED",
    loanAmount: "800,000.00",
    Reviewer: "Mark Lee",
    applicationDate: "27-Jul-2024 16:20",
  },
  {
    no: 8,
    LoanId: 223456789018,
    name: "Chinedu Nwankwo",
    phoneNumber: "09054321678",
    product: "TRAVEL LOAN",
    status: "DECLINED",
    loanAmount: "250,000.00",
    Reviewer: "Sarah Johnson",
    applicationDate: "28-Jul-2024 08:30",
  },
  {
    no: 9,
    LoanId: 223456789019,
    name: "Oluwaseun Adetokunbo",
    phoneNumber: "07034567890",
    product: "HEALTH LOAN",
    status: "PENDING",
    loanAmount: "350,000.00",
    Reviewer: "Unassigned",
    applicationDate: "29-Jul-2024 18:00",
  },
  {
    no: 10,
    LoanId: 223456789020,
    name: "Ifeoma Eze",
    phoneNumber: "08045678901",
    product: "CONSOLIDATION LOAN",
    status: "APPROVED",
    loanAmount: "600,000.00",
    Reviewer: "John Doe",
    applicationDate: "30-Jul-2024 09:15",
  },
  {
    no: 11,
    LoanId: 223456789021,
    name: "Micheal Johnson",
    phoneNumber: "09065432123",
    product: "LOAN FOR BUSINESS",
    status: "PENDING",
    loanAmount: "400,000.00",
    Reviewer: "Unassigned",
    applicationDate: "31-Jul-2024 11:30",
  },
  {
    no: 12,
    LoanId: 223456789022,
    name: "Ademola Yusuf",
    phoneNumber: "08112233445",
    product: "STUDENT LOAN",
    status: "DECLINED",
    loanAmount: "200,000.00",
    Reviewer: "Jane Smith",
    applicationDate: "01-Aug-2024 13:00",
  },
  {
    no: 13,
    LoanId: 223456789023,
    name: "Nneka Obi",
    phoneNumber: "07012345678",
    product: "VEHICLE LOAN",
    status: "APPROVED",
    loanAmount: "750,000.00",
    Reviewer: "Emily Davis",
    applicationDate: "02-Aug-2024 14:45",
  },
  {
    no: 14,
    LoanId: 223456789024,
    name: "Daniel Chukwu",
    phoneNumber: "09087654321",
    product: "HOME LOAN",
    status: "PENDING",
    loanAmount: "1,500,000.00",
    Reviewer: "Unassigned",
    applicationDate: "03-Aug-2024 16:00",
  },
  {
    no: 15,
    LoanId: 223456789025,
    name: "Adaobi Uche",
    phoneNumber: "08023456789",
    product: "EMERGENCY LOAN",
    status: "APPROVED",
    loanAmount: "300,000.00",
    Reviewer: "Mark Lee",
    applicationDate: "04-Aug-2024 17:30",
  },
  {
    no: 16,
    LoanId: 223456789026,
    name: "Chijioke Udo",
    phoneNumber: "09034567890",
    product: "INSTALLMENT LOAN",
    status: "PENDING",
    loanAmount: "100,000.00",
    Reviewer: "Unassigned",
    applicationDate: "05-Aug-2024 19:15",
  },
  {
    no: 17,
    LoanId: 223456789027,
    name: "Gloria Ijeoma",
    phoneNumber: "08123456789",
    product: "REMODELING LOAN",
    status: "APPROVED",
    loanAmount: "500,000.00",
    Reviewer: "Sarah Johnson",
    applicationDate: "06-Aug-2024 21:00",
  },
  {
    no: 18,
    LoanId: 223456789028,
    name: "Samuel Oluwaseun",
    phoneNumber: "09087654321",
    product: "BRIDGE LOAN",
    status: "REJECTED",
    loanAmount: "900,000.00",
    Reviewer: "Jane Smith",
    applicationDate: "07-Aug-2024 09:00",
  },
  {
    no: 19,
    LoanId: 223456789029,
    name: "Bola Akintola",
    phoneNumber: "08098765432",
    product: "PERSONAL LOAN",
    status: "PENDING",
    loanAmount: "250,000.00",
    Reviewer: "Unassigned",
    applicationDate: "08-Aug-2024 10:30",
  },
  {
    no: 20,
    LoanId: 223456789030,
    name: "Chinonso Nwachukwu",
    phoneNumber: "07012345678",
    product: "MORTGAGE LOAN",
    status: "APPROVED",
    loanAmount: "1,000,000.00",
    Reviewer: "Mark Lee",
    applicationDate: "09-Aug-2024 12:15",
  },
  {
    no: 21,
    LoanId: 223456789031,
    name: "Tomiwa Ogunleye",
    phoneNumber: "08123456789",
    product: "FESTIVE LOAN",
    status: "DECLINED",
    loanAmount: "150,000.00",
    Reviewer: "Emily Davis",
    applicationDate: "10-Aug-2024 14:45",
  },
  {
    no: 22,
    LoanId: 223456789032,
    name: "Martha Ibe",
    phoneNumber: "09045678901",
    product: "SCHOOL LOAN",
    status: "PENDING",
    loanAmount: "500,000.00",
    Reviewer: "Unassigned",
    applicationDate: "11-Aug-2024 16:30",
  },
  {
    no: 23,
    LoanId: 223456789033,
    name: "Chidera Okoro",
    phoneNumber: "08012345678",
    product: "AGRICULTURAL LOAN",
    status: "APPROVED",
    loanAmount: "800,000.00",
    Reviewer: "John Doe",
    applicationDate: "12-Aug-2024 18:00",
  },
  {
    no: 24,
    LoanId: 223456789034,
    name: "Joyce Afolabi",
    phoneNumber: "07098765432",
    product: "TECH LOAN",
    status: "PENDING",
    loanAmount: "300,000.00",
    Reviewer: "Unassigned",
    applicationDate: "13-Aug-2024 20:15",
  },
  {
    no: 25,
    LoanId: 223456789035,
    name: "Femi Akinwunmi",
    phoneNumber: "09054321678",
    product: "QUICK LOAN",
    status: "APPROVED",
    loanAmount: "450,000.00",
    Reviewer: "Mark Lee",
    applicationDate: "14-Aug-2024 09:30",
  },
  {
    no: 26,
    LoanId: 223456789036,
    name: "Kemi Balogun",
    phoneNumber: "08012345678",
    product: "FIXED LOAN",
    status: "DECLINED",
    loanAmount: "200,000.00",
    Reviewer: "Jane Smith",
    applicationDate: "15-Aug-2024 11:15",
  },
  {
    no: 27,
    LoanId: 223456789037,
    name: "Opeoluwa Adeshina",
    phoneNumber: "07065432109",
    product: "HOME EQUITY LOAN",
    status: "PENDING",
    loanAmount: "600,000.00",
    Reviewer: "Unassigned",
    applicationDate: "16-Aug-2024 12:00",
  },
  {
    no: 28,
    LoanId: 223456789038,
    name: "Tayo Egbegbe",
    phoneNumber: "08123456780",
    product: "SMALL BUSINESS LOAN",
    status: "APPROVED",
    loanAmount: "750,000.00",
    Reviewer: "Sarah Johnson",
    applicationDate: "17-Aug-2024 14:30",
  },
  {
    no: 29,
    LoanId: 223456789039,
    name: "Rita Odu",
    phoneNumber: "09087654322",
    product: "RESEARCH LOAN",
    status: "DECLINED",
    loanAmount: "300,000.00",
    Reviewer: "Emily Davis",
    applicationDate: "18-Aug-2024 16:00",
  },
  {
    no: 30,
    LoanId: 223456789040,
    name: "Emeka Nwachukwu",
    phoneNumber: "08023456789",
    product: "STARTUP LOAN",
    status: "PENDING",
    loanAmount: "1,200,000.00",
    Reviewer: "Mark Lee",
    applicationDate: "19-Aug-2024 17:15",
  },
];
const Transaction = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const navigate = useNavigate();

  const indexOfLastTransact = currentPage * rowsPerPage;
  const indexOfFirstTransact = indexOfLastTransact - rowsPerPage;
  const currentTransacts = transacts.slice(
    indexOfFirstTransact,
    indexOfLastTransact
  );

  const totalPages = Math.ceil(transacts.length / rowsPerPage);

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
        <Flex gap={{ md: "10px", base: "4px" }}>
          <InputGroup bg="#F9FAFB" width={{ md: "350px", lg: "150px" }}>
            <InputLeftElement pointerEvents="none">
              <BsSearch color="#D46A35" fontSize={"18px"} />
            </InputLeftElement>
            <Input placeholder="Search here..." />
          </InputGroup>
          <Button
            width={{ md: "100px", base: "60px" }}
            bgColor="#F9FAFB"
            gap={"10px"}
            color={"#737791"}
          >
            <IoFilterOutline color="#D46A35" fontSize={"18px"} />
            Filter
          </Button>
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"} gap={"10px"}>
          <Button
            px={{ md: "12px", base: "3px" }}
            py={{ md: "5px", base: "1px" }}
            variant={"none"}
            bgColor={"#D46A35"}
            color={"white"}
            fontFamily={"Poppins"}
            fontSize={{ md: "16px", base: "14px" }}
          >
            <Flex pr={"5px"}>
              <PiExportBold color="white" fontSize={"18px"} />
            </Flex>
            Export
          </Button>
        </Flex>
      </Flex>

      <Box overflowX={"scroll"}>
        <Table>
          <Thead>
            <Tr>
              {" "}
              <Td
                fontSize={"13px"}
                color={"#96A5B8"}
                textAlign={"center"}
                py={"5px"}
                px={"10px"}
              >
                #
              </Td>
              <Td
                fontSize={"13px"}
                color={"#000000"}
                fontFamily={"Poppins"}
                fontWeight={500}
                textAlign={"center"}
                py={"5px"}
                px={"10px"}
              >
                LoanId
              </Td>
              <Td
                fontSize={"13px"}
                color={"#000000"}
                fontFamily={"Poppins"}
                fontWeight={500}
                textAlign={"center"}
                py={"5px"}
                px={"10px"}
              >
                Name
              </Td>
              <Td
                fontSize={"13px"}
                color={"#000000"}
                fontFamily={"Poppins"}
                fontWeight={500}
                textAlign={"center"}
                py={"5px"}
                px={"10px"}
              >
                Phone Number
              </Td>
              <Td
                fontSize={"13px"}
                color={"#000000"}
                fontFamily={"Poppins"}
                fontWeight={500}
                textAlign={"center"}
                py={"5px"}
                px={"10px"}
              >
                Product
              </Td>
              <Td
                fontSize={"13px"}
                color={"#000000"}
                fontFamily={"Poppins"}
                fontWeight={500}
                textAlign={"center"}
                py={"5px"}
                px={"10px"}
              >
                Status
              </Td>
              <Td
                fontSize={"13px"}
                color={"#000000"}
                fontFamily={"Poppins"}
                fontWeight={500}
                textAlign={"center"}
                py={"5px"}
                px={"10px"}
              >
                Loan Amount
              </Td>
              <Td
                fontSize={"13px"}
                color={"#000000"}
                fontFamily={"Poppins"}
                fontWeight={500}
                textAlign={"center"}
                py={"5px"}
                px={"10px"}
              >
                Reviewer
              </Td>
              <Td
                fontSize={"13px"}
                color={"#000000"}
                fontFamily={"Poppins"}
                fontWeight={500}
                textAlign={"center"}
                py={"5px"}
                px={"10px"}
              >
                Application Date
              </Td>
            </Tr>
          </Thead>
          <Tbody>
            {currentTransacts.map((transact, index) => (
              <Tr
                onClick={() => {
                  navigate(`/transaction/${transact.LoanId}`);
                }}
                cursor={"pointer"}
                key={index}
              >
                <Td
                  fontSize={"14px"}
                  color={"#444A6D"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  textAlign={"center"}
                  py={"7px"}
                  px={"10px"}
                >
                  {transact.no}
                </Td>
                <Td
                  fontSize={"12px"}
                  color={"#444A6D"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  textAlign={"center"}
                  py={"10px"}
                  px={"5px"}
                >
                  {transact.LoanId}
                </Td>
                <Td
                  fontSize={"13px"}
                  color={"#444A6D"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  textAlign={"center"}
                  py={"10px"}
                  px={"0px"}
                >
                  {transact.name}
                </Td>
                <Td
                  fontSize={"13px"}
                  color={"#444A6D"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  textAlign={"center"}
                  py={"5px"}
                  px={"10px"}
                >
                  {transact.phoneNumber}
                </Td>
                <Td
                  fontSize={"13px"}
                  color={"#444A6D"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  textAlign={"center"}
                  py={"5px"}
                  px={"10px"}
                >
                  {transact.product}
                </Td>
                <Td
                  fontSize={"13px"}
                  color={
                    transact.status === "PENDING"
                      ? "#884DFF"
                      : transact.status === "APPROVED"
                      ? "#078861"
                      : transact.status === "DECLINED" || "REJECTED"
                      ? "#FF0520"
                      : "#444A6D"
                  }
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  textAlign={"center"}
                  py={"5px"}
                  px={"10px"}
                >
                  {transact.status}
                </Td>
                <Td
                  fontSize={"13px"}
                  color={"#444A6D"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  textAlign={"center"}
                  py={"5px"}
                  px={"10px"}
                >
                  {transact.loanAmount}
                </Td>
                <Td
                  fontSize={"13px"}
                  color={"#444A6D"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  textAlign={"center"}
                  py={"5px"}
                  px={"2px"}
                >
                  {transact.Reviewer}
                </Td>
                <Td
                  fontSize={"13px"}
                  color={"#444A6D"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  textAlign={"center"}
                  py={"5px"}
                  px={"0px"}
                >
                  {transact.applicationDate}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text
          fontSize={"12px"}
          fontFamily={"Poppins"}
          color={"#687182"}
          fontWeight={500}
          onClick={() => handleRowsPerPageChange(0)}
        >
          {indexOfFirstTransact + 1}-
          {Math.min(indexOfLastTransact, transacts.length)} of{" "}
          {transacts.length}
        </Text>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Text
            fontSize={"13px"}
            fontFamily={"Poppins"}
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
            fontFamily={"Poppins"}
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
  );
};

export default Transaction;


