import { Flex, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Profile from "./Profile";
import Compliance from "./Compliance";
import Team from "./Team";

const Setting = () => {
  const subNav = [
    { name: "Profile" },
    { name: "Team" },
    { name: "Compliance" },
    { name: "API Reference" },
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
        <Tabs>
          <TabList>
            <Flex flexDirection={"column"}>
              <Flex gap={"25px"} mx={"10px"}>
                {subNav.map((item, index) => (
                  <Tab
                    key={index}
                    fontFamily={"Nunito Sans"}
                    fontSize={"14px"}
                    fontWeight={500}
                    color={"#000000"}
                  >
                    {item.name}
                  </Tab>
                ))}
              </Flex>
            </Flex>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="#D46A35"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <Profile />
            </TabPanel>
            <TabPanel>
              <Team />
            </TabPanel>
            <TabPanel>
              <Compliance />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};

export default Setting;
