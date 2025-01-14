import {
    Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import ProceedModal from "./ProceedModal";

interface RepaymentModalPage {
  openRepayment: boolean;
  closeRepayment: () => void;
}

const RepaymentModal = ({
  openRepayment,
  closeRepayment,
}: RepaymentModalPage) => {

    const {
      isOpen: onOpenProceed,
      onOpen: onOpenProceeds,
      onClose: onCloseProceed,
    } = useDisclosure();
  return (
    <>
      <Modal isOpen={openRepayment} onClose={closeRepayment}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" gap={"20px"} pt={"50px"} pb={"20px"}>
              <Flex justifyContent={"center"} alignItems={"center"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#000000"}
                >
                  Add Repayment Tool
                </Text>
              </Flex>
              <Flex direction={"column"} gap={"2px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#00000080"}
                >
                  Select Repayment Source
                </Text>
                <Select
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#000000"}
                >
                  <option value="Paystack Direct Debit">
                    Paystack Direct Debit
                  </option>
                  <option value="Mono Direct Debit">Mono Direct Debit</option>
                </Select>
              </Flex>
              <Flex justifyContent={"center"} alignItems={"center"}>
                <Button
                  width={"100%"}
                  height={"40px"}
                  bgColor={"#2261B0"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={700}
                  color={"#FFFFFF"}
                  onClick={onOpenProceeds}
                >
                  PROCEED
                </Button>
                <ProceedModal
                  onOpenProceed={onOpenProceed}
                  onCloseProceed={onCloseProceed}
                />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RepaymentModal;
