import { Flex } from "@chakra-ui/react";
import CreditSearchResult from "../../components/Credit-Search/CreditSearchResult";

const CreditSearchResultPage = () => {
  return (
    <>
      <Flex
        ml={{ lg: "240px", md: "0px", base: "0px" }}
        bg={"#FFF4EE"}
        px={{ lg: "10px", md: "10px", base: "10px" }}
        pb={"30px"}
      >
        <CreditSearchResult />
      </Flex>
    </>
  );
}

export default CreditSearchResultPage;
