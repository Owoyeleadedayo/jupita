import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

import FC1 from "../../assets/Images/image 4.png";
import RB1 from "../../assets/Images/Report Box.png";
import FC2 from "../../assets/Images/image 5.png";
import RB2 from "../../assets/Images/Report Box (1).png";
import FC3 from "../../assets/Images/image 6.png";
import RB3 from "../../assets/Images/Report Box (2).png";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";




const CreditSearchResult = () => {
    const navigate = useNavigate();
      const accordion = [
        {
          Image: FC1,
          name: "First Central Credit Bureau",
          dropDown: RB1,
          buttonColor: "#98F4D5",
          buttonTextColor: "#000000",
          buttonText: "SUCCESSFUL",
        },
        {
          Image: FC2,
          name: "CRC Credit Bureau",
          dropDown: RB2,
          buttonColor: "#FC0C0C",
          buttonTextColor: "#FFFFFF",
          buttonText: "RUN CHECK",
        },
        {
          Image: FC3,
          name: "Credit Registry Credit Bureau",
          dropDown: RB3,
          buttonColor: "#FC0C0C",
          buttonTextColor: "#FFFFFF",
          buttonText: "RUN CHECK",
        },
      ];
  return (
    <>
      <Flex width={"100%"} height={"100%"} direction={"column"} gap={"20px"}>
        <Flex gap={"10px"}>
          <Flex
            width={"25px"}
            height={"25px"}
            bgColor={"white"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"50%"}
            color={"#FC0C0C"}
            cursor={"pointer"}
            onClick={() => {
              navigate(-1);
            }}
          >
            <MdOutlineKeyboardBackspace fontSize={"20px"} />
          </Flex>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={600}
            fontSize={"15px"}
            color={"#000000"}
            pt={"2px"}
          >
            Back
          </Text>
        </Flex>
        <Flex>
          <Accordion allowToggle w={"100%"}>
            {accordion.map((item, index) => (
              <AccordionItem
                key={index}
                bgColor={"#FFFFFF"}
                p={"10px"}
                borderRadius={"8px"}
              >
                <h2>
                  <AccordionButton justifyContent={"space-between"}>
                    <Flex
                      justifyContent={"center"}
                      alignItems={"center"}
                      gap={"30px"}
                    >
                      <Flex width={"77px"} height={"14px"}>
                        <Image
                          src={item.Image}
                          alt="logo"
                          width={"100%"}
                          height={"100%"}
                          objectFit={"contain"}
                        />
                      </Flex>
                      <Text
                        fontFamily={"Nunito Sans"}
                        fontWeight={700}
                        fontSize={"14px"}
                        color={"#444A6D"}
                      >
                        {item.name}
                      </Text>
                    </Flex>
                    <Button
                      width={"110px"}
                      height={"30px"}
                      bgColor={item.buttonColor}
                      textAlign={"center"}
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={600}
                      color={item.buttonTextColor}
                      _hover={{
                        bgColor: "none",
                        color: "none",
                      }}
                    >
                      {item.buttonText}
                    </Button>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex>
                    <Image
                      src={item.dropDown}
                      alt="Report Image"
                      width={"100%"}
                      height={"100%"}
                      objectFit={"contain"}
                    />
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>
      </Flex>
    </>
  );
}

export default CreditSearchResult;
