import { Card, Flex, Heading, Text } from "@chakra-ui/react";


const StatsCard = () => {
    const cards = [
      {
        no: "12,087",
        value: "Total Requests",
        desc: "+8% from yesterday",
        bgColor: "rgba(255, 226, 229, 1)",
        color: "rgba(250, 90, 125, 1)",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <defs>
              <mask id="ipSSalesReport0">
                <g fill="none" strokeLinejoin="round" strokeWidth={4}>
                  <path
                    fill="#fff"
                    stroke="#fff"
                    d="M41 14L24 4L7 14v20l17 10l17-10z"
                  ></path>
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    d="M24 22v8m8-12v12m-16-4v4"
                  ></path>
                </g>
              </mask>
            </defs>
            <path
              fill="currentColor"
              d="M0 0h48v48H0z"
              mask="url(#ipSSalesReport0)"
            ></path>
          </svg>
        ),
      },
      {
        no: "300",
        value: "Total Pending",
        desc: "+5% from yesterday",
        color: "rgba(255, 148, 122, 1)",
        bgColor: "rgba(255, 244, 222, 1)",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" stroke-width="2">
              <rect width="14" height="17" x="5" y="4" rx="2" />
              <path stroke-linecap="round" d="M9 9h6m-6 4h6m-6 4h4" />
            </g>
          </svg>
        ),
      },
      {
        no: "10,457",
        value: "Total Approved",
        desc: "+1,2% from yesterday",
        color: "rgba(60, 216, 86, 1)",
        bgColor: "rgba(220, 252, 231, 1)",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="m938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 0 0 0 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8M699 387c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64"
            />
          </svg>
        ),
      },
      {
        no: "809",
        value: "Total Declined",
        desc: "+0,5% from yesterday",
        color: "rgba(191, 131, 255, 1)",
        bgColor: "rgba(243, 232, 255, 1)",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M8.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M10 13c.552 0 1.01-.452.9-.994a5.002 5.002 0 0 0-9.802 0c-.109.542.35.994.902.994zm2.5-9.5a.75.75 0 0 1 .75.75v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 .75-.75"
            />
          </svg>
        ),
      },
    ];
  return (
    <>
      <Flex
        pt={"20px"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        flexWrap={{ lg: "wrap", md: "nowrap", base: "wrap" }}
        gap={{ lg: "10px", md: "0px", base: "18px" }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            bgColor={card.bgColor}
            p={{ lg: "20px", md: "10px", base: "20px" }}
            gap={"10px"}
            borderRadius={"16px"}
            width={"100%"}
            maxWidth={{ lg: "180px", md: "150px", base: "100%" }}
          >
            <Flex
              width={"40px"}
              height={"40px"}
              borderRadius={"50%"}
              justifyContent={"center"}
              alignItems={"center"}
              bgColor={card.color}
            >
              <Text fontSize={"30px"}>{card.icon}</Text>
            </Flex>
            <Flex flexDirection={"column"} gap={"10px"}>
              <Heading
                fontSize={{ lg: "24px", md: "20px", base: "24px" }}
                fontFamily={"Nunito Sans"}
                fontWeight={600}
                lineHeight={"32px"}
              >
                {card.no}
              </Heading>
              <Text
                fontSize={{ lg: "16px", md: "14px", base: "16px" }}
                fontWeight={500}
                lineHeight={"24px"}
                color={"rgba(66, 81, 102, 1)"}
              >
                {card.value}
              </Text>
              <Text
                fontSize={{ lg: "12px", md: "11px", base: "12px" }}
                fontFamily={"Nunito Sans"}
                fontWeight={500}
                lineHeight={"12px"}
                color={"rgba(64, 121, 237, 1)"}
              >
                {card.desc}
              </Text>
            </Flex>
          </Card>
        ))}
      </Flex>
    </>
  );
}




export default StatsCard;
