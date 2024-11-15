import { Flex } from "@chakra-ui/react";
import ClientsProfile from "../../components/Client/ClientsProfile";

const ClientsProfilePage = () => {
  return (
    <>
      <Flex
        ml={{ lg: "240px", md: "0px", base: "0px" }}
        bg={"#FFF4EE"}
        px={{ lg: "10px", md: "10px", base: "10px" }}
        pb={"30px"}
      >
        <ClientsProfile />
      </Flex>
    </>
  );
};

export default ClientsProfilePage;
