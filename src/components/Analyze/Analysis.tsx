import { Flex, Text } from "@chakra-ui/react";
import { MdOutlineKeyboardBackspace, MdOutlineRefresh } from "react-icons/md";
import { IoDownload } from "react-icons/io5";
import TransactionSummary from "./TransactionSummary";
import MonthlySummary from "./MonthlySummary";
import Chart from "../Chart";
import WeeklySummary from "./WeeklySummary";
import { useNavigate, useParams } from "react-router-dom";
import { tableBody } from "./Analyze";

const Analysis = () => {
    const navigate = useNavigate();

    const param = useParams();
    const id = param.id;

    const currentTablebody = tableBody.find(
      (name) => name?.name.toString() === id
    );
  const card = [
    {
      title: "Opening Balance",
      amount: "40,689.98",
      color: "#078861",
    },
    {
      title: "Closing Balance",
      amount: "10,882,931.76",
      color: "#078861",
    },
    {
      title: "Average Monthly Balance",
      amount: "89,000.00",
      color: "#207EDF",
    },
    {
      title: "Average Daily Balance",
      amount: "79,000.00",
      color: "#207EDF",
    },
    {
      title: "Transaction Count",
      amount: "892",
      color: "#D46A35",
    },
  ];
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        p={{ md: "20px", base: "10px" }}
        borderRadius={"7px"}
        flexDirection={"column"}
        gap={"20px"}
      >
        <Flex justifyContent={"space-between"}>
          <Flex justifyContent={"center"} alignItems={"center"} gap={"10px"}>
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
            >
              Back
            </Text>
          </Flex>

          <Flex justifyContent={"center"} alignItems={"center"} gap={"8px"}>
            <Flex
              bgColor={"#2261B0"}
              width={"30px"}
              height={"30px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"50%"}
              color={"#FFFFFF"}
              cursor={"pointer"}
            >
              <MdOutlineRefresh fontSize={"25px"} />
            </Flex>

            <Flex>
              <Flex
                bgColor={"#2261B0"}
                width={"100%"}
                height={"100%"}
                px={"14px"}
                py={"5px"}
                justifyContent={"center"}
                alignItems={"center"}
                color={"#FFFFFF"}
                borderRadius={"8px"}
                gap={"5px"}
              >
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  pb={"4px"}
                >
                  <IoDownload fontSize={"20px"} color="white" />
                </Flex>
                <Flex justifyContent={"center"} alignItems={"center"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={600}
                    fontSize={"14px"}
                    textAlign={"center"}
                  >
                    DOWNLOAD REPORT
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={700}
            fontSize={"16px"}
            color={"#D46A35"}
          >
            {currentTablebody?.name}
          </Text>
        </Flex>

        <Flex gap={"10px"}>
          {card.map((item, index) => (
            <Flex
              width={"264px"}
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

        <Flex>
          <TransactionSummary />
        </Flex>

        <Flex width={"100%"} height={"100%"} flexDir={"column"} gap={"5px"}>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={800}
            fontSize={"14px"}
            color={"#000000"}
          >
            Insight
          </Text>
          <Flex bgColor={"#FFFFFF"} p={"15px"} borderRadius={"8px"}>
            <Chart />
          </Flex>
        </Flex>

        <Flex>
          <MonthlySummary />
        </Flex>

        <Flex>
          <WeeklySummary />
        </Flex>
      </Flex>
    </>
  );
};

export default Analysis;
