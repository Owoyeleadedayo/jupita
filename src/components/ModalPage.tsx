import {

  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,


} from "@chakra-ui/react";
import  Lottie  from "lottie-react";


import Ani from '../assets/animation/Animation - 1730419461708.json'

interface IModalPage {
  isOpen: boolean;
  onClose: () => void;
}

const ModalPage = ({ isOpen, onClose }: IModalPage) => {
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Lottie
                animationData={Ani}
                loop={true}
                style={{ width: "60%", height: "auto" }}
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

export default ModalPage;
