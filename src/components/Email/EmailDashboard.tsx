import {
  Flex,
  VStack,
  Text,
  Button,
  Heading,
  Input,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { LuClipboardPen, LuMail, LuMailCheck, LuTrash2 } from "react-icons/lu";
import EmailInbox from "./EmailInbox";
import { useState } from "react";

type EmailDashboardProps = {
  username: string;
};

const EmailDashboard: React.FC<EmailDashboardProps> = ({ username }) => {
  const [totalEmails, setTotalEmails] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

  const updateCorrectGuesses = (newCorrectGuesses: number) => {
    setCorrectGuesses(newCorrectGuesses);
  };

  const updateIncorrectGuesses = (newCorrectGuesses: number) => {
    setIncorrectGuesses(newCorrectGuesses);
  };

  const updateTotalEmails = (newTotal: number) => {
    setTotalEmails(newTotal);
  };

  const updateAnsweredCount = (newCount: number) => {
    setAnsweredCount(newCount);
  };

  return (
    <Flex
      minHeight={{ sm: "100vh", md: "100vh", lg: "85vh" }}
      //minHeight="100vh"
      width="100%"
      bg="gray.300"
      borderRadius="4xl"
      flexDirection="column"
      overflow="hidden"
    >
      {/* Sidebar */}
      <Flex width="100%" flex="1" position="relative" borderRadius="4xl">
        {/* Sidebar Navigation */}
        <VStack
          borderRadius="4xl"
          width="250px"
          align="stretch"
          minHeight="100%"
          position="absolute"
          left="0"
          bg="gray.300"
          zIndex="1"
        >
          <Flex
            width="80%"
            marginLeft="auto"
            flexDirection="column"
            borderRadius="4xl"
            flex="1"
            overflowY="auto"
          >
            <Heading
              pt={2}
              pb={4}
              size="2xl"
              color="teal.600"
              textAlign="center"
            >
              {" "}
              <Flex align="center" justify="center" gap={2}>
                <LuMail style={{ fontSize: "1.6em" }} />
                <Text as="span" color="teal.600">
                  CyberMail
                </Text>
              </Flex>
            </Heading>
            <Heading pb={4} size="2xl" color="white" textAlign="center">
              {" "}
              Tere,{" "}
              <Text as="span" color="teal.600">
                {username}
              </Text>
            </Heading>
            <Button colorPalette="teal" variant="solid" size="xl" rounded="2xl">
              Uus Mail
            </Button>
            <IconButton variant="ghost" size="lg" _hover={{ bg: "none" }}>
              {" "}
              <LuMail />
              <Text>Sisendkaust</Text>
            </IconButton>
            <IconButton
              disabled
              variant="ghost"
              size="lg"
              _hover={{ bg: "none" }}
            >
              <LuMailCheck /> <Text>Saadetud</Text>
            </IconButton>
            <IconButton
              disabled
              variant="ghost"
              size="lg"
              _hover={{ bg: "none" }}
            >
              <LuClipboardPen /> <Text>Mustand</Text>
            </IconButton>
            <IconButton
              disabled
              variant="ghost"
              size="lg"
              _hover={{ bg: "none" }}
            >
              <LuTrash2 />
              <Text>Prügikast</Text>
            </IconButton>
          </Flex>
        </VStack>

        {/* Main Content (Navbar + Emails) */}
        <Flex
          width="80%"
          marginLeft="auto"
          flexDirection="column"
          borderRadius="4xl"
          overflow="hidden"
        >
          {/* Navbar */}
          <Flex bg="gray.100" p={4} alignItems="center" borderTopRadius="4xl">
            <Input
              placeholder="Otsi meile..."
              width="25%"
              bg="white"
              color="black"
              borderRadius="xl"
              disabled
            />
            <Box
              p={3}
              width="30%"
              height="50px"
              margin="auto"
              display="flex"
              alignItems="center"
              justifyContent="space-around"
            >
              <Text fontSize="md" fontWeight="bold" color="gray.800">
                Vastatud: {answeredCount} / {totalEmails}
              </Text>
              <Text
                fontSize="md"
                fontWeight="bold"
                color="gray.100"
                background="teal.500"
                borderRadius="2xl"
                p={3}
              >
                Õigeid vastuseid: {correctGuesses}
              </Text>
            </Box>
          </Flex>
          <EmailInbox
            updateCorrectGuesses={updateCorrectGuesses}
            updateIncorrectGuesses={updateIncorrectGuesses}
            updateTotalEmails={updateTotalEmails}
            currentCorrectGuesses={correctGuesses}
            currentIncorrectGuesses={incorrectGuesses}
            updateAnsweredCount={updateAnsweredCount}
            username={username}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EmailDashboard;
