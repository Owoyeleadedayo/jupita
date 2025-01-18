import { Box, Button, Divider, Flex, Image, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Logo11 from "../../assets/Images/JupitaLogo.png";
import { useState } from "react";

const VerifyOTP = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(new Array(5).fill(""));
    function handleChange(
      e: React.ChangeEvent<HTMLInputElement>,
      index: number
    ) {
      const value = e.target.value;
      if (value !== "" && isNaN(Number(value))) return false;
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });
      if (value && e.target.nextElementSibling) {
        (e.target.nextElementSibling as HTMLInputElement).focus();
      }
    }


  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        pt={"10px"}
        justifyContent={"center"}
        alignItems={"center"}
        bgColor={"#FFFFFF"}
        direction={"column"}
      >
        <Flex
          height={"98vh"}
          justifyContent={"space-between"}
          direction={"column"}
        >
          <Flex width={"400px"} direction={"column"} gap={"30px"}>
            <Flex direction={"column"}>
              <Flex
                py={"10px"}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                gap={"5px"}
              >
                <Flex
                  onClick={() => {
                    navigate(-1);
                  }}
                  cursor={"pointer"}
                >
                  <IoMdArrowRoundBack fontSize={"22px"} color="#FC0C0C" />
                </Flex>
                <Flex>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={500}
                    fontSize={"16px"}
                    color={"#000000"}
                  >
                    Back
                  </Text>
                </Flex>
              </Flex>
              <Divider
                color={"#2261B0"}
                width={"100px"}
                border={"1px solid #2261B0"}
              />
            </Flex>
            <Flex
              px={"20px"}
              py={"10px"}
              borderRadius={"8px"}
              flexDirection={"column"}
              gap={"20px"}
              width={"400px"}
              boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
            >
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"18px"}
                fontWeight={400}
              >
                Please enter the OTP sent to your email address or phone number
              </Text>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                gap={"15px"}
              >
                {otp.map((data, i) => {
                  return (
                    <Input
                      width={"60px"}
                      height={"50px"}
                      padding={"10px"}
                      outline={"none"}
                      textAlign={"center"}
                      value={data}
                      maxLength={1}
                      onChange={(e) => handleChange(e, i)}
                    />
                  );
                })}
              </Flex>
              <Flex py={"10px"}>
                <Button
                  width={"100%"}
                  height={"48px"}
                  bgColor={"#FC0C0C"}
                  variant={"none"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  color={"#FFFFFF"}
                  fontWeight={700}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Continue
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex pl={"80px"} gap={"5px"}>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={400}
              fontSize={"20px"}
              color={"#000000"}
            >
              Powered by
            </Text>
            <Box width={"104px"} height={"28px"}>
              <Image src={Logo11} width={"100%"} height={"100%"} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default VerifyOTP;
