import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

interface EmploymentModalPage {
  willOpen: boolean;
  toClose: () => void;
}

const EmploymentProfileModal = ({ willOpen, toClose }: EmploymentModalPage) => {
  return (
    <Modal isOpen={willOpen} onClose={toClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            paddingTop={"40px"}
            paddingX={"20px"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={800}
                color={"#000000"}
              >
                Employment Profile
              </Text>
            </Flex>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
                color={"#000000"}
              >
                Employment Type
              </FormLabel>
              <Input
                type="text"
                color={"#000000"}
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
                bgColor={"#F6F6F6"}
                variant={"none"}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
                color={"#000000"}
              >
                Employer Name
              </FormLabel>
              <Input
                type="text"
                color={"#000000"}
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
                bgColor={"#F6F6F6"}
                variant={"none"}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
                color={"#000000"}
              >
                Sector
              </FormLabel>
              <Input
                type="text"
                color={"#000000"}
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
                bgColor={"#F6F6F6"}
                variant={"none"}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
                color={"#000000"}
              >
                Net Income
              </FormLabel>
              <Input
                type="number"
                color={"#000000"}
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
                bgColor={"#F6F6F6"}
                variant={"none"}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
                color={"#000000"}
              >
                Work Email
              </FormLabel>
              <Input
                type="email"
                color={"#000000"}
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
                bgColor={"#F6F6F6"}
                variant={"none"}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
                color={"#000000"}
              >
                Date of Employment
              </FormLabel>
              <Input
                type="text"
                color={"#000000"}
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
                bgColor={"#F6F6F6"}
                variant={"none"}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
                color={"#000000"}
              >
                Designation
              </FormLabel>
              <Input
                type="text"
                color={"#000000"}
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
                bgColor={"#F6F6F6"}
                variant={"none"}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
                color={"#000000"}
              >
                Employer Address Line 1
              </FormLabel>
              <Input
                type="text"
                color={"#000000"}
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
                bgColor={"#F6F6F6"}
                variant={"none"}
              />
            </FormControl>
            <Flex gap={"20px"}>
              <FormControl>
                <FormLabel
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#000000"}
                >
                  State
                </FormLabel>
                <Input
                  type="text"
                  color={"#000000"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={600}
                  bgColor={"#F6F6F6"}
                  variant={"none"}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"#000000"}
                >
                  L.G.A
                </FormLabel>
                <Input
                  type="text"
                  color={"#000000"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={600}
                  bgColor={"#F6F6F6"}
                  variant={"none"}
                />
              </FormControl>
            </Flex>

            <Flex mb={"7px"}>
              <Button
                width={"100%"}
                height={"48px"}
                bgColor={"#2261B0"}
                variant={"none"}
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                color={"#FFFFFF"}
                fontWeight={700}
              >
                Save Changes
              </Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EmploymentProfileModal;
