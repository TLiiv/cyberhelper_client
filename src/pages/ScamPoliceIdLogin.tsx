import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Image,
  VStack,
  HStack,
  Heading,
  InputGroup,
} from "@chakra-ui/react";
import FakeIdCardPopup from "@/components/ScamEmail/FakeIdCardPopup";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ScamPoliceIdLogin: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState("id-card");

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Riigi audentimisteenus - Turvaline autentimine asutuse e-teenustes
        </title>
        <link
          rel="icon"
          href="https://astrablobs.blob.core.windows.net/kitcontent/ba838a3c-efcc-4d31-b758-cf8dcf40885a/045dd51f-3931-49e4-bb35-2b10e6f94034/da8e9c0d-3989-44e3-9256-154da316a2ef_m.png"
        />
      </Helmet>
      <Box bg="gray.100" minH="100vh" display="flex" flexDirection="column">
        <Flex
          bg="#003168"
          p={3}
          align="center"
          color="gray.100"
          justify="center"
        >
          <Box width="55%">
            <HStack justify="space-between" fontWeight="semibold" fontSize="lg">
              <Text fontSize="xl" ml={4}>
                Turvaline autentimine asutuste e-teenustes
              </Text>

              <HStack mr={12}>
                <Text
                  _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  pr={2}
                >
                  LIGIPÄÄSETAVUS
                </Text>
                <Box
                  height="38px"
                  borderLeft="1px solid white"
                  mx={2}
                  as="span"
                />
                <Text
                  _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  pl={2}
                >
                  ENGLISH
                </Text>
                <Text
                  _hover={{ cursor: "pointer", textDecoration: "underline" }}
                  pl={2}
                >
                  РУССКИЙ
                </Text>
              </HStack>
            </HStack>
          </Box>
        </Flex>

        <Flex bg="white" p={6} justify="center">
          <Box width="55%">
            <Image
              src="https://tara.ria.ee/assets/tara-logo.png"
              w="277px"
              ml={2}
            />
          </Box>
        </Flex>

        <Box p={6} mx="auto" width="55%" borderRadius="md">
          <Flex>
            <HStack mb={4}>
              <Button
                width="50%"
                fontWeight="semibold"
                textStyle="xl"
                rounded="lg"
                size="lg"
                p={6}
                bg={selectedMethod === "id-card" ? "#005f87" : "white"}
                color={selectedMethod === "id-card" ? "white" : "#003168"}
                onClick={() => setSelectedMethod("id-card")}
                _hover={{
                  bg: "#005f87",
                  color: "white",
                }}
              >
                ID-kaart
              </Button>
              <Button
                width="50%"
                fontWeight="semibold"
                textStyle="xl"
                rounded="lg"
                size="lg"
                p={6}
                bg={selectedMethod === "mobile-id" ? "#005f87" : "white"}
                color={selectedMethod === "mobile-id" ? "white" : "#003168"}
                onClick={() => setSelectedMethod("mobile-id")}
                _hover={{
                  bg: "#005f87",
                  color: "white",
                }}
              >
                Mobiil-ID
              </Button>
              <Button
                width="50%"
                fontWeight="semibold"
                textStyle="xl"
                rounded="lg"
                size="lg"
                p={6}
                bg={selectedMethod === "smart-id" ? "#005f87" : "white"}
                color={selectedMethod === "smart-id" ? "white" : "#003168"}
                onClick={() => setSelectedMethod("smart-id")}
                _hover={{
                  bg: "#005f87",
                  color: "white",
                }}
              >
                Smart-ID
              </Button>
            </HStack>
          </Flex>

          <Flex
            bg="white"
            p={6}
            justify="flex-end"
            borderRadius="lg"
            width="100%"
          >
            <Flex width="85%" mb={4}>
              {selectedMethod === "id-card" && (
                <VStack align="start">
                  <Heading
                    color="#003168"
                    size="3xl"
                    fontWeight="medium"
                    mt={3}
                  >
                    ID-Kaart
                  </Heading>
                  <Text fontSize="lg" fontWeight="normal" mt={4}>
                    Teenusesse
                    <b> PPA ID-kaardi ja passi taotlemise iseteenindus </b>
                    sisselogimiseks vajate kaardilugejat ja kehtivat ID-kaarti.
                    Sisestage ID-kaart kaardilugejasse ja vajutage "Jätka".
                  </Text>
                  <FakeIdCardPopup />
                </VStack>
              )}

              {selectedMethod === "mobile-id" && (
                <VStack align="start">
                  <Heading
                    color="#003168"
                    size="3xl"
                    fontWeight="medium"
                    mt={3}
                  >
                    Mobiil-ID
                  </Heading>
                  <Text fontSize="lg" fontWeight="normal" mt={4}>
                    Teenusesse
                    <b> PPA ID-kaardi ja passi taotlemise iseteenindus </b>
                    sisselogimiseks vajate kehtivat Mobiil-ID lepingut.
                    Sisestage oma isikukood ja telefoninumber ning vajutage
                    "Jätka".
                  </Text>
                  <Flex mt={8} direction="column" align="flex-end">
                    <HStack mb={3}>
                      <Text
                        fontSize="lg"
                        fontWeight="semibold"
                        color="gray.600"
                      >
                        Isikukood
                      </Text>
                      <InputGroup
                        startAddon={
                          <Text color="gray.500" fontSize="lg" pl={2} pr={2}>
                            EE
                          </Text>
                        }
                        border="2px solid"
                        borderColor="gray.600"
                        rounded="lg"
                        color="gray.800"
                        width="325px"
                      >
                        <Input
                          size="xl"
                          border="none"
                          fontSize="xl"
                          fontWeight="bold"
                        />
                      </InputGroup>
                    </HStack>

                    <HStack>
                      <Text
                        fontSize="lg"
                        fontWeight="semibold"
                        color="gray.600"
                      >
                        Telefoninumber
                      </Text>
                      <InputGroup
                        startAddon={
                          <Text color="gray.500" fontSize="lg" pl={2} pr={2}>
                            +372
                          </Text>
                        }
                        border="2px solid"
                        borderColor="gray.600"
                        rounded="lg"
                        color="gray.800"
                        width="325px"
                      >
                        <Input
                          size="xl"
                          border="none"
                          fontSize="xl"
                          fontWeight="bold"
                        />
                      </InputGroup>
                    </HStack>

                    <Flex justify="start" width="100%">
                      <Button
                        bg="#008936"
                        _hover={{ bg: "#00702c" }}
                        width="25%"
                        fontWeight="normal"
                        textStyle="xl"
                        rounded="lg"
                        mt={4}
                        pt={6}
                        pb={6}
                        ml="30%"
                      >
                        Jätka
                      </Button>
                    </Flex>
                  </Flex>
                </VStack>
              )}

              {selectedMethod === "smart-id" && (
                <VStack align="start">
                  <Heading
                    color="#003168"
                    size="3xl"
                    fontWeight="medium"
                    mt={3}
                  >
                    Smart-ID
                  </Heading>
                  <Text fontSize="lg" fontWeight="normal" mt={4}>
                    Teenusesse
                    <b> PPA ID-kaardi ja passi taotlemise iseteenindus </b>
                    sisselogimiseks vajate kehtivat Smart-ID kontot. Sisestage
                    oma isikukood ning vajutage "Jätka". Seejärel saadetakse
                    Teie Smart-ID rakendusse kontrollkood.
                  </Text>
                  <Flex mt={8} direction="column" align="center">
                    <HStack mb={3} ml="20%">
                      <Text
                        fontSize="lg"
                        fontWeight="semibold"
                        color="gray.600"
                      >
                        Isikukood
                      </Text>
                      <InputGroup
                        startAddon={
                          <Text color="gray.500" fontSize="lg" pl={2} pr={2}>
                            EE
                          </Text>
                        }
                        border="2px solid"
                        borderColor="gray.600"
                        rounded="lg"
                        color="gray.800"
                        width="325px"
                      >
                        <Input
                          size="xl"
                          border="none"
                          fontSize="xl"
                          fontWeight="bold"
                        />
                      </InputGroup>
                    </HStack>

                    <Flex justify="start" width="100%">
                      <Button
                        bg="#008936"
                        _hover={{ bg: "#00702c" }}
                        width="25%"
                        fontWeight="normal"
                        textStyle="xl"
                        rounded="lg"
                        mt={4}
                        pt={6}
                        pb={6}
                        ml="30%"
                      >
                        Jätka
                      </Button>
                    </Flex>
                  </Flex>
                </VStack>
              )}
            </Flex>
          </Flex>
        </Box>

        <Flex
          bg="#dbdfe2"
          p={4}
          justify="center"
          align="center"
          width="100%"
          mt="auto"
        >
          <Box width="55%">
            <Image
              src="https://tara.ria.ee/assets/el_regionaalarengu_fond_horisontaalne.jpg"
              alt="Footer Image"
              width="130px"
              m={3}
            />
          </Box>
        </Flex>
      </Box>
    </HelmetProvider>
  );
};

export default ScamPoliceIdLogin;
