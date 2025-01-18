import { Box } from "@chakra-ui/react";
import Transaction from "../../components/Transaction/Transaction";

const TransactionPage = () => {
  return (
    <>
      <Box
        ml={{ lg: "240px", md: "0px", base: "0px" }}
        bg={"#FFF4EE"}
        px={{ lg: "10px", md: "10px", base: "10px" }}
        pb={"30px"}
      >
        <Transaction />
      </Box>
    </>
  );
};

export default TransactionPage;
