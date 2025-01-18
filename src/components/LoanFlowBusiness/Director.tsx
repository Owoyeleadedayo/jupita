import { Box, Button, Divider, Flex, FormControl, FormLabel, Image, Input, Select, Text } from "@chakra-ui/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Logo11 from "../../assets/Images/JupitaLogo.png";
import { useNavigate } from "react-router-dom";

const Director = () => {
    const navigate = useNavigate()
  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        py={"10px"}
        direction={"column"}
        bgColor={"#FFFFFF"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex width={"500px"} direction={"column"} gap={"30px"}>
          <Flex direction={"column"}>
            <Flex
              py={"10px"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              gap={"5px"}
            >
              <Flex
                onClick={() => {
                  navigate(-1);
                }}
                cursor={"pointer"}
              >
                <IoMdArrowRoundBack fontSize={"22px"} color="#2261B0" />
              </Flex>
              <Flex>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"16px"}
                  color={"#000000"}
                >
                  Back
                </Text>
              </Flex>
            </Flex>
            <Divider
              color={"#2261B0"}
              width={"100px"}
              border={"1px solid #2261B0"}
            />
          </Flex>
          <Flex
            px={"20px"}
            py={"10px"}
            borderRadius={"8px"}
            flexDirection={"column"}
            gap={"20px"}
            width={"450px"}
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
          >
            <Flex>
              <Text
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={800}
                color={"#000000"}
              >
                DIRECTOR’S INFORMATION
              </Text>
            </Flex>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                First Name
              </FormLabel>
              <Input
                type="text"
                color={"#000000"}
                width={"400px"}
                height={"50px"}
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                bgColor={"#F6F6F6"}
                variant={"none"}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                Last Name
              </FormLabel>
              <Input
                type="text"
                color={"#000000"}
                width={"400px"}
                height={"50px"}
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                bgColor={"#F6F6F6"}
                variant={"none"}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                Phone Number
              </FormLabel>
              <Input
                type="number"
                color={"#000000"}
                width={"400px"}
                height={"50px"}
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                bgColor={"#F6F6F6"}
                variant={"none"}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                Email Address
              </FormLabel>
              <Input
                type="email"
                color={"#000000"}
                width={"400px"}
                height={"50px"}
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                bgColor={"#F6F6F6"}
                variant={"none"}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                Bank Verification Number (BVN)
              </FormLabel>
              <Input
                type="number"
                color={"#000000"}
                width={"400px"}
                height={"50px"}
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                bgColor={"#F6F6F6"}
                variant={"none"}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                National Identification Number (NIN)
              </FormLabel>
              <Input
                type="number"
                color={"#000000"}
                width={"400px"}
                height={"50px"}
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                bgColor={"#F6F6F6"}
                variant={"none"}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                color={"#000000"}
              >
                Home Address
              </FormLabel>
              <Input
                type="text"
                color={"#000000"}
                width={"400px"}
                height={"50px"}
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                fontWeight={600}
                bgColor={"#F6F6F6"}
                variant={"none"}
              />
            </FormControl>
            <Flex justifyContent={"space-between"}>
              <Flex direction={"column"} gap={"3px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={600}
                >
                  State of Residence
                </Text>
                <Select
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={600}
                  bgColor={"#F6F6F6"}
                  width={"200px"}
                  height={"50px"}
                >
                  <option value=""></option>
                  <option value="Abia">Abia</option>
                  <option value="Adamawa">Adamawa</option>
                  <option value="Akwa Ibom">Akwa Ibom</option>
                  <option value="Anambra">Anambra</option>
                  <option value="Bauchi">Bauchi</option>
                  <option value="Bayelsa">Bayelsa</option>
                  <option value="Benue">Benue</option>
                  <option value="Borno">Borno</option>
                  <option value="Cross River">Cross River</option>
                  <option value="Delta">Delta</option>
                  <option value="Ebonyi">Ebonyi</option>
                  <option value="Edo">Edo</option>
                  <option value="Ekiti">Ekiti</option>
                  <option value="Enugu">Enugu</option>
                  <option value="Gombe">Gombe</option>
                  <option value="Imo">Imo</option>
                  <option value="Jigawa">Jigawa</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Kano">Kano</option>
                  <option value="Katsina">Katsina</option>
                  <option value="Kebbi">Kebbi</option>
                  <option value="Kogi">Kogi</option>
                  <option value="Kwara">Kwara</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Nasarawa">Nasarawa</option>
                  <option value="Niger">Niger</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Ondo">Ondo</option>
                  <option value="Osun">Osun</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Plateau">Plateau</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Sokoto">Sokoto</option>
                  <option value="Taraba">Taraba</option>
                  <option value="Yobe">Yobe</option>
                  <option value="Zamfara">Zamfara</option>
                </Select>
              </Flex>

              <Flex direction={"column"} gap={"3px"}>
                <Text
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={600}
                >
                  Local Government Area
                </Text>
                <Select
                  fontFamily={"Nunito Sans"}
                  fontSize={"16px"}
                  fontWeight={600}
                  bgColor={"#F6F6F6"}
                  width={"200px"}
                  height={"50px"}
                  cursor={"pointer"}
                >
                  <option value=""></option>
                  <option value="Abadam">Abadam (Borno)</option>
                  <option value="Abaji">Abaji (Abuja FCT)</option>
                  <option value="Abeokuta North">Abeokuta North (Ogun)</option>
                  <option value="Abeokuta South">Abeokuta South (Ogun)</option>
                  <option value="Aboh Mbaise">Aboh Mbaise (Imo)</option>
                  <option value="Akwanga">Akwanga (Nasarawa)</option>
                  <option value="Albasu">Albasu (Kano)</option>
                  <option value="Aliyada">Aliyada (Kogi)</option>
                  <option value="Aninri">Aninri (Enugu)</option>
                  <option value="Arochukwu">Arochukwu (Abia)</option>
                  <option value="Ajao Estate">Ajao Estate (Lagos)</option>
                  <option value="Anka">Anka (Zamfara)</option>
                  <option value="Asari-Toru">Asari-Toru (Rivers)</option>
                  <option value="Bade">Bade (Yobe)</option>
                  <option value="Bauchi">Bauchi (Bauchi)</option>
                  <option value="Bida">Bida (Niger)</option>
                  <option value="Birnin Kebbi">Birnin Kebbi (Kebbi)</option>
                  <option value="Biu">Biu (Borno)</option>
                  <option value="Bwari">Bwari (Abuja FCT)</option>
                  <option value="Calabar Municipal">
                    Calabar Municipal (Cross River)
                  </option>
                  <option value="Dutse">Dutse (Jigawa)</option>
                  <option value="Ekiti">Ekiti (Ekiti)</option>
                  <option value="Enugu South">Enugu South (Enugu)</option>
                  <option value="Funtua">Funtua (Katsina)</option>
                  <option value="Garki">Garki (Abuja FCT)</option>
                  <option value="Gombe">Gombe (Gombe)</option>
                  <option value="Gwagwalada">Gwagwalada (Abuja FCT)</option>
                  <option value="Ijebu North">Ijebu North (Ogun)</option>
                  <option value="Ilesa East">Ilesa East (Osun)</option>
                  <option value="Ika North-East">Ika North-East (Delta)</option>
                  <option value="Ikorodu">Ikorodu (Lagos)</option>
                  <option value="Ikwuano">Ikwuano (Abia)</option>
                  <option value="Isi Uzo">Isi Uzo (Enugu)</option>
                  <option value="Jalingo">Jalingo (Taraba)</option>
                  <option value="Jos North">Jos North (Plateau)</option>
                  <option value="Kaduna South">Kaduna South (Kaduna)</option>
                  <option value="Kano Municipal">Kano Municipal (Kano)</option>
                  <option value="Katsina">Katsina (Katsina)</option>
                  <option value="Kogi">Kogi (Kogi)</option>
                  <option value="Lagos Mainland">Lagos Mainland (Lagos)</option>
                  <option value="Lere">Lere (Kaduna)</option>
                  <option value="Maiduguri">Maiduguri (Borno)</option>
                  <option value="Makarfi">Makarfi (Kaduna)</option>
                  <option value="Mbaise">Mbaise (Imo)</option>
                  <option value="Minna">Minna (Niger)</option>
                  <option value="Nassarawa">Nassarawa (Nassarawa)</option>
                  <option value="Ngor-Okpala">Ngor-Okpala (Imo)</option>
                  <option value="Obi">Obi (Nasarawa)</option>
                  <option value="Ojo">Ojo (Lagos)</option>
                  <option value="Oshodi-Isolo">Oshodi-Isolo (Lagos)</option>
                  <option value="Oyo">Oyo (Oyo)</option>
                  <option value="Sokoto">Sokoto (Sokoto)</option>
                  <option value="Umuahia">Umuahia (Abia)</option>
                  <option value="Uyo">Uyo (Akwa Ibom)</option>
                  <option value="Yenagoa">Yenagoa (Bayelsa)</option>
                </Select>
              </Flex>
            </Flex>

            <Flex py={"30px"}>
              <Button
                width={"100%"}
                height={"48px"}
                bgColor={"#FC0C0C"}
                variant={"none"}
                fontFamily={"Nunito Sans"}
                fontSize={"16px"}
                color={"#FFFFFF"}
                fontWeight={700}
                onClick={() => {
                  navigate("/verify-otp");
                }}
              >
                Continue
              </Button>
            </Flex>
          </Flex>
          <Flex pt={"50px"} pl={"100px"} gap={"5px"}>
            <Text
              fontFamily={"Nunito Sans"}
              fontWeight={400}
              fontSize={"20px"}
              color={"#000000"}
            >
              Powered by
            </Text>
            <Box width={"104px"} height={"28px"}>
              <Image src={Logo11} width={"100%"} height={"100%"} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Director;
