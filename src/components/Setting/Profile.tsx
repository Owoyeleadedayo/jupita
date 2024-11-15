import { Button, Flex, Input, Select, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Flex pt={"10px"} flexDirection={"column"} gap={"25px"}>
      <Flex flexDirection={"column"} gap={"15px"}>
        <Text
          fontFamily={"Nunito Sans"}
          fontWeight={700}
          fontSize={"14px"}
          color={"#000000"}
        >
          Personal Information
        </Text>
        <Flex
          bgColor={"#FFFFFF"}
          width={"100%"}
          height={"100%"}
          p={"40px"}
          direction={"column"}
          gap={"40px"}
          borderRadius={"8px"}
        >
          <Flex flexDirection={"row"} gap={"150px"}>
            <Flex direction={"column"} gap={"10px"}>
              <Flex direction={"column"} gap={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  FirstName
                </Text>
                <Input
                  width={"400px"}
                  borderRadius={"20px"}
                  fontFamily={"Nunito Sans"}
                  _focus={{
                    border: "1px solid #D46A35",
                  }}
                />
              </Flex>
              <Flex direction={"column"} gap={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  Email
                </Text>
                <Input
                  width={"400px"}
                  borderRadius={"20px"}
                  type="email"
                  fontFamily={"Nunito Sans"}
                  _focus={{
                    border: "1px solid #D46A35",
                  }}
                />
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={"10px"}>
              <Flex direction={"column"} gap={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  Phone Number
                </Text>
                <Input
                  width={"400px"}
                  type="number"
                  borderRadius={"20px"}
                  fontFamily={"Nunito Sans"}
                  _focus={{
                    border: "1px solid #D46A35",
                  }}
                />
              </Flex>
              <Flex direction={"column"} gap={"10px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  Role
                </Text>
                <Select placeholder="" borderRadius={"20px"}>
                  <option></option>
                  <option></option>
                </Select>
              </Flex>
            </Flex>
          </Flex>

          <Flex justifyContent={"center"} alignItems={"center"}>
            <Button
              bgColor="#2261B0"
              width={"500px"}
              height={"40px"}
              color={"#FFFFFF"}
              fontFamily={"Nunito Sans"}
              fontWeight={600}
              fontSize={"14px"}
              type="submit"
            >
              UPDATE PROFILE
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} gap={"15px"}>
        <Text
          fontFamily={"Nunito Sans"}
          fontWeight={700}
          fontSize={"14px"}
          color={"#000000"}
        >
          Password Change
        </Text>
        <Flex
          bgColor={"#FFFFFF"}
          width={"100%"}
          height={"100%"}
          p={"40px"}
          direction={"column"}
          gap={"40px"}
          borderRadius={"8px"}
        >
          <Flex flexDirection={"row"} gap={"150px"}>
            <Flex direction={"column"} gap={"10px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#000000"}
              >
                New Password
              </Text>
              <Input
                width={"400px"}
                type="password"
                borderRadius={"20px"}
                fontFamily={"Nunito Sans"}
                _focus={{
                  border: "1px solid #D46A35",
                }}
              />
            </Flex>
            <Flex direction={"column"} gap={"10px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={400}
                fontSize={"14px"}
                color={"#000000"}
              >
                Confirm Password
              </Text>
              <Input
                width={"400px"}
                type="password"
                borderRadius={"20px"}
                fontFamily={"Nunito Sans"}
                _focus={{
                  border: "1px solid #D46A35",
                }}
              />
            </Flex>
          </Flex>

          <Flex justifyContent={"center"} alignItems={"center"}>
            <Button
              bgColor="#2261B0"
              width={"500px"}
              height={"40px"}
              color={"#FFFFFF"}
              fontFamily={"Nunito Sans"}
              fontWeight={600}
              fontSize={"14px"}
              type="submit"
            >
              CHANGE PASSWORD
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Profile;
