import { Text, Box, Flex } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Box as="footer" py={2} width="100%">
        <Flex justify="center" align="center" direction="column" height="100%">
          <Text color="teal.500" fontSize="sm" textAlign="center">
            © {year} Tarmo Liivamägi. Kõik õigused kaitstud.
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
