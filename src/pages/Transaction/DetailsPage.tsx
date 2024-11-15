import { Box } from "@chakra-ui/react";
import DetailPage from "../../components/Transaction/DetailPage";

const DetailsPage = () => {
  return (
    <>
      <Box
        ml={{ lg: "230px", md: "0px", base: "0px" }}
        bg={"#FFF4EE"}
        px={{ lg: "10px", md: "10px", base: "10px" }}
        pb={"30px"}
      >
        <DetailPage />
      </Box>
    </>
  );
};

export default DetailsPage;
