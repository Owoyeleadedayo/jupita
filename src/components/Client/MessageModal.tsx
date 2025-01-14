import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, Textarea } from "@chakra-ui/react";

interface MessageModalPage {
  isOpen: boolean;
  onClose: () => void;
}

const MessageModal = ({ isOpen, onClose }: MessageModalPage) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pt={"50px"}>
            <Flex
              flexDirection={"column"}
              gap={"20px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Flex direction={"column"} gap={"2px"}>
                <Flex>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"12px"}
                    fontWeight={700}
                    color={"#000000"}
                  >
                    Send message to: +2349065512525
                  </Text>
                </Flex>
                <Textarea
                  width={"250px"}
                  height={"120px"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={700}
                  color={"#000000"}
                />
              </Flex>
              <Flex justifyContent={"center"} alignItems={"center"}>
                <Button
                  bgColor="#2261B0"
                  width={"96px"}
                  height={"30px"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"12px"}
                  fontWeight={700}
                  color={"#FFFFFF"}
                >
                  Send Message
                </Button>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MessageModal;
