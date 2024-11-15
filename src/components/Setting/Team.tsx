import { Button, Flex, Input, InputGroup, InputLeftElement, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { IoFilterOutline } from "react-icons/io5";
import SettingModal from "./SettingModal";

const Team = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
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
          <Flex gap={{ md: "10px", base: "4px" }} flexDirection={"row-reverse"}>
            <InputGroup bg="#F9FAFB" width={"350px"}>
              <InputLeftElement pointerEvents="none">
                <BsSearch color="#D46A35" fontSize={"18px"} />
              </InputLeftElement>
              <Input placeholder="Search here..." />
            </InputGroup>
            <Button
              width={{ md: "100px", base: "60px" }}
              bgColor="#F9FAFB"
              gap={"10px"}
              color={"#737791"}
            >
              <IoFilterOutline color="#D46A35" fontSize={"18px"} />
              Filter
            </Button>
          </Flex>
          <Flex justifyContent={"center"} alignItems={"center"} gap={"10px"}>
            <Button
              width={"100%"}
              height={"100%"}
              px={"15px"}
              py={"10px"}
              variant={"none"}
              bgColor={"#2261B0"}
              color={"white"}
              fontFamily={"Nunito Sans"}
              fontSize={"12px"}
              onClick={onOpen}
            >
              ADD TEAM MEMBER
            </Button>
            <SettingModal isOpen={isOpen} onClose={onClose} />
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
              >
                Name
              </Th>
              <Th
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"13px"}
                textTransform={"capitalize"}
              >
                Email Address
              </Th>
              <Th
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"13px"}
                textTransform={"capitalize"}
              >
                Role
              </Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontFamily={"Nunito Sans"} fontWeight={500} fontSize={"13px"}>
                Adeyemi Williams
              </Td>
              <Td fontFamily={"Nunito Sans"} fontWeight={500} fontSize={"13px"}>
                wadeyemi@shara.co
              </Td>
              <Td fontFamily={"Nunito Sans"} fontWeight={500} fontSize={"13px"}>
                Owner
              </Td>
            </Tr>
            <Tr>
              <Td fontFamily={"Nunito Sans"} fontWeight={500} fontSize={"13px"}>
                Femi Afelogun
              </Td>
              <Td fontFamily={"Nunito Sans"} fontWeight={500} fontSize={"13px"}>
                fafelogun@shara.co
              </Td>
              <Td fontFamily={"Nunito Sans"} fontWeight={500} fontSize={"13px"}>
                Underwriter
              </Td>
              <Td
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                fontSize={"13px"}
                color={"#207EDF"}
                textDecoration={"underline"}
              >
                Edit
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Flex>
    </>
  );
}

export default Team;
