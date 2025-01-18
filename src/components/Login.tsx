/* eslint-disable no-irregular-whitespace */
import { Button, Flex, FormControl, FormLabel, Image, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import Logo from "../assets/Images/JupitaLogo.png"
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { useState } from "react";

const Login = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        bgColor={"#F6F6F6"}
        py={"20px"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        gap={"20px"}
      >
        <Flex width={"119px"} height={"32px"}>
          <Image src={Logo} alt={"logo"} width={"100%"} height={"100%"} />
        </Flex>
        <Flex
          bgColor={"#FFFFFF"}
          width={"500px"}
          height={"800px"}
          borderRadius={"8px"}
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
          p={"20px"}
          direction={"column"}
          gap={"20px"}
        >
          <Flex mx={"auto"}>
            <Text
              fontFamily={"Nunito Sans"}
              fontSize={"20px"}
              fontWeight={700}
              color={"#000000"}
              textAlign={"center"}
            >
              CREATE ACCOUNT
            </Text>
          </Flex>

          <Flex direction={"column"} gap={"20px"}>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                Business Name
              </FormLabel>
              <Input bgColor={"#F6F6F6"} borderColor={"#F6F6F6"} />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                Business Registration Number
              </FormLabel>
              <Input bgColor={"#F6F6F6"} borderColor={"#F6F6F6"} />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                Business Type
              </FormLabel>
              <Input type="text" bgColor={"#F6F6F6"} borderColor={"#F6F6F6"} />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                Email Address
              </FormLabel>
              <Input type="email" bgColor={"#F6F6F6"} borderColor={"#F6F6F6"} />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                Phone Number
              </FormLabel>
              <Input
                type="number"
                bgColor={"#F6F6F6"}
                borderColor={"#F6F6F6"}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                Password
              </FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  bgColor={"#F6F6F6"}
                  borderColor={"#F6F6F6"}
                />
                <InputRightElement width="4.5rem">
                  <Button variant={"none"} onClick={handleClick}>
                    {show ? (
                      <IoIosEyeOff fontSize={"22px"} />
                    ) : (
                      <IoIosEye fontSize={"22px"} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </Flex>

          <Flex pt={"10px"}>
            <Text
              fontFamily={"Nunito Sans"}
              fontSize={"15px"}
              fontWeight={600}
              color={"#000000"}
              textAlign={"center"}
            >
              By clicking the “Create Account” button, you agree to
              Jupita's terms of acceptable use and Data Processing Agreement.
            </Text>
          </Flex>

          <Flex pt={"10px"}>
            <Button
              width={"100%"}
              height={"45px"}
              bgColor={"#D46A35"}
              variant={"none"}
              fontFamily={"Nunito Sans"}
              fontSize={"15px"}
              fontWeight={600}
              color={"#FFFFFF"}
            >
              Create Account
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Login;
