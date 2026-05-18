import EmailDashboard from "@/components/Email/EmailDashboard";
import {
  Box,
  Button,
  Text,
  Theme,
  VStack,
  Input,
  CloseButton,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TestPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [testStarted, setTestStarted] = useState(false);

  const navigate = useNavigate();

  const handleStartTest = () => {
    if (username.trim()) {
      setTestStarted(true);
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <Box
      maxW="1680px"
      mx="auto"
      px={4}
      position="relative"
      minHeight={{ base: "100vh", md: "85vh", lg: "85vh" }}
    >
      <Theme appearance="light" borderRadius="4xl">
        {!testStarted ? (
          <Box
            position="fixed"
            top={0}
            left={0}
            w="100vw"
            h="100vh"
            zIndex={1000}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              maxW="480px"
              w="full"
              position="relative"
              boxShadow="lg"
            >
              <CloseButton
                variant="ghost"
                position="absolute"
                size="md"
                top={3}
                right={3}
                onClick={handleClose}
              />
              <VStack align="stretch" p={4} fontWeight="semibold">
                <Heading size="lg" fontWeight="bold">
                  Tere tulemast andmepüügi emaili tuvastamise testi!
                </Heading>
                <Text>
                  Selles testis saad proovida, kui hästi suudad eristada õigeid
                  e-kirju valedest. Testis on kokku 8 taset.
                </Text>
                <Text>
                  Sina pead ära arvama, kas tegemist on andmepüügi või õige
                  e-kirjaga. Alates viiendast tasemest muutuvad osad lingid
                  aktiivseks, kuna meili sisu põhjal ei ole nii lihtne aru
                  saada, kas tegemist on andmepüügiga või mitte.
                </Text>
                <Text>
                  Testi oma teadlikkust ja uuri välja, kas sa suudad andmepüügi
                  eristada õigest e-kirjast. Edu!
                </Text>
                <Text>
                  Enne alustamist sisesta oma nimi ja vajuta „Alusta testi”.
                </Text>
                <Input
                  placeholder="Sisesta oma nimi"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Button
                  background="teal.500"
                  color="white"
                  onClick={handleStartTest}
                  disabled={!username.trim()}
                  fontWeight="semibold"
                  fontSize="lg"
                >
                  Alusta testi
                </Button>
              </VStack>
            </Box>
          </Box>
        ) : (
          <EmailDashboard username={username} />
        )}
      </Theme>
    </Box>
  );
};

export default TestPage;
