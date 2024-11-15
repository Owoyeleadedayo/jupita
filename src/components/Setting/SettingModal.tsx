import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Modal,
  Select,
  Flex,
  Text,
} from "@chakra-ui/react";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

const SettingModal = ({ isOpen, onClose,}: IModal) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Flex direction={"column"}>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDir={"column"} py={"35px"} gap={"10px"}>
                <Flex justifyContent={"center"} alignItems={"center"}>
                  <Text
                    textAlign={"center"}
                    fontFamily={"Nunito Sans"}
                    fontWeight={700}
                    fontSize={"20px"}
                  >
                    ADD TEAM MEMBER
                  </Text>
                </Flex>
                <Flex flexDir={"column"} gap={"20px"}>
                  <FormControl>
                    <FormLabel>Full name</FormLabel>
                    <Input type="text" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Email Address</FormLabel>
                    <Input type="email" />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Select Role</FormLabel>
                    <Select>
                      <option></option>
                      <option></option>
                      <option></option>
                    </Select>
                  </FormControl>
                </Flex>
              </Flex>

              <Flex justifyContent={"center"} alignItems={"center"} pb="20px">
                <Button
                  width={"100%"}
                  height={"100%"}
                  px={"10px"}
                  py={"15px"}
                  bgColor={"#2261B0"}
                  color={"#FFFFFF"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"16px"}
                  borderRadius={"8px"}
                >
                  Invite Team Member
                </Button>
              </Flex>
            </ModalBody>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SettingModal;
