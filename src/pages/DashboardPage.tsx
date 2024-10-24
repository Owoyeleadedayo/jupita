import { Box } from "@chakra-ui/react";
import Dashboard from "../components/Dashboard";

const DashboardPage = () => {
  return (
    <>
      <Box
        ml={{ lg: "240px", md: "0px", base: "0px" }}
        bg={"#f9f5f5"}
        px={{ lg: "10px", md: "10px", base: "10px" }}
        pb={"30px"}
      >
        <Dashboard />
      </Box>
    </>
  );
}

export default DashboardPage;
