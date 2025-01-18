import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import CP from "../../assets/Images/clientprofile.png";
import { useNavigate, useParams } from "react-router-dom";
import { tableBody } from "./Clients";
import ClientsDocument from "./ClientsDocument";
import ClientsLoans from "./ClientsLoans";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useEffect } from "react";
import ClientDetails from "./ClientDetails";
import MessageModal from "./MessageModal";
import CommentModal from "./CommentModal";

const ClientsProfile = () => {
  const navigate = useNavigate();
  const param = useParams();
  const id = param.id;

  const currentTablebody = tableBody.find(
    (body) => body?.userId.toString() === id
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {isOpen, onClose, onOpen} = useDisclosure();
  const { isOpen: openComment, onClose: closeComment, onOpen: onOpenComment } = useDisclosure();

  return (
    <>
      <Flex flexDirection={"column"} gap={"20px"} width={"100%"}>
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
            pt={"2px"}
          >
            Back
          </Text>
        </Flex>
        <Flex
          bgColor={"#FFFFFF"}
          width={"full"}
          height={"100%"}
          p={{ md: "10px", base: "10px" }}
          borderRadius={"7px"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Flex justifyContent={"space-between"}>
            <Flex gap={"10px"} p={"20px"}>
              <Box width={"75px"} height={"75px"}>
                <Image
                  src={CP}
                  alt="Client Image"
                  width={"100%"}
                  height={"100%"}
                  objectFit={"cover"}
                />
              </Box>
              <Flex flexDirection={"column"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"36px"}
                  fontWeight={600}
                  color={"#151D48"}
                >
                  {currentTablebody?.name}
                </Text>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"#078861"}
                >
                  userId: {currentTablebody?.userId}
                </Text>
              </Flex>
            </Flex>

            <Grid display={"flex"} my={"auto"} gap={"2px"}>
              <GridItem>
                <Flex>
                  <Button
                    width={"120px"}
                    height={"37px"}
                    bgColor={"#D9D9D9"}
                    fontFamily={"Nunito Sans"}
                    fontSize={"12px"}
                    fontWeight={500}
                    borderRadius={"2px"}
                    onClick={onOpen}
                  >
                    Send Message
                  </Button>
                  <MessageModal isOpen={isOpen} onClose={onClose} />
                </Flex>
              </GridItem>
              <GridItem>
                <Flex>
                  <Button
                    width={"120px"}
                    height={"37px"}
                    bgColor={"#D9D9D9"}
                    fontFamily={"Nunito Sans"}
                    fontSize={"12px"}
                    fontWeight={500}
                    borderRadius={"2px"}
                    onClick={onOpenComment}
                  >
                    Add Comment
                  </Button>
                  <CommentModal
                    openComment={openComment}
                    closeComment={closeComment}
                  />
                </Flex>
              </GridItem>
            </Grid>
          </Flex>

          <Tabs pt={"60px"}>
            <TabList>
              <Tab
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={500}
                color={"#000000"}
              >
                User Details
              </Tab>
              <Tab
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={500}
                color={"#000000"}
              >
                Documents
              </Tab>
              <Tab
                fontFamily={"Nunito Sans"}
                fontSize={"14px"}
                fontWeight={500}
                color={"#000000"}
              >
                Loans
              </Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="#D46A35"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel pt={"30px"}>
                <ClientDetails />
              </TabPanel>

              <TabPanel pt={"30px"}>
                <ClientsDocument />
              </TabPanel>

              <TabPanel>
                <ClientsLoans />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
};

export default ClientsProfile;
