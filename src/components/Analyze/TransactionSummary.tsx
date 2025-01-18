import { Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

const TransactionSummary = () => {
    const transSummary = [
      {
        type: "Credit",
        average: "10,882,931.76",
        sum: "10,882,931.76",
        amount: "10,882,931.76",
        highAmount: "10,882,931.76",
      },
      {
        type: "Debit",
        average: "10,882,931.76",
        sum: "10,882,931.76",
        amount: "10,882,931.76",
        highAmount: "10,882,931.76",
      },
      {
        type: "Balance",
        average: "10,882,931.76",
        sum: "10,882,931.76",
        amount: "10,882,931.76",
        highAmount: "10,882,931.76",
      },
    ];
  return (
    <>
      <Flex width={"100%"}>
        <Flex width={"100%"} height={"100%"} flexDir={"column"} gap={"5px"}>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={800}
            fontSize={"14px"}
            color={"#000000"}
          >
            Transaction Summary
          </Text>

          <Flex>
            <TableContainer
              width={"100%"}
              bgColor={"#FCFDFD"}
              border={"1px solid #B9B9B9"}
              borderRadius={"8px"}
            >
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
                      Transaction Type
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontWeight={800}
                      fontSize={"14px"}
                      color={"#000000"}
                      textTransform={"capitalize"}
                    >
                      Average
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontWeight={800}
                      fontSize={"14px"}
                      color={"#000000"}
                      textTransform={"capitalize"}
                    >
                      Total Sum
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontWeight={800}
                      fontSize={"14px"}
                      color={"#000000"}
                      textTransform={"capitalize"}
                    >
                      Lowest Amount
                    </Th>
                    <Th
                      fontFamily={"Nunito Sans"}
                      fontWeight={800}
                      fontSize={"14px"}
                      color={"#000000"}
                      textTransform={"capitalize"}
                    >
                      Highest Amount
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {transSummary.map((item, index) => (
                    <Tr key={index}>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"14px"}
                        color={"#202224"}
                      >
                        {item.type}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"14px"}
                        color={"#202224"}
                      >
                        {item.average}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"14px"}
                        color={"#202224"}
                      >
                        {item.sum}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"14px"}
                        color={"#202224"}
                      >
                        {item.amount}
                      </Td>
                      <Td
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"14px"}
                        color={"#202224"}
                      >
                        {item.highAmount}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default TransactionSummary;
