import { Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

const WeeklySummary = () => {
    const weekSummary = [
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
  return (
    <>
      <Flex width={"100%"} height={"100%"} flexDir={"column"} gap={"5px"}>
        <Text
          fontFamily={"Nunito Sans"}
          fontWeight={800}
          fontSize={"14px"}
          color={"#000000"}
        >
          Weekly Transaction Summary
        </Text>

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
              {weekSummary.map((item, index) => (
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
      </Flex>
    </>
  );
}

export default WeeklySummary;
