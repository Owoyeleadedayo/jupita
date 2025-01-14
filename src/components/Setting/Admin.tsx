import { Button, Flex, Switch, Text } from "@chakra-ui/react";

const Admin = () => {
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        py={"30px"}
        direction={"column"}
        gap={"20px"}
      >
        <Flex direction={"column"}>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={600}
            fontSize={"16px"}
            color={"##000000"}
          >
            Admin
          </Text>
          <Text
            fontFamily={"Nunito Sans"}
            fontWeight={600}
            fontSize={"12px"}
            color={"##000000B2"}
          >
            The Owner has access to all permissions
          </Text>
        </Flex>
        <Flex width={"800px"} justifyContent={"space-between"}>
          <Flex direction={"column"} gap={"20px"}>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={600}
              fontSize={"14px"}
              color={"##000000B2"}
            >
              General
            </Text>
            <Flex direction={"column"} gap={"15px"}>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Edit Personal Information
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Edit Employment Information
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Edit Director’s Information
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Edit Business Information
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Delete Document
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  View Loan Transactions
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Upload Document
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Delete Loan Transaction
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Edit Loan Decision
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Create Profile
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  View Client
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Edit Client
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Analyze Bank Statement
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Export Transactions
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Export Credit Report
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Export Analyzed Bank Statement
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  View Logs
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  View API Status
                </Text>
                <Switch />
              </Flex>
              <Flex width={"300px"} justifyContent={"space-between"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={400}
                  fontSize={"14px"}
                  color={"##000000"}
                >
                  Analyze Bank Statement
                </Text>
                <Switch />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            direction={"column"}
            gap={"20px"}
            justifyContent={"space-between"}
          >
            <Flex direction={"column"} gap={"20px"}>
              <Text
                fontFamily={"Nunito Sans"}
                fontWeight={600}
                fontSize={"14px"}
                color={"#000000"}
              >
                User Management
              </Text>
              <Flex direction={"column"} gap={"15px"}>
                <Flex width={"300px"} justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"##000000"}
                  >
                    Edit Personal Information
                  </Text>
                  <Switch />
                </Flex>
                <Flex width={"300px"} justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"##000000"}
                  >
                    Edit Employment Information
                  </Text>
                  <Switch />
                </Flex>
                <Flex width={"300px"} justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"##000000"}
                  >
                    Edit Director’s Information
                  </Text>
                  <Switch />
                </Flex>
                <Flex width={"300px"} justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"##000000"}
                  >
                    Edit Business Information
                  </Text>
                  <Switch />
                </Flex>
                <Flex width={"300px"} justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"##000000"}
                  >
                    Delete Document
                  </Text>
                  <Switch />
                </Flex>
                <Flex width={"300px"} justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"##000000"}
                  >
                    View Loan Transactions
                  </Text>
                  <Switch />
                </Flex>
                <Flex width={"300px"} justifyContent={"space-between"}>
                  <Text
                    fontFamily={"Nunito Sans"}
                    fontWeight={400}
                    fontSize={"14px"}
                    color={"##000000"}
                  >
                    Upload Document
                  </Text>
                  <Switch />
                </Flex>
              </Flex>
            </Flex>
            <Flex>
              <Button
                width={"180px"}
                height={"40px"}
                bgColor={"#2261B0"}
                color={"#FFFFFF"}
                fontFamily={"Nunito Sans"}
                fontWeight={700}
                fontSize={"14px"}
                borderRadius={"8px"}
              >
                UPDATE PERMISSION
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Admin;
