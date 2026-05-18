import { Box, Button, Text, Heading, Flex } from "@chakra-ui/react";
import { Email, populateEmailBody, sanitizeHtml } from "./Email.helpers";

const EmailPreview: React.FC<{
  selectedEmail: Email;
  onGuess: (isPhishingGuess: boolean) => void;
  isGuessed: boolean;
  guessFeedback: string;
  username: string;
}> = ({ selectedEmail, onGuess, isGuessed, guessFeedback, username }) => {
  const emailBody = populateEmailBody(
    selectedEmail.body,
    selectedEmail,
    username
  );
  const sanitizedEmailBody = sanitizeHtml(emailBody);

  return (
    <>
      <Heading size="xl" fontWeight="semibold">
        {selectedEmail.subject}
      </Heading>
      <Text fontSize="sm" fontWeight="semibold" color="gray.800">
        From: {selectedEmail.sender}
      </Text>
      <Text fontSize="sm" color="gray.500">
        To: {username}@cybermail.ee
      </Text>
      <Box mt={6} p={4} bg="gray.100" borderRadius="lg">
        <div dangerouslySetInnerHTML={{ __html: sanitizedEmailBody }} />
      </Box>

      <Box position="absolute" bottom="1%" left="50%">
        <Flex mt={4} direction="column" gap={4}>
          <Flex gap={4}>
            <Button
              colorPalette="teal"
              onClick={() => onGuess(true)}
              disabled={isGuessed}
            >
              Andmepüük
            </Button>
            <Button
              colorPalette="teal"
              onClick={() => onGuess(false)}
              disabled={isGuessed}
            >
              Tõeline
            </Button>
          </Flex>

          {guessFeedback && (
            <Text fontSize="md" fontWeight="bold" textAlign="center">
              {guessFeedback}
            </Text>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default EmailPreview;
