import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Logo11 from "../../assets/Images/JupitaLogo.png";
import { RiUploadCloudFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

const BusinessDocument = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState<File | null>(null);

    function handleFileChange(e: ChangeEvent<HTMLInputElement>){
        if (e.target.files){
            setFile(e.target.files[0]);
        }
    }
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        py={"10px"}
        direction={"column"}
        bgColor={"#FFFFFF"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex width={"500px"} direction={"column"} gap={"30px"}>
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
                <IoMdArrowRoundBack fontSize={"22px"} color="#2261B0" />
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
            width={"450px"}
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
          >
            <Flex>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={800}
                color={"#000000"}
              >
                BUSINESS DOCUMENTS
              </Text>
            </Flex>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                Cac Certificate
              </FormLabel>
              <Flex
                direction={"column"}
                width={"400px"}
                height={"150px"}
                justifyContent={"center"}
                alignItems={"center"}
                bgColor={"#F6F6F6"}
                borderRadius={"8px"}
                gap={"10px"}
              >
                <Flex>
                  <RiUploadCloudFill fontSize={"30px"} />
                </Flex>

                <Flex borderRadius={"24px"} bgColor={"#FFFFFF"}>
                  <Input
                    type="file"
                    id="file-upload"
                    color={"#000000"}
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={600}
                    variant={"none"}
                    display="none"
                    borderRadius={"24px"}
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file-upload"
                    style={{
                      fontFamily: "Nunito Sans",
                      fontSize: "15px",
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: "10px",
                      color: "#2261B0",
                    }}
                  >
                    Choose a file
                  </label>
                </Flex>
                {file && (
                  <Flex gap={"5px"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"13px"}
                      fontWeight={600}
                      color={"#000000"}
                    >
                      File uploaded
                    </Text>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"12px"}
                      fontWeight={600}
                      color={"#000000"}
                    >
                      {file.name}
                    </Text>
                  </Flex>
                )}
              </Flex>
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                CAC Form 7
              </FormLabel>
              <Flex
                direction={"column"}
                width={"400px"}
                height={"150px"}
                justifyContent={"center"}
                alignItems={"center"}
                bgColor={"#F6F6F6"}
                borderRadius={"8px"}
                gap={"10px"}
              >
                <Flex>
                  <RiUploadCloudFill fontSize={"30px"} />
                </Flex>

                <Flex borderRadius={"24px"} bgColor={"#FFFFFF"}>
                  <Input
                    type="file"
                    id="file-upload"
                    color={"#000000"}
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={600}
                    variant={"none"}
                    display="none"
                    borderRadius={"24px"}
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file-upload"
                    style={{
                      fontFamily: "Nunito Sans",
                      fontSize: "15px",
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: "10px",
                      color: "#2261B0",
                    }}
                  >
                    Choose a file
                  </label>
                </Flex>
                {file && (
                  <Flex gap={"5px"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"13px"}
                      fontWeight={600}
                      color={"#000000"}
                    >
                      File uploaded
                    </Text>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"12px"}
                      fontWeight={600}
                      color={"#000000"}
                    >
                      {file.name}
                    </Text>
                  </Flex>
                )}
              </Flex>
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                Tax Clearance Certificate
              </FormLabel>
              <Flex
                direction={"column"}
                width={"400px"}
                height={"150px"}
                justifyContent={"center"}
                alignItems={"center"}
                bgColor={"#F6F6F6"}
                borderRadius={"8px"}
                gap={"10px"}
              >
                <Flex>
                  <RiUploadCloudFill fontSize={"30px"} />
                </Flex>

                <Flex borderRadius={"24px"} bgColor={"#FFFFFF"}>
                  <Input
                    type="file"
                    id="file-upload"
                    color={"#000000"}
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={600}
                    variant={"none"}
                    display="none"
                    borderRadius={"24px"}
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file-upload"
                    style={{
                      fontFamily: "Nunito Sans",
                      fontSize: "15px",
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: "10px",
                      color: "#2261B0",
                    }}
                  >
                    Choose a file
                  </label>
                </Flex>
                {file && (
                  <Flex gap={"5px"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"13px"}
                      fontWeight={600}
                      color={"#000000"}
                    >
                      File uploaded
                    </Text>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"12px"}
                      fontWeight={600}
                      color={"#000000"}
                    >
                      {file.name}
                    </Text>
                  </Flex>
                )}
              </Flex>
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                Utility Bill
              </FormLabel>
              <Flex
                direction={"column"}
                width={"400px"}
                height={"150px"}
                justifyContent={"center"}
                alignItems={"center"}
                bgColor={"#F6F6F6"}
                borderRadius={"8px"}
                gap={"10px"}
              >
                <Flex>
                  <RiUploadCloudFill fontSize={"30px"} />
                </Flex>

                <Flex borderRadius={"24px"} bgColor={"#FFFFFF"}>
                  <Input
                    type="file"
                    id="file-upload"
                    color={"#000000"}
                    fontFamily={"Nunito Sans"}
                    fontSize={"16px"}
                    fontWeight={600}
                    variant={"none"}
                    display="none"
                    borderRadius={"24px"}
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file-upload"
                    style={{
                      fontFamily: "Nunito Sans",
                      fontSize: "15px",
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: "10px",
                      color: "#2261B0",
                    }}
                  >
                    Choose a file
                  </label>
                </Flex>
                {file && (
                  <Flex gap={"5px"}>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"13px"}
                      fontWeight={600}
                      color={"#000000"}
                    >
                      File uploaded
                    </Text>
                    <Text
                      fontFamily={"Nunito Sans"}
                      fontSize={"12px"}
                      fontWeight={600}
                      color={"#000000"}
                    >
                      {file.name}
                    </Text>
                  </Flex>
                )}
              </Flex>
            </FormControl>
            <Flex py={"30px"}>
              <Button
                width={"100%"}
                height={"48px"}
                bgColor={"#2261B0"}
                variant={"none"}
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                color={"#FFFFFF"}
                fontWeight={700}
                onClick={() => {
                  navigate("/bank-linking");
                }}
              >
                Next
              </Button>
            </Flex>
          </Flex>
          <Flex pt={"50px"} pl={"100px"} gap={"5px"}>
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
};

export default BusinessDocument;
