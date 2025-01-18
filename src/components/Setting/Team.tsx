import { Button, Flex, Input, InputGroup, InputLeftElement, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import SettingModal from "./SettingModal";
import EditModal from "./EditModal";
import RolesModal from "./RolesModal";

const Team = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: openEdit, onClose: closeEdit, onOpen: onOpenEdit } = useDisclosure();
    const {
      isOpen: isOpenRoles,
      onClose: onCloseRoles,
      onOpen: onOpenRoles,
    } = useDisclosure();
  return (
    <>
      <Flex
        pt={"10px"}
        width={"100%"}
        height={"100%"}
        bgColor={"#FFFFFF"}
        borderRadius={"8px"}
        p={"10px"}
        direction={"column"}
        gap={"40px"}
      >
        <Flex width={"100%"} justifyContent={"space-between"}>
          <Flex gap={"5px"}>
            <Button
              width={"40px"}
              height={"32px"}
              bgColor="#FFFFFF"
              gap={"10px"}
              color={"#737791"}
              border={"1px solid #0000000F"}
            >
              <Flex color={"#FC0C0C"} fontSize={"20px"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.659 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74"
                    clip-rule="evenodd"
                  />
                </svg>
              </Flex>
            </Button>
            <InputGroup
              bg="#FFFFFF"
              width={"320px"}
              height={"32px"}
              borderRadius={"8px"}
              border={"1px solid #0000000F"}
            >
              <InputLeftElement pointerEvents="none" pb={"8px"}>
                <BsSearch color="#FC0C0C" fontSize={"18px"} />
              </InputLeftElement>
              <Input
                bg="#FFFFFF"
                placeholder="Search..."
                width={"320px"}
                height={"32px"}
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={600}
              />
            </InputGroup>
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"} gap={"10px"}>
            <Flex>
              <Button
                width={"158px"}
                height={"30px"}
                px={"0px"}
                variant={"none"}
                bgColor={"#F5F5F5"}
                color={"#000000"}
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                onClick={onOpenRoles}
              >
                <Flex fontSize={"22px"} pr={"5px"} color={"#000000"}>
                  <IoIosSettings />
                </Flex>
                MANAGE ROLES
              </Button>
              <RolesModal
                isOpenRoles={isOpenRoles}
                onCloseRoles={onCloseRoles}
              />
            </Flex>
            <Flex>
              <Button
                width={"158px"}
                height={"30px"}
                px={"80px"}
                variant={"none"}
                bgColor={"#FC0C0C"}
                color={"white"}
                fontFamily={"Nunito Sans"}
                fontSize={"12px"}
                onClick={onOpen}
              >
                <Flex fontSize={"22px"} pr={"2px"} color={"#FFFFFF"}>
                  <IoIosAdd />
                </Flex>
                ADD TEAM MEMBER
              </Button>
              <SettingModal isOpen={isOpen} onClose={onClose} />
            </Flex>
          </Flex>
        </Flex>

        <Table size="sm">
          <Thead>
            <Tr>
              <Th
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"13px"}
                textTransform={"capitalize"}
                color={"#000000"}
              >
                Name
              </Th>
              <Th
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"13px"}
                textTransform={"capitalize"}
                color={"#000000"}
              >
                Email Address
              </Th>
              <Th
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"13px"}
                textTransform={"capitalize"}
                color={"#000000"}
              >
                Role
              </Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"14px"}
                color={"#000000"}
              >
                Adeyemi Williams
              </Td>
              <Td
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"14px"}
                color={"#000000"}
              >
                wadeyemi@shara.co
              </Td>
              <Td
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"14px"}
                color={"#000000"}
              >
                Owner
              </Td>
            </Tr>
            <Tr>
              <Td
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"14px"}
                color={"#000000"}
              >
                Femi Afelogun
              </Td>
              <Td
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"14px"}
                color={"#000000"}
              >
                fafelogun@shara.co
              </Td>
              <Td
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"14px"}
                color={"#000000"}
              >
                Underwriter
              </Td>
              <Td
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"14px"}
                color={"#207EDF"}
                textDecoration={"underline"}
                cursor={"pointer"}
                onClick={onOpenEdit}
              >
                Edit
              </Td>
              <EditModal openEdit={openEdit} closeEdit={closeEdit} />
            </Tr>
          </Tbody>
        </Table>
      </Flex>
    </>
  );
}

export default Team;
