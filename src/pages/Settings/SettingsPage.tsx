import { Flex } from "@chakra-ui/react";
import Setting from "../../components/Setting/Setting";

const SettingsPage = () => {
  return (
    <>
      <Flex
        ml={{ lg: "240px", md: "0px", base: "0px" }}
        bg={"#FFF4EE"}
        px={{ lg: "10px", md: "10px", base: "10px" }}
        pb={"30px"}
      >
        <Setting />
      </Flex>
    </>
  );
}

export default SettingsPage;
