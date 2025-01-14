import {
    Box,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import Passport1 from "../../assets/Images/Passport1.png";

interface DataModalPage {
  isOpen: boolean;
  onClose: () => void;
}

const DataModal = ({ isOpen, onClose }: DataModalPage) => {
    const data = [
      { title: "First Name:", content: "Williams" },
      { title: "Last Name:", content: "Adeyemi" },
      { title: "Other Name:", content: "Olalekan" },
      { title: "BVN:", content: "223344552277" },
      { title: "NIN:", content: "12345678909" },
      { title: "Phone Number:", content: "09065512222" },
      { title: "Enrolment Date:", content: "25-September-2021" },
      { title: "Enrolment Bank:", content: "Guaranty Trust Bank" },
      { title: "Enrolment Branch:", content: "KETU" },
    ];
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
                BVN Verification
              </Text>
            </Flex>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Box width={"127px"} height={"156px"}>
                <Image
                  src={Passport1}
                  width={"100%"}
                  height={"100%"}
                  objectFit={"contain"}
                />
              </Box>
            </Flex>
            <Box>
              {data.map((item, index) => (
                <Flex justifyContent={"space-between"} key={index} pb={"10px"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={500}
                    color={"#000000"}
                  >
                    {item.title}
                  </Text>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={700}
                    color={"#000000"}
                  >
                    {item.content}
                  </Text>
                </Flex>
              ))}
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DataModal;
