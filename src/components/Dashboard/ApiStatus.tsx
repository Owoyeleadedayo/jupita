import { Button, Flex, Image, Text } from "@chakra-ui/react";
import CRC from "../../assets/Images/CRC.png"
import FC from "../../assets/Images/image 4.png"
import CR from "../../assets/Images/CreditRegistry.png"
import BVN from "../../assets/Images/BVN.png"
import SI from "../../assets/Images/smileId.png"
import Analyze from "../../assets/Images/analyze.png"
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const ApiStatus = () => {
    const navigate = useNavigate();
    const card = [
      {
        image: CRC,
        name: "CRC",
        date: "Last Update: Oct 29, 2024 00:00",
        type: "online",
        color: "#98F4D5",
      },
      {
        image: FC,
        name: "First Central",
        date: "Last Update: Oct 29, 2024 00:00",
        type: "offline",
        color: "#FFCDCD",
      },
      {
        image: CR,
        name: "Credit Registry",
        date: "Last Update: Oct 29, 2024 00:00",
        type: "online",
        color: "#98F4D5",
      },
      {
        image: BVN,
        name: "BVN",
        date: "Last Update: Oct 29, 2024 00:00",
        type: "online",
        color: "#98F4D5",
      },
      {
        image: SI,
        name: "Smile ID",
        date: "Last Update: Oct 29, 2024 00:00",
        type: "online",
        color: "#98F4D5",
      },
      {
        image: Analyze,
        name: "Analyze",
        date: "Last Update: Oct 29, 2024 00:00",
        type: "offline",
        color: "#FFCDCD",
      },
    ];
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        p={{ md: "20px", base: "10px" }}
        borderRadius={"7px"}
        flexDirection={"column"}
        gap={"20px"}
      >
        <Flex gap={"10px"}>
          <Flex
            width={"25px"}
            height={"25px"}
            bgColor={"white"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"50%"}
            color={"#D46A35"}
            cursor={"pointer"}
            onClick={() => {
              navigate(-1);
            }}
          >
            <MdOutlineKeyboardBackspace fontSize={"20px"} />
          </Flex>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={500}
            fontSize={"14px"}
            color={"#000000"}
            pt={"3px"}
          >
            Back
          </Text>
        </Flex>
        <Text
          fontFamily={"Nunito Sans"}
          fontWeight={700}
          fontSize={"20px"}
          lineHeight={"28px"}
        >
          API Status
        </Text>

        <Flex flexWrap={"wrap"} gap={"30px"}>
          {card.map((item, index) => (
            <Flex
              key={index}
              bgColor={"#FFFFFF"}
              width={"316px"}
              height={"157px"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"10px"}
              boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
            >
              <Flex
                flexDirection={"column"}
                gap={"10px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Flex width={"77px"} height={"14px"}>
                  <Image
                    src={item.image}
                    width={"100%"}
                    height={"100%"}
                    objectFit={"contain"}
                  />
                </Flex>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"16px"}
                  lineHeight={"22px"}
                  textAlign={"center"}
                >
                  {item.name}
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={700}
                  fontSize={"8px"}
                  lineHeight={"22px"}
                >
                  {item.date}
                </Text>
                <Button
                  width={"47px"}
                  height={"12px"}
                  bgColor={item.type === "offline" ? "#FFCDCD" : "#98F4D5"}
                  fontFamily={"Nunito Sans"}
                  fontSize={"10px"}
                  fontWeight={400}
                >
                  {item.type}
                </Button>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export default ApiStatus;
