import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Highlight,
  Link,
  List,
} from "@chakra-ui/react";
import { LuCircle } from "react-icons/lu";

const facts = [
  "Iga päev saadetakse inimeste petmiseks hinnanguliselt 3.4 miljardit andmepüügimeili.",
  "36% kõikidest andmeleketest on seotud andmepüügirünnakutega.",
  "Alates 2019. aastast on andmepüügirünnakute arv kasvanud rohkem kui 150% aastas.",
  "Suunatud kalastusrünnakutel (ingl spear-phishing) on 53.2% klikkimise määr, mis tähendab, et rohkem kui pooled sihitud isikud langevad ohvriks.",
  "E-post on ülekaalukalt kõige populaarsem meetod andmepüügirünnakute läbiviimiseks. Hinnanguliselt algab 91% kõigist küberrünnakutest andmepüügimeiliga.",
  "91% õngitsuskirjadest saadetakse Gmaili kontode kaudu. Gmaili populaarsuse põhjuseks ründajate seas on arvatavasti võimalus luua kiiresti ja tasuta suur hulk kontosid ning kasutada Google’i sisseehitatud ''kviitungite lugemise'' funktsiooni.",
];

const HomePage: React.FC = () => {
  return (
    <>
      <Box maxW="1200px" mx="auto" mt={0} p={8} borderRadius="lg">
        <VStack align="stretch">
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "5xl" }}
            textAlign="center"
            fontWeight="bold"
            lineHeight="1.2"
            letterSpacing="tight"
          >
            <Text display={{ base: "inline", md: "block" }}>
              <Highlight query="sina" styles={{ color: "teal.500" }}>
                Kas sina suudad ära tuvastada
              </Highlight>
            </Text>
            <Text display={{ base: "inline", md: "block" }}>
              <Highlight query="andmepüügi" styles={{ color: "teal.500" }}>
                andmepüügi rünnaku?
              </Highlight>
            </Text>
          </Heading>

          <Text
            fontSize="xl"
            textAlign="center"
            display={{ base: "inline", md: "block" }}
          >
            Selle veebilehe peamine eesmärk on suurendada inimeste teadlikkust
            andmepüügist,
          </Text>
          <Text
            fontSize="xl"
            textAlign="center"
            display={{ base: "inline", md: "block" }}
          >
            mis on üks kõige levinum küberkuriteo vorm.
          </Text>
        </VStack>
      </Box>

      {/* Intro sektsioon */}
      <Box maxW="1300px" mx="auto">
        <HStack align="start">
          <VStack align="stretch" flex="1">
            <Box maxW="900px" mx="auto" mt={2} ml={4} p={10}>
              <Text fontSize="xl">
                Andmepüük ehk kalastamisrünne ( ingl{" "}
                <Box as="span" fontStyle="italic" display="inline">
                  <i>phishing</i>
                </Box>{" "}
                ) on petuskeem, kus ründajad üritavad meelitada inimesi jagama
                tundlikut informatsiooni, nagu paroolid, krediitkaardiandmed ja
                muud isiklikud andmed. Petturid maskeerivad end
                usaldusväärseteks allikateks, kasutades selleks e-kirju,
                võltsitud veebilehti või reaalajas toimuvaid tekstilisi
                sõnumeid.
              </Text>
            </Box>
            <Box
              maxW="900px"
              mx="auto"
              mt={10}
              p={4}
              borderRadius="4xl"
              textAlign="center"
              borderWidth="1px"
              borderColor="teal.500"
            >
              <Text fontSize="xl" fontWeight="semibold">
                Kas sina suudad eristada ehtsa e-kirja petu e-kirjast?
              </Text>
              <Text fontSize="xl" fontWeight="semibold">
                Kliki{" "}
                <RouterLink to={"/test"}>
                  <Box as="span" display="inline" color="teal.500">
                    SIIA
                  </Box>
                </RouterLink>{" "}
                ja testi oma teadmisi!
              </Text>
            </Box>
          </VStack>

          <Box flex="1" display={{ base: "none", lg: "block" }}>
            <Box
              maxW="900px"
              mx="auto"
              mt={2}
              p={8}
              borderRadius="lg"
              shadow="xl"
              background="linear-gradient(135deg, rgba(0, 181, 163, 0.1), rgba(0, 72, 122, 0.1))"
            >
              <Heading size="xl" mb={6} textAlign="center" color="teal.500">
                Mõned faktid andmepüügist
              </Heading>
              <VStack align="stretch">
                <List.Root gap="4" variant="plain" align="center">
                  {facts.map((fact, index) => (
                    <List.Item key={index}>
                      <List.Indicator asChild color="teal.500">
                        <Box as="span" pt="0.3em">
                          <LuCircle />
                        </Box>
                      </List.Indicator>
                      <Text fontSize="md">{fact}</Text>
                    </List.Item>
                  ))}
                </List.Root>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.stationx.net/phishing-statistics/"
                  variant="underline"
                >
                  <Text pl={6}>
                    — <cite>Allikad</cite>
                  </Text>
                </Link>
              </VStack>
            </Box>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default HomePage;
