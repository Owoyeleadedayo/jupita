import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
} from "@chakra-ui/react";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import Logo from "../assets/Images/jupita.png";
import { ReactNode,  useState } from "react";
import {  useNavigate } from "react-router-dom";

interface LinkItemProps {
  name: string;
  icon: ReactNode;
  path?: string;
}

interface NavItemProps extends FlexProps {
  icon: ReactNode;
  children: React.ReactNode;
  name: string;
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  path?: string;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  {
    name: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="m15.583 15.917l1.648-10.78A11 11 0 0 0 15.584 5C9.553 5 4.666 9.888 4.666 15.917c0 6.03 4.888 10.917 10.917 10.917S26.5 21.946 26.5 15.917c0-.256-.02-.507-.038-.76l-10.88.76zm3.854-12.79l-1.648 10.78l10.878-.76a10.91 10.91 0 0 0-9.23-10.02"
        />
      </svg>
    ),
    path: "/dashboard",
  },
  {
    name: "Transaction",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"
        />
      </svg>
    ),
    path: "/transaction",
  },
  {
    name: "Clients",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 36 36"
      >
        <path
          fill="currentColor"
          d="M12 16.14h-.87a8.67 8.67 0 0 0-6.43 2.52l-.24.28v8.28h4.08v-4.7l.55-.62l.25-.29a11 11 0 0 1 4.71-2.86A6.6 6.6 0 0 1 12 16.14"
        />
        <path
          fill="currentColor"
          d="M31.34 18.63a8.67 8.67 0 0 0-6.43-2.52a11 11 0 0 0-1.09.06a6.6 6.6 0 0 1-2 2.45a10.9 10.9 0 0 1 5 3l.25.28l.54.62v4.71h3.94v-8.32Z"
        />
        <path
          fill="currentColor"
          d="M11.1 14.19h.31a6.45 6.45 0 0 1 3.11-6.29a4.09 4.09 0 1 0-3.42 6.33Z"
        />
        <path
          fill="currentColor"
          d="M24.43 13.44a7 7 0 0 1 0 .69a4 4 0 0 0 .58.05h.19A4.09 4.09 0 1 0 21.47 8a6.53 6.53 0 0 1 2.96 5.44"
        />
        <circle cx="17.87" cy="13.45" r="4.47" fill="currentColor" />
        <path
          fill="currentColor"
          d="M18.11 20.3A9.7 9.7 0 0 0 11 23l-.25.28v6.33a1.57 1.57 0 0 0 1.6 1.54h11.49a1.57 1.57 0 0 0 1.6-1.54V23.3l-.24-.3a9.58 9.58 0 0 0-7.09-2.7"
        />
        <path fill="none" d="M0 0h36v36H0z" />
      </svg>
    ),
    path: "/clients",
  },
  {
    name: "Credit Search",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M20 17.57a4.3 4.3 0 1 0-3.67 2.06a4.37 4.37 0 0 0 2.24-.63l1.72 1.73a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM18 17a2.37 2.37 0 0 1-3.27 0a2.32 2.32 0 0 1 0-3.27a2.31 2.31 0 0 1 3.27 0A2.32 2.32 0 0 1 18 17m1-14H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h4a1 1 0 0 0 0-2H5a1 1 0 0 1-1-1V9h16v1a1 1 0 0 0 2 0V6a3 3 0 0 0-3-3m1 4H4V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm-10 4H7a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2"
        ></path>
      </svg>
    ),
    path: "/credit-search",
  },

  {
    name: "Analyze",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.5 25.018h9.877l2.277-10.973l2.278 20.162l2.277-25.145l2.278 29.876l2.277-29.745l2.278 27.235l2.277-25.406l2.278 18.756l2.277-16.217l2.278 11.363H44.5"
        ></path>
      </svg>
    ),
    path: "/analyze",
  },
  {
    name: "Decision Module",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M8 10h8v8h-5l-2-2H7v-5m0-7v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"
        ></path>
      </svg>
    ),
    path: "/decision-module",
  },
  {
    name: "Reporting",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M22 21H2V3h2v16h2v-9h4v9h2V6h4v13h2v-5h4z"
        ></path>
      </svg>
    ),
    path: "/reporting",
  },
  {
    name: "Logs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        >
          <path d="M12 6v6h6" />
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" />
        </g>
      </svg>
    ),
    path: "/logs",
  },
  {
    name: "Settings",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454q-.557-.31-.947-.664l-2.668 1.135l-1.865-3.25l2.306-1.739q-.045-.27-.073-.558q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626L3.258 9.126l1.865-3.212L7.771 7.03q.448-.373.97-.673q.52-.3 1.013-.464L10.134 3h3.732l.361 2.912q.575.202 1.016.463t.909.654l2.725-1.115l1.865 3.211l-2.382 1.796q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.393-.94.673t-.985.445L13.866 21zm1.838-6.5q1.046 0 1.773-.727T14.473 12t-.727-1.773t-1.773-.727q-1.052 0-1.776.727T9.473 12t.724 1.773t1.776.727"
        />
      </svg>
    ),
    path: "/setting",
  },
  {
    name: "Sign Out",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M4 12a1 1 0 0 0 1 1h7.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H5a1 1 0 0 0-1 1M17 2H7a3 3 0 0 0-3 3v3a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3"
        />
      </svg>
    ),
    path: "/sign-out",
  },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const [activePage, setActivePage] = useState("/");

  // const location = useLocation()

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     setActivePage("Dashboard");
  //   } else {
  //     const page = LinkItems.find((item) => {
  //       return location.pathname === item.path;
  //     });
  //     setActivePage(page!.name);
  //   }
  // }, [location.pathname]);
  

  return (
    <Box
      transition="all 3s ease-in-out"
      bg={"white"}
      borderRight="1px"
      borderRightColor={"#f1f2f3"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      maxH={"100vh"}
      overflowY={"auto"}
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      display={{ base: "block", md: "block", lg: "none" }}
      {...rest}
    >
      <Flex alignItems="center" mx="4" justifyContent="space-between" my={6}>
        <Flex justifyContent={"center"} alignItems={"center"} mx={"auto"}>
          <Image src={Logo} alt={"Logo"} width={"80px"} height={"30px"} />
        </Flex>
        <CloseButton
          display={{ base: "flex", md: "flex", lg: "none" }}
          p={"2px"}
          onClick={onClose}
        />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          name={link.name}
          icon={link.icon}
          activePage={activePage}
          setActivePage={setActivePage}
          path={link?.path}
          onClick={onClose}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({
  icon,
  children,
  name,
  activePage,
  setActivePage,
  path,
  onClick,
}: NavItemProps) => {
  const navigate = useNavigate();
  return (
    <Box
      as="a"
      alignItems={"center"}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      onClick={onClick}
    >
      <Flex
        align="center"
        px={"12px"}
        py={"12px"}
        my={"4px"}
        mx={"4px"}
        borderRadius={"10px"}
        role="group"
        cursor="pointer"
        bg={activePage === name ? "#FC0C0C" : "transparent"}
        color={activePage === name ? "white" : "#737791"}
        fontFamily={"Nunito Sans"}
        fontSize={"18px"}
        lineHeight={"27px"}
        _hover={{
          bg: "#FC0C0C",
          color: "white",
        }}
        onClick={() => {
          setActivePage(name);
          console.log(name);
          navigate(`${path}`);
        }}
      >
        {icon && (
          <Box
            mr="4"
            fontSize="28px"
            _groupHover={{
              color: "white",
            }}
          >
            {icon}
          </Box>
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 0, lg: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="space-between"
      {...rest}
    >
      <Flex
        flexDirection={{ base: "row-reverse", md: "row-reverse", lg: "row" }}
        gap={"40px"}
      >
        <Flex>
          <Text
            color={"black"}
            fontFamily={"Nunito Sans"}
            fontSize={"24px"}
            lineHeight={"33.6px"}
            fontWeight={600}
          ></Text>
        </Flex>
        <IconButton
          display={{ base: "flex", md: "flex", lg: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
          padding={"2px"}
        />
      </Flex>
      <Flex>
        <HStack spacing={{ base: "0", md: "6" }}>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open notifications"
            icon={<FiBell />}
          />
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                mr={3}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm" fontFamily={"Nunito Sans"}>
                      Jon
                    </Text>
                    <Text
                      fontSize="xs"
                      fontFamily={"Nunito Sans"}
                      color="gray.600"
                    >
                      Admin
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}
                fontFamily={"Nunito Sans"}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
};


const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box height="100%" bg={"#f9f5f5"}>
      <SidebarContent
        onClose={onClose}
        display={{ base: "none", md: "none", lg: 'block' }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size={"200px"}
        
        
      >
        <DrawerContent bg={'transparent'}>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 0, lg: 60 }} pt={2}>
      </Box>
    </Box>
  );
};

export default Sidebar;
