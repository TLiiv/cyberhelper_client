import React, { useState } from "react";
import { Button, Flex, Input, Text, Dialog } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";

const FakeIdCardPopup: React.FC = () => {
  const [pin, setPin] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setPin("");
    setIdNumber("");
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (pin.length <= 5) {
      alert(
        "Vaatame tõele näkku, sa peaksid legitiimne sellele meilile panema"
      );
      handleClose();
    } else {
      alert("Vale PIN. Palun proovige uuesti.");
    }
  };

  return (
    <>
      <Button
        bg="#008936"
        _hover={{ bg: "#00702c" }}
        width="14%"
        fontWeight="normal"
        textStyle="xl"
        rounded="lg"
        mt={4}
        pt={6}
        pb={6}
        onClick={handleOpen}
      >
        Jätka
      </Button>

      <Dialog.Root
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        modal
        size="md"
      >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger onClick={handleClose} />
            <Dialog.Header bg="gray.800" color="gray.100">
              <Dialog.Title fontSize="3xl">Isikutuvastus</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body bg="gray.800" color="gray.100">
              <Text mb={4}>
                Isikutuvastusel nõustun oma nime ja isikukoodi edastamisega
                teenusepakkujale. <br /> <b>tara.ria.ee</b>
              </Text>
              <form onSubmit={handleSubmit}>
                <Flex direction="column" align="center" width="100%">
                  <Text mb={2} textAlign="center" fontWeight="semibold">
                    Sisesta isikutuvastamiseks oma isikukood
                  </Text>
                  <Input
                    value={idNumber}
                    borderWidth="2px"
                    borderColor="#0E7BB7"
                    placeholder="Sisesta isikukood"
                    onChange={(e) => setIdNumber(e.target.value)}
                    mb={4}
                    width="50%"
                    textAlign="center"
                  />

                  <Text mb={2} textAlign="center" fontWeight="semibold">
                    Sisesta isikutuvastamiseks PIN1-kood
                  </Text>
                  <Input
                    type="password"
                    placeholder="Sisesta PIN1"
                    value={pin}
                    borderWidth="2px"
                    borderColor="#0E7BB7"
                    onChange={(e) => setPin(e.target.value)}
                    mb={4}
                    width="50%"
                    textAlign="center"
                  />
                </Flex>

                <Flex
                  direction="row"
                  justify="space-between"
                  width="100%"
                  mt={6}
                >
                  <Button
                    width="25%"
                    color="white"
                    bg="gray.600"
                    onClick={handleClose}
                  >
                    Katkesta
                  </Button>
                  <Button type="submit" bg="#111B2B" color="white" width="25%">
                    <LuArrowRight /> Kinnita
                  </Button>
                </Flex>
              </form>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
};

export default FakeIdCardPopup;
