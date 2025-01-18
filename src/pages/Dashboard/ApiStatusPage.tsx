import { Flex } from "@chakra-ui/react";
import ApiStatus from "../../components/Dashboard/ApiStatus";

const ApiStatusPage = () => {
  return (
    <>
      <Flex
        ml={{ lg: "240px", md: "0px", base: "0px" }}
        bg={"#FFF4EE"}
        px={{ lg: "10px", md: "10px", base: "10px" }}
        pb={"30px"}
      >
        <ApiStatus />
      </Flex>
    </>
  );
}

export default ApiStatusPage;
