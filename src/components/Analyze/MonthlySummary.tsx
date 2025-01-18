import { Box, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

const MonthlySummary = () => {
    const monthSummary = [
      {
        month: "January 2023",
        totalCredit: "10,882,931.76",
        totalDebit: "10,882,931.76",
        averageCredit: "10,882,931.76",
        averageDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        balance: "10,882,931.76",
      },
      {
        month: "January 2023",
        totalCredit: "10,882,931.76",
        totalDebit: "10,882,931.76",
        averageCredit: "10,882,931.76",
        averageDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        balance: "10,882,931.76",
      },
      {
        month: "January 2023",
        totalCredit: "10,882,931.76",
        totalDebit: "10,882,931.76",
        averageCredit: "10,882,931.76",
        averageDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        balance: "10,882,931.76",
      },
      {
        month: "January 2023",
        totalCredit: "10,882,931.76",
        totalDebit: "10,882,931.76",
        averageCredit: "10,882,931.76",
        averageDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        balance: "10,882,931.76",
      },
      {
        month: "January 2023",
        totalCredit: "10,882,931.76",
        totalDebit: "10,882,931.76",
        averageCredit: "10,882,931.76",
        averageDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        balance: "10,882,931.76",
      },
      {
        month: "January 2023",
        totalCredit: "10,882,931.76",
        totalDebit: "10,882,931.76",
        averageCredit: "10,882,931.76",
        averageDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        balance: "10,882,931.76",
      },
      {
        month: "January 2023",
        totalCredit: "10,882,931.76",
        totalDebit: "10,882,931.76",
        averageCredit: "10,882,931.76",
        averageDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        balance: "10,882,931.76",
      },
      {
        month: "January 2023",
        totalCredit: "10,882,931.76",
        totalDebit: "10,882,931.76",
        averageCredit: "10,882,931.76",
        averageDebit: "10,882,931.76",
        highestCredit: "10,882,931.76",
        highestDebit: "10,882,931.76",
        balance: "10,882,931.76",
      },
    ];

    const card = [
      {
        title: "Total Loan Disbursement",
        amount: "40,689.98",
        color: "#078861",
      },
      {
        title: "Total Monthly Loan Repayment",
        amount: "10,882,931.76",
        color: "#FC0C0C",
      },
      {
        title: "Account Sweep",
        amount: "No",
        color: "#207EDF",
      },
      {
        title: "Transfer to Self (Credit)",
        amount: "10,882,931.76",
        color: "#078861",
      },
      {
        title: "Transfer to Self (Debit)",
        amount: "10,882,931.76",
        color: "#FC0C0C",
      },
    ];
  return (
    <>
      <Flex flexDirection={"column"}>
        <Flex width={"100%"} height={"100%"} flexDir={"column"} gap={"5px"}>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={800}
            fontSize={"14px"}
            color={"#000000"}
          >
            Monthly Transaction Summary
          </Text>

          <Box overflowX={"scroll"}>
            <TableContainer
              width={"100%"}
              bgColor={"#FCFDFD"}
              border={"1px solid #B9B9B9"}
              borderRadius={"8px"}
            >
              <Table px={"1px"}>
                <Thead>
                  <Tr>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontWeight={800}
                      fontSize={"11px"}
                      color={"#000000"}
                      textTransform={"capitalize"}
                    >
                      Month
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontWeight={800}
                      fontSize={"11px"}
                      color={"#000000"}
                      textTransform={"capitalize"}
                    >
                      Total Credit
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontWeight={800}
                      fontSize={"11px"}
                      color={"#000000"}
                      textTransform={"capitalize"}
                    >
                      Total Debit
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontWeight={800}
                      fontSize={"11px"}
                      color={"#000000"}
                      textTransform={"capitalize"}
                    >
                      Average Credit
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontWeight={800}
                      fontSize={"11px"}
                      color={"#000000"}
                      textTransform={"capitalize"}
                    >
                      Average Debit
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontWeight={800}
                      fontSize={"11px"}
                      color={"#000000"}
                      textTransform={"capitalize"}
                    >
                      Highest Credit
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontWeight={800}
                      fontSize={"11px"}
                      color={"#000000"}
                      textTransform={"capitalize"}
                    >
                      Highest Debit
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontWeight={800}
                      fontSize={"11px"}
                      color={"#000000"}
                      textTransform={"capitalize"}
                    >
                      Average Balance
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {monthSummary.map((item, index) => (
                    <Tr key={index}>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"12px"}
                        color={"#202224"}
                      >
                        {item.month}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"12px"}
                        color={"#202224"}
                      >
                        {item.totalCredit}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"12px"}
                        color={"#202224"}
                      >
                        {item.totalDebit}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"12px"}
                        color={"#202224"}
                      >
                        {item.averageCredit}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"12px"}
                        color={"#202224"}
                      >
                        {item.averageDebit}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"12px"}
                        color={"#202224"}
                      >
                        {item.highestCredit}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"12px"}
                        color={"#202224"}
                      >
                        {item.highestDebit}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"12px"}
                        color={"#202224"}
                      >
                        {item.balance}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>

          <Flex>
            <Flex gap={"10px"} py={"20px"} flexWrap={"wrap"}>
              {card.map((item, index) => (
                <Flex
                  width={"240px"}
                  height={"94px"}
                  bgColor={"#FFFFFF"}
                  borderRadius={"8px"}
                  boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
                >
                  <Flex
                    key={index}
                    width={"100%"}
                    height={"100%"}
                    p={"10px"}
                    direction={"column"}
                    gap={"5px"}
                  >
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={600}
                      fontSize={"15px"}
                      color={"#000000"}
                    >
                      {item.title}
                    </Text>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={700}
                      fontSize={"22px"}
                      color={item.color}
                    >
                      {item.amount}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default MonthlySummary;
