import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text
} from "@chakra-ui/react";
import  Lottie  from "lottie-react";


import Ani from "../../assets/animation/Animation - 1733246397386.json";

interface ProceedModalPage {
  onOpenProceed: boolean;
  onCloseProceed: () => void;
}
const ProceedModal = ({ onOpenProceed, onCloseProceed }: ProceedModalPage) => {
  return (
    <>
      <Modal isOpen={onOpenProceed} onClose={onCloseProceed}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              pt={'40px'}
              pb={'20px'}
            >
              <Lottie
                animationData={Ani}
                loop={false}
                style={{ width: "40%", height: "auto" }}
              />
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"14px"}
                color={"#207EDF"}
              >
                Decision Processed Click to View
              </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProceedModal;
