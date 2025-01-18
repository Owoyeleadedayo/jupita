import {
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { PiExportBold } from "react-icons/pi";

const ClientsLoans = () => {
  const tableBody = [
    {
      no: "01",
      LoanId: "123456789",
      loanAmout: "2,000,000.00",
      IntAmount: "300,000.00",
      repayAmount: "2,300,000.00",
      amountRepaid: "2,300,000.00",
      amountOwed: "2,300,000.00",
      status: "ACTIVE",
      createdAt: "21-Jul- 2024 23:05",
    },
    {
      no: "02",
      LoanId: "123456789",
      loanAmout: "2,000,000.00",
      IntAmount: "300,000.00",
      repayAmount: "2,300,000.00",
      amountRepaid: "2,300,000.00",
      amountOwed: "2,300,000.00",
      status: "COMPLETED",
      createdAt: "21-Jul- 2024 23:05",
    },
    {
      no: "03",
      LoanId: "123456789",
      loanAmout: "2,000,000.00",
      IntAmount: "300,000.00",
      repayAmount: "2,300,000.00",
      amountRepaid: "2,300,000.00",
      amountOwed: "2,300,000.00",
      status: "COMPLETED",
      createdAt: "21-Jul- 2024 23:05",
    },
    {
      no: "04",
      LoanId: "123456789",
      loanAmout: "2,000,000.00",
      IntAmount: "300,000.00",
      repayAmount: "2,300,000.00",
      amountRepaid: "2,300,000.00",
      amountOwed: "2,300,000.00",
      status: "COMPLETED",
      createdAt: "21-Jul- 2024 23:05",
    },
    {
      no: "05",
      LoanId: "123456789",
      loanAmout: "2,000,000.00",
      IntAmount: "300,000.00",
      repayAmount: "2,300,000.00",
      amountRepaid: "2,300,000.00",
      amountOwed: "2,300,000.00",
      status: "COMPLETED",
      createdAt: "21-Jul- 2024 23:05",
    },
  ];
  return (
    <>
      <Flex flexDirection={"column"}>
        <Flex justifyContent={"flex-end"} my={"10px"}>
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

        <Box overflowX={"scroll"} maxWidth={{ lg: "720px", xl: "100%" }}>
          <Table>
            <Thead>
              <Tr>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"13px"}
                  fontWeight={600}
                  color={"#96A5B8"}
                  lineHeight={"16px"}
                  textTransform={"capitalize"}
                >
                  #
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"13px"}
                  color={"#000000"}
                  textTransform={"capitalize"}
                >
                  Load Id
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"12.3px"}
                  color={"#000000"}
                  textTransform={"capitalize"}
                >
                  Loan Amount
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"12.3px"}
                  color={"#000000"}
                  textTransform={"capitalize"}
                >
                  Interest Amount
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"12px"}
                  color={"#000000"}
                  textTransform={"capitalize"}
                >
                  Repayment Amount
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"12px"}
                  fontWeight={600}
                  color={"#000000"}
                  textTransform={"capitalize"}
                >
                  Amount Repaid
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"12px"}
                  fontWeight={600}
                  color={"#000000"}
                  textTransform={"capitalize"}
                >
                  Amount Owed
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"12px"}
                  fontWeight={600}
                  color={"#000000"}
                  textTransform={"capitalize"}
                >
                  Status
                </Th>
                <Th
                  fontFamily={"Nunito Sans"}
                  fontSize={"12px"}
                  fontWeight={600}
                  color={"#000000"}
                  textTransform={"capitalize"}
                >
                  Created At
                </Th>
              </Tr>
            </Thead>
            {tableBody.map((item, index) => (
              <Tbody key={index}>
                <Tr>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"13px"}
                    fontWeight={400}
                    color={"#444A6D"}
                  >
                    {item.no}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"13px"}
                    fontWeight={400}
                    color={"#444A6D"}
                  >
                    {item.LoanId}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"13px"}
                    fontWeight={400}
                    color={"#444A6D"}
                  >
                    {item.loanAmout}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"13px"}
                    fontWeight={400}
                    color={"#444A6D"}
                  >
                    {item.IntAmount}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"13px"}
                    fontWeight={400}
                    color={"#444A6D"}
                  >
                    {item.repayAmount}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"13px"}
                    fontWeight={400}
                    color={"#444A6D"}
                  >
                    {item.amountRepaid}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"13px"}
                    fontWeight={400}
                    color={"#444A6D"}
                  >
                    {item.amountOwed}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"13px"}
                    fontWeight={600}
                    color={item.status === "ACTIVE" ? "#078861" : "#0095FF"}
                  >
                    {item.status}
                  </Td>
                  <Td
                    fontFamily={"Nunito Sans"}
                    fontSize={"12.5px"}
                    fontWeight={400}
                    color={"#444A6D"}
                  >
                    {item.createdAt}
                  </Td>
                </Tr>
              </Tbody>
            ))}
          </Table>
        </Box>
      </Flex>
    </>
  );
};

export default ClientsLoans;
