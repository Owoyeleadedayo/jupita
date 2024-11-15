import {
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import ModalPage from "../ModalPage";

const LoanSummary = () => {
  const [showLoanDecision, setShowLoanDecision] = useState(false);
  const [approvalStatus, setApprovalStatus] = useState("");
  const [hasDecided, setHasDecided] = useState(false);

  const handleSubmit = () => {
    setShowLoanDecision(true);
  };

  const decide = (status: string) => {
    setHasDecided(true);
    setApprovalStatus(status);
  };

  const summary = [
    {
      name: "Verified Net Income",
      no: "894,000.00",
      color: "#000000#00000#0000000",
    },
    { name: "Active Loans (MR)", no: "203,000.00", color: "#00000#0000000" },
    { name: "Custom Field 1", no: "N/A", color: "#000000" },
    { name: "Custom Field 2", no: "N/A", color: "#000000" },
    { name: "Debt to Income Ratio", no: "28%", color: "#000000" },
    { name: "Debt to Income Ratio", no: "702", color: "#078861" },
    { name: "Debt to Income Ratio", no: "Medium", color: "#207EDF" },
    { name: "Interest Rate (annual)", no: "36%", color: "#000000" },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {!showLoanDecision && (
        <Grid
          templateColumns="repeat(2, 1fr)"
          bgColor={"#FFFFFF"}
          p={"20px"}
          borderRadius={"8px"}
          width={"100%"}
          height={"500px"}
        >
          <GridItem>
            <Flex flexDirection={"column"} gap={"15px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"14px"}
                color={"#000000"}
              >
                Loan Summary
              </Text>
              <Flex gap={"30px"}>
                <Flex flexDirection={"column"} gap={"10px"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"#000000"}
                  >
                    Verified Net income <span style={{ color: "red" }}>*</span>
                  </Text>
                  <Input width={"250px"} height={"40px"} />
                </Flex>
                <Flex flexDirection={"column"} gap={"10px"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"#000000"}
                  >
                    Monthly Loan Repayment (Existing){" "}
                    <span style={{ color: "red" }}>*</span>
                  </Text>
                  <Input width={"250px"} height={"40px"} />
                </Flex>
              </Flex>
              <Flex gap={"30px"}>
                <Flex flexDirection={"column"} gap={"10px"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"#000000"}
                  >
                    Custom Field 1
                  </Text>
                  <Input width={"250px"} height={"40px"} />
                </Flex>
                <Flex flexDirection={"column"} gap={"10px"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"#000000"}
                  >
                    Custom Field 2
                  </Text>
                  <Input width={"250px"} height={"40px"} />
                </Flex>
              </Flex>

              <Flex justifyContent={"center"} alignItems={"center"} pt={"20px"}>
                <Button
                  width={"300px"}
                  height={"40px"}
                  bgColor={"#D46A35"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"14px"}
                  color={"#FFFFFF"}
                  _hover={{
                    bg: "#D46A35",
                    color: "#FFFFFF",
                  }}
                  onClick={handleSubmit}
                >
                  RUN DECISION
                </Button>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      )}
      {showLoanDecision && (
        <Flex
          bgColor={"#FFFFFF"}
          p={"20px"}
          flexDirection={"column"}
          borderRadius={"8px"}
          width={"100%"}
        >
          <Flex>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={700}
              fontSize={"14px"}
              color={"#000000"}
            >
              Loan Summary
            </Text>
          </Flex>
          <Grid templateColumns="repeat(2, 1fr)" pt={"15px"} gap={"10px"}>
            <GridItem
              width={"450px"}
              gap={"30px"}
              bgColor={"#FFF4EE"}
              height={"390px"}
              borderRadius={"8px"}
            >
              <Flex p={"20px"} flexDirection={"column"} gap={"20px"}>
                {summary.map((item, index) => (
                  <Flex justifyContent={"space-between"} key={index}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={400}
                      fontSize={"15px"}
                      color={"#737791"}
                    >
                      {item.name}
                    </Text>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={500}
                      fontSize={"15px"}
                      color={item.color}
                    >
                      {item.no}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            </GridItem>
            <GridItem
              gap={"30px"}
              bgColor={"#FFF4EE"}
              width={"540px"}
              height={"390px"}
              borderRadius={"8px"}
            >
              <Flex p={"20px"} flexDirection={"column"} gap={"20px"}>
                <Flex justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"15px"}
                    color={"#737791"}
                  >
                    Loan Tenor(Months)
                  </Text>
                  <Flex>
                    <Select
                      width={"100%"}
                      border={"none"}
                      bgColor={"#FFF4EE"}
                      _focus={{
                        borderColor: "transparent",
                      }}
                      _hover={{
                        borderColor: "transparent",
                      }}
                      variant={"#FFF4EE"}
                    >
                      <option
                        value="option1"
                        style={{ backgroundColor: "#FFF4EE" }}
                      >
                        10 months
                      </option>
                      <option
                        value="option2"
                        style={{ backgroundColor: "#FFF4EE" }}
                      >
                        9 months
                      </option>
                      <option
                        value="option3"
                        style={{ backgroundColor: "#FFF4EE" }}
                      >
                        8 months
                      </option>
                      <option
                        value="option4"
                        style={{ backgroundColor: "#FFF4EE" }}
                      >
                        7 months
                      </option>
                      <option
                        value="option5"
                        style={{ backgroundColor: "#FFF4EE" }}
                      >
                        6 months
                      </option>
                    </Select>
                  </Flex>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"15px"}
                    color={"#737791"}
                  >
                    Maximum Loan Amount
                  </Text>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={500}
                    fontSize={"15px"}
                    color={"#000000"}
                  >
                    1,800,000.00
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"15px"}
                    color={"#737791"}
                  >
                    Monthly Repayment
                  </Text>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={500}
                    fontSize={"15px"}
                    color={"#000000"}
                  >
                    180,000.00
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"15px"}
                    color={"#737791"}
                  >
                    Monthly Repayment to Income
                  </Text>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={500}
                    fontSize={"15px"}
                    color={"#000000"}
                  >
                    21%
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"15px"}
                    color={"#737791"}
                  >
                    Recommended Amount
                  </Text>
                  <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"5px"}
                  >
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={500}
                      fontSize={"15px"}
                      textDecoration={"underline"}
                      color={"#207EDF"}
                      cursor={"pointer"}
                    >
                      Edit
                    </Text>
                    <Input
                      type="number"
                      width={"142px"}
                      height={"34px"}
                      bg={"#FFFFFF"}
                      variant={"none"}
                      _focus={{
                        borderColor: "#FFFFFF",
                      }}
                    />
                  </Flex>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"15px"}
                    color={"#737791"}
                  >
                    Monthly Repayment
                  </Text>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={500}
                    fontSize={"15px"}
                    color={"#000000"}
                  >
                    180,000.00
                  </Text>
                </Flex>
                {hasDecided && (
                  <Flex justifyContent={"space-between"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={400}
                      fontSize={"15px"}
                      color={"#737791"}
                    >
                      Loan Decision
                    </Text>

                    <Button
                      width={"110px"}
                      height={"30px"}
                      fontFamily={"Nunito Sans"}
                      fontWeight={500}
                      fontSize={"15px"}
                      color={"#000000"}
                      backgroundColor={
                        approvalStatus === "Approved" ? "#98F4D5" : "#FAD8D5"
                      }
                    >
                      {approvalStatus}
                    </Button>
                  </Flex>
                )}
              </Flex>

              {!hasDecided && (
                <Flex
                  pt={"20px"}
                  gap={"20px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Button
                    width={"230px"}
                    height={"40px"}
                    bgColor={"#FC0C0C"}
                    textAlign={"center"}
                    textColor={"#FFFFFF"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={700}
                    fontSize={"14px"}
                    onClick={() => decide("Rejected")}
                  >
                    REJECT
                  </Button>
                  <Button
                    width={"230px"}
                    height={"40px"}
                    bgColor={"#0BB581"}
                    textAlign={"center"}
                    textColor={"#FFFFFF"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={700}
                    fontSize={"14px"}
                    onClick={() => decide("Approved")}
                  >
                    APPROVE
                  </Button>
                </Flex>
              )}
              {hasDecided && (
                <Flex justifyContent={"center"} alignItems={"center"}>
                  <Button
                    width={"117px"}
                    height={"30px"}
                    bgColor={"#D46A35"}
                    textAlign={"center"}
                    textColor={"#FFFFFF"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={700}
                    fontSize={"14px"}
                    onClick={onOpen}
                  >
                    CREATE LOAN
                  </Button>
                  <ModalPage isOpen={isOpen} onClose={onClose} />
                </Flex>
              )}
            </GridItem>
          </Grid>
        </Flex>
      )}
    </>
  );
};

export default LoanSummary;
