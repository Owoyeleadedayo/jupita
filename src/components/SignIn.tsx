import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import Logo from "../assets/Images/jupita2.png";
import DT from "../assets/Images/signin.png";
import { useState } from "react";
import { useLogin } from "../api/user.query";
// import { useNavigate } from "react-router-dom";
import { handleInputChange } from "./helper";

const SignIn = () => {

  const [isFormValid, setIsFormValid] = useState<boolean>(false);;
  const [errorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {mutate:login} = useLogin();

  // const loginMutation = useLogin();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    login(formData, {
      onSuccess: (data) => {
        console.log("Login successful:", data);
        // localStorage.setItem("token", data.token);
        // window.location.href = "/dashboard";
      },
      onError: (error) => {
        console.error(
          "Login failed:",
          error
        );
      },
    });
  };

  return (
    <>
      <Flex width={"100%"} height={"100vh"} flexDirection={"row"}>
        <Flex
          display={{ lg: "flex", base: "none" }}
          width={{ lg: "100%", base: "none" }}
          height={"100%"}
          bgGradient={"linear-gradient(to bottom, #2261B0, #113B70)"}
          flexDirection={"column"}
        >
          <Flex>
            <Flex
              width={"60px"}
              height={"60px"}
              bgColor={"white"}
              borderRadius={"50%"}
              m={"30px"}
              position={"relative"}
            />
            <Image
              src={Logo}
              alt="Logo"
              width={"180px"}
              h={"88px"}
              position={"absolute"}
              mt={"20px"}
              ml={"5px"}
            />
            <Text
              color={"white"}
              mt={"60px"}
              fontFamily={"Nunito Sans"}
              fontSize={"20px"}
              fontWeight={600}
              position={"absolute"}
              ml={"90px"}
            >
              Jupita
            </Text>
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box width={"543px"} height={"440px"}>
              <Image
                src={DT}
                alt="desktop"
                width={"100%"}
                height={"100%"}
                objectFit={"contain"}
                mx={"auto"}
              />
            </Box>
            <Text color={"white"} fontFamily={"Nunito Sans"}>
              Africa’s Leading Credit as a Platform Solution
            </Text>
          </Flex>
        </Flex>
        <Flex
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          p={{ lg: "100px", md: "100px", base: "20px" }}
        >
          <Box
            width={"100%"}
            maxWidth={{ lg: "650px", md: "650px", base: "800px" }}
            mx={"auto"}
          >
            <Flex flexDirection={"column"} gap={"10px"}>
              <Heading
                as={"h1"}
                fontFamily={"Nunito Sans"}
                fontSize={"18px"}
                fontWeight={700}
                textTransform={"capitalize"}
              >
                welcome back
              </Heading>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"16px"}
                textTransform={"capitalize"}
              >
                login to jupita admin
              </Text>
            </Flex>
            <Flex flexDirection={"column"} pt={"25px"} gap={"10px"}>
              <Flex flexDirection={"column"} gap={2}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"16px"}
                >
                  Email
                </Text>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    handleInputChange(e, setIsFormValid, setFormData)
                  }
                  required
                  placeholder="Your email address"
                  fontFamily="Nunito Sans"
                  fontSize="16px"
                />
              </Flex>
              <Flex flexDirection={"column"} gap={2}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"16px"}
                >
                  Password
                </Text>
                <Input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange(e, setIsFormValid, setFormData)
                  }
                  required
                  placeholder="Your password"
                  fontFamily="Nunito Sans"
                  fontSize="16px"
                />
              </Flex>
            </Flex>
            <Button
              type={"submit"}
              variant={"none"}
              width={"100%"}
              maxWidth={{ lg: "650px", md: "650px", base: "800px" }}
              mx={"auto"}
              mt={"30px"}
              bgColor={"#2261B0"}
              color={"white"}
              textTransform={"uppercase"}
              fontFamily={"Nunito Sans"}
              fontSize={"14px"}
              fontWeight={700}
              disabled={!isFormValid}
              onClick={handleLogin}
            >
              Sign In
            </Button>
            <Flex justifyContent={'center'} alignItems={'center'}>
              {errorMessage && <Text fontSize={'14px'} color="red">{errorMessage}</Text>}
            </Flex>
            <Text
              textAlign={"center"}
              mt={"10px"}
              fontFamily={"Nunito Sans"}
              color={"#2261B0"}
              fontSize={"14px"}
              fontWeight={700}
              cursor={"pointer"}
            >
              Forgot Password?
            </Text>
          </Box>
        </Flex>
      </Flex>

      {/* Error Message */}
      {errorMessage !== "" && (
        <div className="flex items-center justify-center my-4 mx-2">
          <p>{errorMessage}</p>
        </div>
      )}
    </>
  );
};

export default SignIn;
