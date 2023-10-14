import React from "react";

import {
  IconBatteryAutomotive,
  IconBook,
  IconChefHat,
  IconCreditCard,
  IconDroplet,
  IconGlassFull,
  IconGrillFork,
  IconHandRingFinger,
  IconHandThreeFingers,
  IconMap,
  IconMapPinCheck,
  IconMessageCircle,
  IconMoodCheck,
  IconMusic,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconNumber6,
  IconPhoto,
  IconPlaylistOff,
  IconPlug,
  IconQuestionMark,
  IconSalt,
  IconSlice,
  IconToolsKitchen,
  IconUser,
  IconUsers,
  TablerIconsProps,
} from "@jf/icons";
import {
  Accordion,
  Box,
  Divider,
  Group,
  List,
  Stack,
  Tabs,
  Text,
} from "@jf/material";

import { fonts } from "../../utils/fonts";
import BankaiText from "../Text/BankaiText";
import MonserattText from "../Text/MonserattText";

type NoteVocal = {
  valueJap: string;
  valueFr: string;
  icon?: (props: TablerIconsProps) => JSX.Element;
};

const vocabulaireList: NoteVocal[] = [
  {
    valueFr: "Verre",
    valueJap: "gurasu",
    icon: IconGlassFull,
  },
  {
    valueFr: "fourchette",
    valueJap: "fooku",
    icon: IconGrillFork,
  },
  {
    valueFr: "couteau",
    valueJap: "naifu",
    icon: IconSlice,
  },
  {
    valueFr: "sel",
    valueJap: "shio",
    icon: IconSalt,
  },
];

const restaurateurList: NoteVocal[] = [
  {
    valueFr: "Bienvenue",
    valueJap: "Irasshaimase",
    icon: IconHandThreeFingers,
  },
  {
    valueFr: "Combien êtes-vous ?",
    valueJap: "Nan mei sama desu ka ?",
    icon: IconHandThreeFingers,
  },
  {
    valueFr: "Vous désirez ? (Votre commande)",
    valueJap: "Meshiagatte kudasai",
    icon: IconHandThreeFingers,
  },
];

const clientList: NoteVocal[] = [
  {
    valueFr: "1 personne",
    valueJap: "Hitori desu",
    icon: IconUser,
  },
  {
    valueFr: "2 personne",
    valueJap: "futari desu",
    icon: IconUsers,
  },
  {
    valueFr: "Excusez-moi",
    valueJap: "Sumimasen",
    icon: IconHandThreeFingers,
  },

  {
    valueFr: "svp !",
    valueJap: "wo kudasai",
    icon: IconHandThreeFingers,
  },

  {
    valueFr: `Excusez moi, le menu svp ?
    `,
    valueJap: "Sumimasen, menyuu wo kudasai",
    icon: IconMap,
  },

  {
    valueFr: `Je voudrais commander, svp !`,
    valueJap: "Gochuumon onegaishimasu",
    icon: IconHandThreeFingers,
  },

  {
    valueFr: `Excusez moi, de l’eau svp ?`,
    valueJap: "Sumimasen, mizu wo kudasai",
    icon: IconDroplet,
  },

  {
    valueFr: `Excusez moi, des baguettes svp ?`,
    valueJap: "Sumimasen, hashi wo kudasai",
  },

  {
    valueFr: `Excusez-moi, couteau et fourchette svp !`,
    valueJap: "Sumimasen, Naifu to fooku wo kudasai",
    icon: IconToolsKitchen,
  },

  {
    valueFr: `Qu’est ce que c’est ?`,
    valueJap: "Kore wa nan desu ka",
    icon: IconQuestionMark,
  },

  {
    valueFr: `Je voudrais ça `,
    valueJap: "Kore wa kudasai",
    icon: IconHandRingFinger,
  },

  {
    valueFr: `Je prendrais (2x) ceci svp !`,
    valueJap: "Kore wo (futatsu) kudasai",
  },

  {
    valueFr: ``,
    valueJap: "(1x) - hitotsu",
    icon: IconNumber1,
  },

  {
    valueFr: ``,
    valueJap: "(2x) - futatsu",
    icon: IconNumber2,
  },

  {
    valueFr: ``,
    valueJap: "(3x) - miisu",
    icon: IconNumber3,
  },

  {
    valueFr: ``,
    valueJap: "(4x) - yottsu",
    icon: IconNumber4,
  },

  {
    valueFr: ``,
    valueJap: "(5x) - itsutsu",
    icon: IconNumber5,
  },

  {
    valueFr: ``,
    valueJap: "(6x) - muttsu",
    icon: IconNumber6,
  },

  {
    valueFr: `Je voudrais des brochette de poulet`,
    valueJap: "Yakitori wa kudasai",
  },

  {
    valueFr: `Je voudrais 2 brochette de poulet`,
    valueJap: "Yakitori wo futatsu kudasai",
  },

  {
    valueFr: `Que me conseillez vous ?`,
    valueJap: "O susume wa nan desu ka",
    icon: IconQuestionMark,
  },

  {
    valueFr: `Bonne Appétit (ou plutôt j’accepte ce repas)
    `,
    valueJap: "Itadakimasu",
  },

  {
    valueFr: `L’addition svp`,
    valueJap: "O Kanju o negai shimasu",
    icon: IconCreditCard,
  },

  {
    valueFr: `Quand on sort du resto, très important il faut dire que c’est bon. C’est une manière de remercier les cuisiniers.`,
    valueJap: "",
  },

  {
    valueFr: `C’était bon`,
    valueJap: "Oishi desu",
    icon: IconMoodCheck,
  },

  {
    valueFr: `C’était délicieux`,
    valueJap: "Goshiso(u) sama desh(i)ta",
    icon: IconMoodCheck,
  },

  {
    valueFr: ``,
    valueJap: "Goshiso(u) sama (version courte)",
    icon: IconMoodCheck,
  },
];

