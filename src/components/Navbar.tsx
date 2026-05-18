import React, { useState } from "react";
import { Box, Flex, Text, Stack, Tabs, CloseButton } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { LuShieldCheck } from "react-icons/lu";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleHandler = () => setIsOpen(!isOpen);
  const location = useLocation();

  // Menu Items Array
  const menuItems = [
    { label: "Esileht", to: "/" },
    { label: "Test", to: "/test" },
    { label: "Õpetus", to: "/tutorial" },
  ];
  const activeTab =
    menuItems.find((item) => item.to === location.pathname)?.label || "Esileht";

  const MenuIcon = () => (
    <svg width="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill="white" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );

  return (
    <Box maxW="1100px" mx="auto" px={4} position="relative">
      <Box
        position="absolute"
        left={4}
        top="50%"
        transform="translateY(-50%)"
        fontSize="xl"
        fontWeight="bold"
      >
        <RouterLink to="/">
          <Text
            display="inline-flex"
            fontSize="3xl"
            color="teal.500"
            alignItems="center"
            gap={2}
          >
            <LuShieldCheck color="white" />
            Cyber{" "}
            <Box as="span" display="inline" color="gray.100">
              Helper
            </Box>
          </Text>
        </RouterLink>
      </Box>

      {/* Navbar container */}
      <Flex as="nav" align="center" justify="center" w="100%" p={4}>
        <Flex>
          <Box display={{ base: isOpen ? "block" : "none", md: "block" }}>
            <Stack
              align="center"
              direction={{ base: "column", md: "row" }}
              pt={[4, 2]}
            >
              <Tabs.Root
                size="lg"
                variant="outline"
                fitted
                maxW="xl"
                borderBottom="none"
                value={activeTab}
              >
                <Tabs.List>
                  {menuItems.map(({ label, to }) => (
                    <RouterLink to={to} key={to}>
                      <Tabs.Trigger value={label}>
                        <Box
                          as="span"
                          textStyle="xl"
                          color={label === activeTab ? "teal.500" : "gray.200"}
                        >
                          {label}
                        </Box>
                      </Tabs.Trigger>
                    </RouterLink>
                  ))}
                </Tabs.List>
              </Tabs.Root>
            </Stack>
          </Box>
        </Flex>
      </Flex>

      {/* Mobile menu toggle on the right */}
      <Box
        position="absolute"
        right={4}
        top="50%"
        transform="translateY(-50%)"
        display={{ base: "block", md: "none" }}
        onClick={toggleHandler}
        cursor="pointer"
      >
        {isOpen ? <CloseButton /> : <MenuIcon />}
      </Box>
    </Box>
  );
};

export default NavBar;
