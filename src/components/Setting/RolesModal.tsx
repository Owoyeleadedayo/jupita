import {
  Box,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Admin from "./Admin";

interface RolesPage {
  isOpenRoles: boolean;
  onCloseRoles: () => void;
}

const RolesModal = ({ isOpenRoles, onCloseRoles }: RolesPage) => {
  const roles = [
    { title: "Owner", status: "owner" },
    { title: "Super Admin", status: "super_admin" },
    { title: "Admin", status: "admin" },
    { title: "Operator", status: "operator" },
    { title: "Support", status: "support" },
    { title: "Custom Roles", status: "custom_roles" },
  ];

  const [status, setStatus] = useState("owner");

  return (
    <>
      <Modal isOpen={isOpenRoles} onClose={onCloseRoles} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Grid templateColumns="repeat(12, 1fr)">
            <GridItem colSpan={4}>
              <Flex direction="column" gap={"30px"}>
                <Flex pt={"30px"} px={"50px"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={600}
                    fontSize={"16px"}
                    color={"#000000"}
                  >
                    Default Roles
                  </Text>
                </Flex>
                <Flex direction="column" gap={"10px"}>
                  {roles.map((item, index) => (
                    <Flex key={index} onClick={() => setStatus(item.status)}>
                      <Flex
                        width={"300px"}
                        height={"50px"}
                        bgColor={status === item.status ? "#2261B0" : "#FFFFFF"}
                        fontFamily={"Nunito Sans"}
                        fontWeight={600}
                        fontSize={"14px"}
                        color={status === item.status ? "#FFFFFF" : "#000000"}
                        justifyContent={"start"}
                        alignItems={"center"}
                        pl={"100px"}
                        borderRadius={0}
                        _hover={{
                          bgColor: "#2261B0",
                          color: "#FFFFFF",
                        }}
                      >
                        {item.title}
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={8}>
              {status === "owner" && <Box>Owner</Box>}
              {status === "admin" && <Box>{<Admin />}</Box>}
              {status === "super_admin" && <Box>Super Admin</Box>}
              {status === "operator" && <Box>Operator</Box>}
              {status === "support" && <Box>Support</Box>}
              {status === "custom_roles" && <Box>Support</Box>}
            </GridItem>
          </Grid>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RolesModal;
