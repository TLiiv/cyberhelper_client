import {
  Field,
  Button,
  VStack,
  Input,
  Box,
  Flex,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ScamJobOfferForm: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Telia Job Application</title>
      </Helmet>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        minHeight="100vh"
      >
        <Box
          backgroundColor="#29003e"
          color="white"
          display="flex"
          alignItems="center"
          height="auto"
        >
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGP5sNlXmsOI7gYT0CJ_CHk5dSzSQAggV7Olm6yGnWc309rfigelG4NlxtCW6pV8wVRy8&usqp=CAU"
            width="100px"
            height="100%"
            objectFit="contain"
          />
          <Spacer />
        </Box>

        <Box
          flex="1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={4}
        >
          <VStack align="stretch" maxWidth="500px" margin="0 auto" padding={4}>
            <Field.Root>
              <Field.Label htmlFor="firstName">Eesnimi</Field.Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Sisesta oma eesnimi"
              />
            </Field.Root>
            <Field.Root mt={2}>
              <Field.Label htmlFor="lastName">Perekonnanimi</Field.Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Sisesta oma perekonnanimi"
              />
            </Field.Root>

            <Field.Root mt={2}>
              <Field.Label htmlFor="email">E-posti aadress</Field.Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Sisesta oma e-posti aadress"
              />
            </Field.Root>

            <Field.Root mt={2}>
              <Field.Label htmlFor="phone">Telefoninumber</Field.Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Sisesta oma telefoninumber"
              />
            </Field.Root>

            <Field.Root mt={2}>
              <Field.Label htmlFor="address">Aadress</Field.Label>
              <Input
                id="address"
                name="address"
                placeholder="Sisesta oma aadress"
              />
            </Field.Root>

            <Field.Root mt={2}>
              <Field.Label htmlFor="idCard">
                Tee oma ID-kaardi esi- ja tagaküljest pilt ja lae üles
              </Field.Label>
              <Input
                id="idCard"
                name="idCard"
                type="file"
                display="none"
                ref={fileInputRef}
              />
              <Button
                mt={2}
                onClick={handleButtonClick}
                background="#1f002e"
                color="#f5e0ff"
                borderRadius="30px"
                fontWeight="bold"
                _hover={{ background: "#4e0174" }}
                w="50%"
              >
                Lae pildid üles
              </Button>
              <Field.HelperText>
                (Tööandjale lepingu tegemiseks)
              </Field.HelperText>
            </Field.Root>

            <Field.Root mt={2}>
              <Field.Label htmlFor="previousJobs">
                Varasemad töökohad ja põhjused lahkumiseks
              </Field.Label>
              <Input
                id="previousJobs"
                name="previousJobs"
                placeholder="Sisesta varasemad töökohad"
              />
            </Field.Root>

            <Flex justify="center" width="100%" mt={4}>
              <Button
                width="50%"
                color="white"
                fontWeight="bold"
                background="#b12df4"
                type="submit"
                borderRadius="30px"
                _hover={{ background: "#990ae3" }}
              >
                Esita
              </Button>
            </Flex>
          </VStack>
        </Box>
      </Box>
    </HelmetProvider>
  );
};

export default ScamJobOfferForm;
