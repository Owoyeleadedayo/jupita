import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Select,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import ModalPage from "../ModalPage";
import RepaymentModal from "./RepaymentModal";

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
    { name: "Cumulative Credit Score", no: "702", color: "#078861" },
    { name: "Risk Level", no: "Medium", color: "#FC0C0C" },
    { name: "Interest Rate (annual)", no: "36%", color: "#000000" },
  ];

  const commentHistory = [
    {
      comment: "Customer is Over leveraged, cannot repay the loan",
      time: "updated at: 9:02 AM Sep 22, 2024",
    },
    {
      comment: "Additional document required - Bank Statement",
      time: "updated at: 9:02 AM Sep 22, 2024",
    },
    {
      comment: "Additional document required - Bank Statement",
      time: "updated at: 9:02 AM Sep 22, 2024",
    },
    {
      comment: "Additional document required - Bank Statement",
      time: "updated at: 9:02 AM Sep 22, 2024",
    },
    {
      comment: "Additional document required - Bank Statement",
      time: "updated at: 9:02 AM Sep 22, 2024",
    },
    {
      comment: "Additional document required - Bank Statement",
      time: "updated at: 9:02 AM Sep 22, 2024",
    },
    {
      comment: "Customer is Over leveraged, cannot repay the loan",
      time: "updated at: 9:02 AM Sep 22, 2024",
    },
    {
      comment: "Additional document required - Bank Statement",
      time: "updated at: 9:02 AM Sep 22, 2024",
    },
  ];


  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: openRepayment,
    onOpen: onOpenRepayment,
    onClose: closeRepayment,
  } = useDisclosure();
  
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
                  variant={"none"}
                  bgColor={"#FC0C0C"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"14px"}
                  color={"#FFFFFF"}
                  _hover={{
                    bg: "#FC0C0C",
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
          <Grid templateColumns="repeat(3, 1fr)" pt={"15px"} gap={"10px"}>
            <GridItem
              width={"320px"}
              gap={"30px"}
              bgColor={"#D9D9D91A"}
              height={"390px"}
              borderRadius={"8px"}
            >
              <Flex p={"20px"} flexDirection={"column"} gap={"20px"}>
                {summary.map((item, index) => (
                  <Flex justifyContent={"space-between"} key={index}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={400}
                      fontSize={"14px"}
                      color={"#737791"}
                    >
                      {item.name}
                    </Text>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={700}
                      fontSize={"14px"}
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
              bgColor={"#D9D9D91A"}
              width={"400px"}
              height={"390px"}
              borderRadius={"8px"}
            >
              <Flex p={"20px"} flexDirection={"column"} gap={"20px"}>
                <Flex justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"#737791"}
                  >
                    Loan Tenor(Months)
                  </Text>
                  <Flex>
                    <Select
                      width={"100%"}
                      border={"none"}
                      bgColor={"#D9D9D91A"}
                      fontFamily={"Nunito Sans"}
                      fontWeight={700}
                      fontSize={"14px"}
                      color={"#000000"}
                      _focus={{
                        borderColor: "transparent",
                      }}
                      _hover={{
                        borderColor: "transparent",
                      }}
                      variant={"#FC0C0C"}
                    >
                      <option
                        value="option1"
                        style={{ backgroundColor: "#D9D9D91A" }}
                      >
                        10 months
                      </option>
                      <option
                        value="option2"
                        style={{ backgroundColor: "#D9D9D91A" }}
                      >
                        9 months
                      </option>
                      <option
                        value="option3"
                        style={{ backgroundColor: "#D9D9D91A" }}
                      >
                        8 months
                      </option>
                      <option
                        value="option4"
                        style={{ backgroundColor: "#D9D9D91A" }}
                      >
                        7 months
                      </option>
                      <option
                        value="option5"
                        style={{ backgroundColor: "#D9D9D91A" }}
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
                    fontSize={"14px"}
                    color={"#737791"}
                  >
                    Maximum Loan Amount
                  </Text>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={700}
                    fontSize={"14px"}
                    color={"#000000"}
                  >
                    1,800,000.00
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"#737791"}
                  >
                    Monthly Repayment
                  </Text>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={700}
                    fontSize={"14px"}
                    color={"#000000"}
                  >
                    180,000.00
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"#737791"}
                  >
                    Monthly Repayment to Income
                  </Text>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={700}
                    fontSize={"14px"}
                    color={"#000000"}
                  >
                    21%
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
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
                      fontSize={"14px"}
                      textDecoration={"underline"}
                      color={"#FFFFFF"}
                      cursor={"pointer"}
                      bg={"#FC0C0C"}
                      p={"2px 8px"}
                      borderRadius={"4px"}
                    >
                      Edit
                    </Text>
                    <Input
                      type="number"
                      width={"142px"}
                      height={"34px"}
                      bg={"#D9D9D91A"}
                      fontFamily={"Nunito Sans"}
                      fontWeight={700}
                      fontSize={"14px"}
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
                    fontSize={"14px"}
                    color={"#737791"}
                  >
                    Monthly Repayment
                  </Text>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={700}
                    fontSize={"14px"}
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
                      variant={"none"}
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
                <Flex pt={"20px"} px={"20px"} gap={"10px"}>
                  <Button
                    width={"100px"}
                    height={"40px"}
                    variant={"none"}
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
                    width={"100px"}
                    height={"40px"}
                    bgColor={"#0BB581"}
                    variant={"none"}
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
              {hasDecided && approvalStatus === "Approved" && (
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"10px"}
                >
                  <Flex>
                    <Button
                      width={"180px"}
                      height={"28px"}
                      variant={"none"}
                      bgColor={"#FC0C0C"}
                      textAlign={"center"}
                      textColor={"#FFFFFF"}
                      fontFamily={"Nunito Sans"}
                      fontWeight={700}
                      fontSize={"12px"}
                      onClick={onOpenRepayment}
                    >
                      ADD REPAYMENT TOOL
                    </Button>
                    <RepaymentModal
                      openRepayment={openRepayment}
                      closeRepayment={closeRepayment}
                    />
                  </Flex>
                  <Flex justifyContent={"center"} alignItems={"center"}>
                    <Button
                      width={"150px"}
                      height={"28px"}
                      variant={"none"}
                      bgColor={"#078861"}
                      textAlign={"center"}
                      textColor={"#FFFFFF"}
                      fontFamily={"Nunito Sans"}
                      fontWeight={700}
                      fontSize={"12px"}
                      onClick={onOpen}
                    >
                      CREATE LOAN
                    </Button>
                    <ModalPage isOpen={isOpen} onClose={onClose} />
                  </Flex>
                </Flex>
              )}
            </GridItem>
            <GridItem>
              <Flex direction={"column"}>
                <Flex>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={700}
                    fontSize={"14px"}
                    color={"#000000"}
                  >
                    Add Comment
                  </Text>
                </Flex>
                <Flex direction={"column"} gap={"10px"}>
                  <Textarea
                    width={"260px"}
                    height={"150px"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={700}
                    fontSize={"14px"}
                    color={"#000000"}
                    borderColor={"#FC0C0C"}
                  />
                  <Button
                    width={"100px"}
                    height={"30px"}
                    bgColor={"#FC0C0C"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={700}
                    fontSize={"14px"}
                    color={"#FFFFFF"}
                    variant={"none"}
                  >
                    SAVE
                  </Button>
                </Flex>
                <Box
                  width={"260px"}
                  height={"160px"}
                  bgColor={"#FCFCFC"}
                  p={"10px"}
                  mt={"15px"}
                  overflowY="auto"
                  sx={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#FC0C0C #f1f1f1",
                  }}
                >
                  <Flex direction={"column"} gap={"5px"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontWeight={700}
                      fontSize={"14px"}
                      color={"#000000"}
                    >
                      Comment History
                    </Text>
                    <Flex direction={"column"}>
                      {commentHistory.map((item, index) => (
                        <Flex key={index} direction={"column"}>
                          <Text
                            fontFamily={"Nunito Sans"}
                            fontWeight={400}
                            fontSize={"10px"}
                            color={"#000000"}
                          >
                            {item.comment}
                          </Text>
                          <Text
                            fontFamily={"Nunito Sans"}
                            fontWeight={400}
                            fontSize={"7px"}
                            color={"#000000"}
                          >
                            {item.time}
                          </Text>
                        </Flex>
                      ))}
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      )}
    </>
  );
};

export default LoanSummary;
