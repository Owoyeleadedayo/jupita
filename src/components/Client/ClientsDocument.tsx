import { Button, Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import pdf from "../../assets/Images/pdf.png";
import icon from "../../assets/Images/hugeicon.png";
import bidocs from "../../assets/Images/bidocs.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";


const ClientsDocument = () => {

    const menuItems = [
      {
        name: "Treat Transaction",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.25em"
            height="1em"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M224 0a128 128 0 1 1 0 256a128 128 0 1 1 0-256m-45.7 304h91.4c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7v.9c0 9.2 2.7 18.5 7.9 26.3l-382.2.1C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304M436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8v30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1.7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4L546.3 442c-6.9 5.1-14.3 9.4-22.3 12.8v30.6c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8v-30.5c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3.7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9v-30.5zm92.1 133.5a48.1 48.1 0 1 0-96.1 0a48.1 48.1 0 1 0 96.1 0"
            />
          </svg>
        ),
        color: "#4E96FF",
      },
      {
        name: "Edit Decision",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M15 23v1a1 1 0 0 1-1 1h-2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2.586A2 2 0 0 1 4.586 22l7.738-7.739A8 8 0 1 1 20 20h-2v2a1 1 0 0 1-1 1zm7-11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
            />
          </svg>
        ),
        color: "#F97FD9",
      },
      {
        name: "Send Message",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M5.516 14.224c-2.262-2.432-2.222-6.244.128-8.611a6.07 6.07 0 0 1 3.414-1.736L8.989 1.8a8.1 8.1 0 0 0-4.797 2.351c-3.149 3.17-3.187 8.289-.123 11.531l-1.741 1.752l5.51.301l-.015-5.834zm6.647-11.959l.015 5.834l2.307-2.322c2.262 2.434 2.222 6.246-.128 8.611a6.07 6.07 0 0 1-3.414 1.736l.069 2.076a8.12 8.12 0 0 0 4.798-2.35c3.148-3.172 3.186-8.291.122-11.531l1.741-1.754z"
            />
          </svg>
        ),
        color: "#9E8FFF",
      },
    ];

    const docItems = [
      {
        name: "View File",
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
              <path d="M3 13c3.6-8 14.4-8 18 0" />
              <path
                fill="currentColor"
                d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6"
              />
            </g>
          </svg>
        ),
        color: "#207EDF",
      },
      {
        name: "Analyze File",
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
        color: "#207EDF",
      },
      {
        name: "Delete File",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M14.28 2a2 2 0 0 1 1.897 1.368L16.72 5H20a1 1 0 1 1 0 2h-1v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4a1 1 0 0 1 0-2h3.28l.543-1.632A2 2 0 0 1 9.721 2zM17 7H7v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1zm-2.72-3H9.72l-.333 1h5.226z"
              />
            </g>
          </svg>
        ),
        color: "#FC0C0C",
      },
    ];

    const tableBody = [
      {
        Image: pdf,
        name: "Commercial Bank Statement.pdf",
        type: "Bank Statement",
        format: "Pdf",
        size: "8.5Mb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: bidocs,
        name: "Purpose of Request.docx",
        type: "Others",
        format: "Docx",
        size: "68Kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "21-Jul- 2024 23:05",
        type: "Bank Statement",
        format: "Pdf",
        size: "1.7Mb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: icon,
        name: "International Passport.png",
        type: "Proof of ID",
        format: "Png",
        size: "200kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
      {
        Image: pdf,
        name: "MERMAIT CERTIFICATE",
        type: "Business Certificate",
        format: "Pdf",
        size: "703kb",
        createdAt: "21-Jul- 2024 23:05",
        menu: (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="3.75"
                    d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                  />
                </svg>
              }
              width={"20px"}
              height={"40px"}
              variant="none"
            />
            <MenuList>
              {docItems.map((item, index) => (
                <MenuItem
                  key={index}
                  icon={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.icon && (
                        <span
                          style={{
                            marginRight: "8px",
                            color: item.color,
                            fontSize: "22px",
                          }}
                        >
                          {item.icon}
                        </span>
                      )}
                    </div>
                  }
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  borderBottom={
                    index < menuItems.length - 1
                      ? "0.5px solid #bfbfbf"
                      : "none"
                  }
                  color={"#404040"}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        ),
      },
    ];

      const tableHead = [
        { name: "File Name" },
        { name: "File Type" },
        { name: "File Format" },
        { name: "File Size" },
        { name: "Created At" },
        { name: "" },
      ];


        const [currentPage, setCurrentPage] = useState(1);
        const [rowsPerPage, setRowsPerPage] = useState(5);

        const indexOfLastTablebody = currentPage * rowsPerPage;
        const indexOfFirstTablebody = indexOfLastTablebody - rowsPerPage;
        const currentTableBody = tableBody.slice(
          indexOfFirstTablebody,
          indexOfLastTablebody
        );

        const totalPages = Math.ceil(tableBody.length / rowsPerPage);

        const handleNextPage = () => {
          if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
          }
        };

        const handlePrevPage = () => {
          if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
          }
        };

        const handleRowsPerPageChange = (
          rows: React.SetStateAction<number>
        ) => {
          setRowsPerPage(rows);
          setCurrentPage(1);
        };
 
  return (
    <>
      <Flex>
        <Button
          width={"86px"}
          height={"30px"}
          bgColor={"#2261B0"}
          borderRadius={"8px"}
          fontFamily={"Nunito Sans"}
          fontSize={"10px"}
          fontWeight={600}
          color={"#FFFFFF"}
        >
          ADD NEW
        </Button>
      </Flex>

      <Flex flexDirection={"column"} pt={"20px"} gap={"20px"}>
        <Table bgColor={"#FFFFFF"} borderRadius={"8px"}>
          <Thead>
            <Tr>
              {tableHead.map((item, index) => (
                <Th
                  key={index}
                  fontFamily={"Nunito Sans"}
                  fontWeight={500}
                  fontSize={"14px"}
                  color={"#000000"}
                >
                  {item.name}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {currentTableBody.map((tableBody, index) => (
              <Tr key={index}>
                <Td>
                  <Flex alignItems={"center"}>
                    <Image
                      src={tableBody.Image}
                      objectFit={"contain"}
                      alt="file icon"
                      width={"20px"}
                      height={"20px"}
                    />
                    <Text
                      marginLeft={"8px"}
                      fontFamily={"Nunito Sans"}
                      fontSize={"14px"}
                      fontWeight={400}
                      color={"#444A6D"}
                    >
                      {tableBody.name}
                    </Text>
                  </Flex>
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"#444A6D"}
                >
                  {tableBody.type}
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"#444A6D"}
                >
                  {tableBody.format}
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"#444A6D"}
                >
                  {tableBody.size}
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"#444A6D"}
                >
                  {tableBody.createdAt}
                </Td>
                <Td
                  fontFamily={"Nunito Sans"}
                  fontSize={"14px"}
                  fontWeight={400}
                  color={"#444A6D"}
                >
                  {tableBody.menu}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Flex
          bgColor={"#FFFFFF"}
          justifyContent={"space-between"}
          alignItems={"center"}
          borderRadius={"8px"}
          p={"20px"}
        >
          <Text
            fontSize={"14px"}
            fontFamily={"Nunito Sans"}
            color={"#687182"}
            fontWeight={500}
            onClick={() => handleRowsPerPageChange(0)}
          >
            {indexOfFirstTablebody + 1}-
            {Math.min(indexOfLastTablebody, tableBody.length)} of{" "}
            {tableBody.length}
          </Text>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Text
              fontSize={"14px"}
              fontFamily={"Nunito Sans"}
              color={"#687182"}
              fontWeight={500}
            >
              Rows per page:
            </Text>
            <Button
              width={"24px"}
              height={"20px"}
              mx={"5px"}
              onClick={handlePrevPage}
            >
              <FaChevronLeft color="#687182" />
            </Button>
            <Text
              fontSize={"14px"}
              fontFamily={"Nunito Sans"}
              color={"#687182"}
              fontWeight={500}
            >
              {currentPage}/{totalPages}
            </Text>
            <Button
              width={"24px"}
              height={"20px"}
              mx={"5px"}
              onClick={handleNextPage}
            >
              <FaChevronRight color="#687182" />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default ClientsDocument;
