import { Box } from "@chakra-ui/react";
import DetailPage from "../components/DetailPage";

const DetailsPage = () => {
  return (
    <>
      <Box
        ml={{ lg: "230px", md: "0px", base: "0px" }}
        bg={"#f9f5f5"}
        px={{ lg: "10px", md: "10px", base: "10px" }}
        pb={"30px"}
      >
        <DetailPage />
      </Box>
    </>
  );
};

export default DetailsPage;
