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
        <ModalContent width={"300px"}>
          <Flex direction={"column"}>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDir={"column"} py={"35px"} gap={"5px"}>
                <Flex flexDir={"column"} gap={"5px"}>
                  <FormControl>
                    <FormLabel
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={600}
                      color={"#00000099"}
                    >
                      Email Address
                    </FormLabel>
                    <Input
                      type="email"
                      bgColor={"#F6F6F6"}
                      width={"250px"}
                      fontFamily={"Nunito Sans"}
                      fontWeight={600}
                      fontSize={"14px"}
                      color={"#00000099"}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={600}
                      color={"#00000099"}
                    >
                      Full Name
                    </FormLabel>
                    <Input
                      type="text"
                      bgColor={"#F6F6F6"}
                      width={"250px"}
                      fontFamily={"Nunito Sans"}
                      fontWeight={600}
                      fontSize={"14px"}
                      color={"#00000099"}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={600}
                      color={"#00000099"}
                    >
                      Select Role
                    </FormLabel>
                    <Select
                      bgColor={"#F6F6F6"}
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={600}
                      color={"#00000099"}
                    >
                      <option style={{ backgroundColor: "#F6F6F6" }}>
                        Super Admin
                      </option>
                      <option style={{ backgroundColor: "#F6F6F6" }}></option>
                      <option style={{ backgroundColor: "#F6F6F6" }}></option>
                    </Select>
                  </FormControl>
                </Flex>
              </Flex>

              <Flex justifyContent={"center"} alignItems={"center"} pb="20px">
                <Button
                  width={"175px"}
                  height={"30px"}
                  bgColor={"#FC0C0C"}
                  color={"#FFFFFF"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"14px"}
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
