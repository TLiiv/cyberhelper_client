import { Box, Text, Heading, VStack, Flex, Highlight } from "@chakra-ui/react";
import { useState } from "react";
import { LuArrowDown, LuArrowRight } from "react-icons/lu";

const TutorialPage: React.FC = () => {
  const [showFakeUrl, setShowFakeUrl] = useState(false);

  return (
    <Box maxW="1200px" mx="auto" mt={0} p={8} borderRadius="lg">
      <Box
        bg="linear-gradient(135deg, rgba(0, 181, 163, 0.1), rgba(0, 72, 122, 0.1))"
        p={8}
        borderRadius="lg"
      >
        <Flex justify="center" align="flex-start" width="70%" mx="auto" mb={8}>
          <VStack p={4}>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl" }}
              textAlign="center"
              fontWeight="bold"
              lineHeight="1.2"
              letterSpacing="tight"
            >
              <Text display={{ base: "inline", md: "block" }}>
                <Highlight query="kaitsta" styles={{ color: "teal.500" }}>
                  Kuidas ennast kaitsta
                </Highlight>
              </Text>
              <Text display={{ base: "inline", md: "block" }}>
                <Highlight
                  query="e-kirja rünnaku"
                  styles={{ color: "teal.500" }}
                >
                  andmepüügi e-kirja rünnaku eest
                </Highlight>
              </Text>
            </Heading>

            <Text fontSize="lg" lineHeight="1.7">
              Küberkuritegevus muutub järjest nutikamaks ja üks kõige levinumaid
              rünnakute tüüpe on andmepüük. Petturi peamine eesmärk on
              inimestelt välja petta nende isikuandmed, kasutades võltsitud
              e-kirju, veebilehti ja sõnumeid. Varastatud andmeid kasutatakse
              identiteedivarguseks, rahaliste vahendite juurdepääsuks või mustal
              turul müümiseks. Petturid üritavad ka saada ligipääsu sinu
              pangakontodele, krediitkaartidele või üritada muudelt kontodelt
              raha varastada.
            </Text>

            <Heading size="xl" color="teal.500" mt={4}>
              Andmepüügi e-meilide tuvastamine
            </Heading>

            <Text fontSize="lg" lineHeight="1.7">
              Kuigi petturid näevad võltsitud e-kirjade loomiseks palju vaeva on
              peaaegu võimatu originaali täiuslikult kopeerida. Enamikul
              juhtudel saad sa e-kirja üksikasju uurides tuvastada, kas tegemist
              on pettusega. Siin on mõned peamised tehnikad võltsitud e-kirja
              tuvastamiseks:
            </Text>

            <Heading
              as="h4"
              size="lg"
              color="teal.500"
              mt={8}
              width="100%"
              textAlign="left"
            >
              Linkide kontrollimine e-kirjas
            </Heading>
            <Text fontSize="lg" lineHeight="1.7">
              Andmepüügi e-kirjade peamine eesmärk on üritada sind panna
              klikkima lingile, mis viib su võltsitud veebilehele. Võltsitud
              veebileht näeb välja nagu autentne teenus. See veebileht küsib
              tõenäoliselt sinu sisselogimisandmeid, mis pärast sisestamist
              petturi kätte lähevad.
            </Text>
            <Text fontSize="lg" lineHeight="1.7">
              Võltsitud lingi tuvastamiseks aitab kursori asetamine e-kirjas
              oleva lingi peale ( kursori nuppe samal ajal mitte vajutada! ).
              Seda tehes tekkib alla vasakule äärde lingi aadress (URL). Kui
              lingi aadress tundub kahtlane, on tõenäoliselt tegemist
              petuskeemiga.
            </Text>
            <Text fontSize="lg" lineHeight="1.7">
              Näiteks e-meilis olev link peaks su suunama www.facebook.com aga
              hiirega lingi kohale minnes ilmub aadress www.feispook.ru
            </Text>
            <Heading as="h4" size="2xl" mt={4} textAlign="center">
              Testi Siin
            </Heading>
            <Box textAlign="center" mt={2}>
              <Text
                display="inline-flex"
                justifyContent="center"
                color="white"
                fontSize="2xl"
              >
                <LuArrowDown />
                <LuArrowDown />
                <LuArrowDown />
              </Text>
            </Box>
            <Box
              width="50%"
              background="black"
              p={6}
              borderRadius="4xl"
              textAlign="center"
              borderWidth="1px"
              borderColor="teal.500"
            >
              <Text fontSize="lg" lineHeight="1.7" color="white">
                <Text
                  as="span"
                  color="blue.500"
                  textDecor="underline"
                  cursor="pointer"
                  onMouseEnter={() => setShowFakeUrl(true)}
                  onMouseLeave={() => setShowFakeUrl(false)}
                >
                  www.facebook.com
                </Text>
              </Text>

              <Text fontSize="lg" lineHeight="1.7" color="white" mt={2}>
                Aseta hiir aadressi kohale ja vaata ekraanil all vasakusse nurka
              </Text>

              {showFakeUrl && (
                <Box
                  position="fixed"
                  bottom="8px"
                  left="12px"
                  fontSize="sm"
                  bg="gray.800"
                  color="white"
                  px={2}
                  py={1}
                  zIndex="9999"
                  opacity={0.9}
                >
                  www.feispook.ru
                </Box>
              )}
            </Box>

            <Heading
              as="h4"
              size="lg"
              color="teal.500"
              mt={4}
              width="100%"
              textAlign="left"
            >
              Saatja e-posti aadress
            </Heading>
            <Text fontSize="lg" lineHeight="1.7">
              Üks lihtsamaid viise andmepüügi e-kirja tuvastamiseks on saatja
              e-posti aadressi kontrollimine. Andmepüügikirjad kasutavad tihti
              võltsitud/valesid e-posti aadresse, mis meenutavad ametlikke
              aadresse või sisaldavad olulisi märksõnu, mis teevad need
              näiliselt autentseks. Kontrollige alati aadressi, kasutades
              otsingumootorit (nt: google.com), et veenduda selle
              usaldusväärsuses.
            </Text>

            <Heading
              as="h4"
              size="lg"
              color="teal.500"
              mt={4}
              width="100%"
              textAlign="left"
            >
              E-kirja veidrad fondid ja värvid
            </Heading>
            <Text fontSize="lg" lineHeight="1.7">
              E-kirjas olevad imelikud fondid ja värvid võivad viidata
              andmepüügikatsele. Legitiimsed organisatsioonid kasutavad oma
              brändi disaini ja värve , et tagada oma e-kirjade professionaalne
              välimus. Petturid ei pääse sageli aga õigetele disainivahenditele
              ligi ja sageli võivad nende e-kirjad sisaldada imelikke fonte,
              häguseid logosid ja värve, mis ei klapi organisatsiooni värvidega.
            </Text>

            <Heading
              as="h4"
              size="lg"
              color="teal.500"
              mt={4}
              width="100%"
              textAlign="left"
            >
              Kehv õigekiri
            </Heading>
            <Text fontSize="lg" lineHeight="1.7">
              Andmepüügi kirjades võib sageli leida kirjavigu või veidraid
              lauseehitusi. Uuri hoolikalt e-kirja õigekirja, sest petturid ei
              pruugi oma sisu korralikult üle kontrollida, mistõttu esineb palju
              vigu. Pööra tähelepanu kohmakatele väljenditele, ebatavalistele
              sõnavalikutele või imelikule kirjavahemärgistusele. Need on
              tavalised märgid andmepüügi üritusest. Kui märkad palju õigekirja
              vigu, ole ettevaatlik. Väldi linkide klõpsamist ja manuste
              avamist.
            </Text>

            <Heading
              as="h4"
              size="lg"
              color="teal.500"
              mt={4}
              width="100%"
              textAlign="left"
            >
              Kiire tegevuse nõudmine
            </Heading>
            <Text fontSize="lg" lineHeight="1.7">
              Küberspetturid kasutavad sageli kiirust, et tõmmata tähelepanu ja
              langetada ohvri valvsust. Andmepüügikirjad väidavad tihti, et kui
              sa kiiresti ei tegutse juhtub midagi kohutavat. Näiteks võivad nad
              väita, et keegi üritab sinu kontole sisse logida, võitsid auhinna
              aga selle kättesaamiseks on piiratud aeg või et sinu konto
              luksutatakse, kui sa kohe oma andmeid ei kinnita.
            </Text>

            <Heading
              as="h4"
              size="lg"
              color="teal.500"
              mt={4}
              width="100%"
              textAlign="left"
            >
              E-kirjad, mis küsivad isikuandmeid
            </Heading>
            <Text fontSize="lg" lineHeight="1.7">
              Veel üks levinud andmepüügi tunnus on e-kirjad, mis küsivad
              isikuandmeid. Legitiimsed organisatsioonid ei palu kasutajatel
              tundlikke andmeid, nagu paroolid, isikuandmed(isikukood, id kaardi
              andmed) või finantsandmed (krediitkaardiinfo, pangakonto
              paroolid), läbi e-maili jagada. Selliste e-meilide saamisel tuleks
              olla eriti ettevaatlik ja tähelepanelik.
            </Text>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default TutorialPage;
