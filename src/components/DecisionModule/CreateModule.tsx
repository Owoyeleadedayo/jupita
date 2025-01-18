import {
  Button,
  Flex,
  Select,
  Text,
} from "@chakra-ui/react";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const CreateModule = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        p={"10px"}
        direction={"column"}
        gap={"30px"}
      >
        <Flex
          width={"100%"}
          height={"100%"}
          p={"10px"}
          direction={"column"}
          gap={"10px"}
        >
          <Flex gap={"5px"}>
            <Flex
              width={"25px"}
              height={"25px"}
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
              fontWeight={500}
              fontSize={"14px"}
              color={"#000000"}
              pt={"3px"}
            >
              Back
            </Text>
          </Flex>
        </Flex>

        <Flex
          width={"100%"}
          height={"100%"}
          p={"15px"}
          bgColor={"#FFFFFF"}
          borderRadius={"8px"}
          direction={"column"}
          gap={"25px"}
        >
          <Flex width={"100%"} justifyContent={"center"} alignItems={"center"}>
            <Text
              fontFamily={"NUnito Sans"}
              fontWeight={400}
              fontSize={"20px"}
              color={"#151D48"}
            >
              Create New Product
            </Text>
          </Flex>

          <Flex direction={"column"} gap={"5px"}>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={400}
              fontSize={"14px"}
              color={"#979797"}
            >
              Product Name
            </Text>
            <Select
              width={"400px"}
              height={"40px"}
              borderColor={"#C4C4C4"}
              fontFamily={"Nunito Sans"}
              fontWeight={400}
              fontSize={"14px"}
              color={"#000000"}
            >
              <option value="individual-loan">Individual Loan</option>
            </Select>
          </Flex>

          <Flex direction={"column"} gap={"20px"}>
            <Flex gap={"20px"}>
              <Flex direction={"column"} gap={"5px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  Parameter Name
                </Text>
                <Select
                  width={"300px"}
                  height={"40px"}
                  borderColor={"#C4C4C4"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  <option value="age">Age</option>
                </Select>
              </Flex>
              <Flex direction={"column"} gap={"5px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  Operator
                </Text>
                <Select
                  width={"250px"}
                  height={"40px"}
                  borderColor={"#C4C4C4"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  <option value="minimum">Minimum</option>
                </Select>
              </Flex>
              <Flex direction={"column"} gap={"5px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  Value
                </Text>
                <Select
                  width={"250px"}
                  height={"40px"}
                  borderColor={"#C4C4C4"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  <option value="21">21</option>
                </Select>
              </Flex>
              <Flex
                justify={"flex-end"}
                alignItems={"flex-end"}
                pl={"10px"}
                pb={"10px"}
                cursor={"pointer"}
              >
                <RiDeleteBin5Line fontSize={"22px"} color="#FC0C0CB2" />
              </Flex>
            </Flex>
            <Flex gap={"20px"}>
              <Flex direction={"column"} gap={"5px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  Parameter Name
                </Text>
                <Select
                  width={"300px"}
                  height={"40px"}
                  borderColor={"#C4C4C4"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  <option value="age">Age</option>
                </Select>
              </Flex>
              <Flex direction={"column"} gap={"5px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  Operator
                </Text>
                <Select
                  width={"250px"}
                  height={"40px"}
                  borderColor={"#C4C4C4"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  <option value="minimum">Minimum</option>
                </Select>
              </Flex>
              <Flex direction={"column"} gap={"5px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  Value
                </Text>
                <Select
                  width={"250px"}
                  height={"40px"}
                  borderColor={"#C4C4C4"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  <option value="21">21</option>
                </Select>
              </Flex>
              <Flex
                justify={"flex-end"}
                alignItems={"flex-end"}
                pl={"10px"}
                pb={"10px"}
                cursor={"pointer"}
              >
                <RiDeleteBin5Line fontSize={"22px"} color="#FC0C0CB2" />
              </Flex>
            </Flex>
            <Flex gap={"20px"}>
              <Flex direction={"column"} gap={"5px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  Parameter Name
                </Text>
                <Select
                  width={"300px"}
                  height={"40px"}
                  borderColor={"#C4C4C4"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  <option value="age">Age</option>
                </Select>
              </Flex>
              <Flex direction={"column"} gap={"5px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  Operator
                </Text>
                <Select
                  width={"250px"}
                  height={"40px"}
                  borderColor={"#C4C4C4"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  <option value="minimum">Minimum</option>
                </Select>
              </Flex>
              <Flex direction={"column"} gap={"5px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  Value
                </Text>
                <Select
                  width={"250px"}
                  height={"40px"}
                  borderColor={"#C4C4C4"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  <option value="21">21</option>
                </Select>
              </Flex>
              <Flex
                justify={"flex-end"}
                alignItems={"flex-end"}
                pl={"10px"}
                pb={"10px"}
                cursor={"pointer"}
              >
                <RiDeleteBin5Line fontSize={"22px"} color="#FC0C0CB2" />
              </Flex>
            </Flex>
            <Flex gap={"20px"}>
              <Flex direction={"column"} gap={"5px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  Parameter Name
                </Text>
                <Select
                  width={"300px"}
                  height={"40px"}
                  borderColor={"#C4C4C4"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  <option value="age">Age</option>
                </Select>
              </Flex>
              <Flex direction={"column"} gap={"5px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  Operator
                </Text>
                <Select
                  width={"250px"}
                  height={"40px"}
                  borderColor={"#C4C4C4"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  <option value="minimum">Minimum</option>
                </Select>
              </Flex>
              <Flex direction={"column"} gap={"5px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={600}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  Value
                </Text>
                <Select
                  width={"250px"}
                  height={"40px"}
                  borderColor={"#C4C4C4"}
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  <option value="21">21</option>
                </Select>
              </Flex>
              <Flex
                justify={"flex-end"}
                alignItems={"flex-end"}
                pl={"10px"}
                pb={"10px"}
                cursor={"pointer"}
              >
                <RiDeleteBin5Line fontSize={"22px"} color="#FC0C0CB2" />
              </Flex>
            </Flex>
          </Flex>

          <Flex>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              bgColor={"#FFE1D2"}
              px={"7px"}
              py={"5px"}
              borderRadius={"6px"}
            >
              <IoIosAdd color="#000000" />
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"14px"}
                color={"#000000"}
              >
                Add Parameter
              </Text>
            </Flex>
          </Flex>

          <Flex>
            <Button variant={"none"} bgColor={"#FC0C0C"} color={"white"}>
              Save
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default CreateModule;