export const ListRappel = () => {
  return (
    <Tabs defaultValue="resto">
      <Tabs.List>
        <Tabs.Tab value="rappel" icon={<IconPhoto />}>
          <MonserattText> Rapelle</MonserattText>
        </Tabs.Tab>
        <Tabs.Tab value="resto" icon={<IconChefHat />}>
          <MonserattText>Restaurant</MonserattText>
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="rappel" pt="xs">
        <List p="xl">
          <List.Item>
            <Group>
              <IconPlug />{" "}
              <MonserattText>Adaptateur prise japon * 2</MonserattText>
            </Group>
          </List.Item>
          <List.Item>
            <Group>
              <IconMusic />
              <MonserattText>Adaptateur double jack</MonserattText>
            </Group>
          </List.Item>
          <List.Item>
            <Group>
              <IconBatteryAutomotive />
              <MonserattText>Batterie extern * 2</MonserattText>
            </Group>
          </List.Item>
          <List.Item>
            <Group>
              <IconPlaylistOff />
              <MonserattText>Paire de boules quies</MonserattText>
            </Group>
          </List.Item>
          <List.Item>
            <Group>
              <IconBook />
              <MonserattText>
                Livret des formulation importantes au japon (demander son
                chemin, toilette, etc...)
              </MonserattText>
            </Group>
          </List.Item>
        </List>
      </Tabs.Panel>

      <Tabs.Panel value="resto" pt="xs">
        <Accordion defaultValue="customization">
          <Accordion.Item value="customization">
            <Accordion.Control>
              <MonserattText>Vocabulaire</MonserattText>
            </Accordion.Control>
            <Accordion.Panel>
              <List p="xl">
                {vocabulaireList?.map((item, index) => (
                  <List.Item key={`vocabulaire-${index}`}>
                    <Group>
                      {item?.icon ? <item.icon /> : undefined}{" "}
                      <MonserattText>{item.valueFr}: </MonserattText>
                      <BankaiText>{item.valueJap}</BankaiText>
                    </Group>
                  </List.Item>
                ))}
              </List>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="flexibility">
            <Accordion.Control>
              <MonserattText>Coté restaurateur, serveur</MonserattText>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack spacing={0}>
                {restaurateurList?.map((item, index) => (
                  <Box key={`restorateur-${index}`} mb={10}>
                    <Group>
                      {item?.icon ? <item.icon /> : undefined}
                      <Stack spacing={0}>
                        <MonserattText>{item.valueFr}</MonserattText>
                        <BankaiText>{item.valueJap}</BankaiText>
                      </Stack>
                    </Group>
                  </Box>
                ))}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="focus-ring">
            <Accordion.Control>
              <MonserattText>Coté Client</MonserattText>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack spacing={0}>
                {clientList?.map((item, index) => (
                  <Box key={`client-${index}`} mb={10}>
                    <Group>
                      {item?.icon ? <item.icon /> : undefined}
                      <Stack spacing={0}>
                        <MonserattText>{item.valueFr}</MonserattText>
                        <BankaiText>{item.valueJap}</BankaiText>
                      </Stack>
                    </Group>
                  </Box>
                ))}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Tabs.Panel>
    </Tabs>
  );
};

export default ListRappel;
