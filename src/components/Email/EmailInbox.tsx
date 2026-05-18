import { useState, useEffect, useMemo } from "react";
import { Box, VStack, Text, Card, Flex } from "@chakra-ui/react";
import axios from "axios";
import EmailPreview from "./EmailPreview";
import { Email } from "./Email.helpers";

const EmailInbox: React.FC<{
  updateCorrectGuesses: (newCorrectGuesses: number) => void;
  updateIncorrectGuesses: (newIncorrectGuesses: number) => void;
  updateTotalEmails: (newTotal: number) => void;
  currentCorrectGuesses: number;
  currentIncorrectGuesses: number;
  updateAnsweredCount: (index: number) => void;
  username: string;
}> = ({
  updateCorrectGuesses,
  updateIncorrectGuesses,
  updateTotalEmails,
  currentCorrectGuesses,
  currentIncorrectGuesses,
  updateAnsweredCount,
  username,
}) => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [loading, setLoading] = useState(false);

  const [visibleCount, setVisibleCount] = useState(1);
  const [guessedEmails, setGuessedEmails] = useState<Set<number>>(new Set());
  const [guessFeedback, setGuessFeedback] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    axios
      .get<Email[]>("https://localhost:7225/api/Emails/random")
      .then((response) => {
        setEmails(response.data);
        updateTotalEmails(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching emails:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const markAsRead = (emailId: number) => {
    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        email.id === emailId ? { ...email, isRead: true } : email
      )
    );
  };

  const sortedEmails = useMemo(
    () => emails.slice().sort((a, b) => a.difficulty - b.difficulty),
    [emails]
  );

  
  const visibilityHandler = () => {
    if (visibleCount < sortedEmails.length) {
      const newCount = visibleCount + 1;
      setVisibleCount(newCount);
    }
  };

  const handleGuess = (isPhishingGuess: boolean) => {
    if (!selectedEmail) return;
    const correct = selectedEmail.isPhishing === isPhishingGuess;

    setGuessedEmails((prev) => {
      const newSet = new Set(prev);
      newSet.add(selectedEmail.id);
      return newSet;
    });

    if (correct) {
      updateCorrectGuesses(currentCorrectGuesses + 1);
      setGuessFeedback("✔️ Õige vastus!");
    } else {
      updateIncorrectGuesses(currentIncorrectGuesses + 1);
      setGuessFeedback("❌ Vale vastus!");
    }

    visibilityHandler();
  };

  useEffect(() => {
    updateAnsweredCount(guessedEmails.size);
  }, [guessedEmails, updateAnsweredCount]);

  const visibleEmails = sortedEmails.slice(0, visibleCount).reverse();
  
  const isCurrentEmailGuessed = selectedEmail
    ? guessedEmails.has(selectedEmail.id)
    : false;

  return (
    <>
      <Flex flex="1">
        <VStack width="400px" align="stretch" bg="gray.100" height="100%">
          <VStack
            width="350"
            p={4}
            align="stretch"
            bg="gray.100"
            maxHeight="calc(100vh - 100px)"
            height="80%"
            overflowY="auto"
          >
            {loading ? (
              <Text>Loading emails...</Text>
            ) : (
              visibleEmails.map((email) => (
                <Card.Root
                  key={email.id}
                  p={3}
                  borderRadius="2xl"
                  bg="gray.100"
                  shadow="lg"
                  cursor="pointer"
                  borderWidth="0px"
                  height="100px"
                  minHeight="100px"
                  width="330px"
                  minWidth="330px"
                  overflow="hidden"
                  onClick={() => {
                    setSelectedEmail(email);
                    markAsRead(email.id);
                    setGuessFeedback("");
                  }}
                >
                  <Card.Title fontWeight={email.isRead ? "medium" : "bold"}>
                    {email.sender}
                  </Card.Title>
                  <Card.Description>{email.subject}</Card.Description>
                </Card.Root>
              ))
            )}
          </VStack>
        </VStack>

        {/* Email Preview */}
        <Box
          flex="1"
          bg="gray.100"
          p={6}
          borderLeft="1px solid"
          borderColor="gray.200"
          height="100%"
        >
          <Box overflow="auto" maxHeight="calc(100vh - 100px)" height="80%">
            {selectedEmail ? (
              <EmailPreview
                selectedEmail={selectedEmail}
                onGuess={handleGuess}
                isGuessed={isCurrentEmailGuessed}
                guessFeedback={guessFeedback}
                username={username}
              />
            ) : (
              <Text>Vali menüüst vaatamiseks email!</Text>
            )}
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default EmailInbox;