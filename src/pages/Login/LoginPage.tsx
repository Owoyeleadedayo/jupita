import { Flex } from "@chakra-ui/react";
import Login from "../../components/Login";

const LoginPage = () => {
  return (
    <>
      <Flex
        // ml={{ lg: "240px", md: "0px", base: "0px" }}
        bg={"#FFFFFF"}
        px={{ xl: "0px", md: "0px"}}
        // pb={"30px"}
      >
        <Login />
      </Flex>
    </>
  );
}

export default LoginPage;
