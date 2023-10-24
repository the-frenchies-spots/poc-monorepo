import React from "react";

import {
  Icon123,
  IconBatteryAutomotive,
  IconBike,
  IconBook,
  IconBook2,
  IconChefHat,
  IconCoinYen,
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
  Image,
  List,
  Stack,
  Table,
  Tabs,
  Text,
} from "@jf/material";

import OneYen from "../../../public/images/1Yen.png";
import FiveYen from "../../../public/images/5Yen.png";
import TenYen from "../../../public/images/10Yen.png";
import FiveTenYen from "../../../public/images/50Yen.png";
import UndredYen from "../../../public/images/100Yen.png";
import FiveUndredYen from "../../../public/images/500Yen.png";
import ThousandYen from "../../../public/images/1000Yen.png";
import ThwoThousandYen from "../../../public/images/2000Yen.png";
import FiveThousandYen from "../../../public/images/5000Yen.png";
import TenThousandYen from "../../../public/images/10000Yen.png";

import { fonts } from "../../utils/fonts";
import BankaiText from "../Text/BankaiText";
import MonserattText from "../Text/MonserattText";
import { countList } from "../../assets/count/count";
import ByceCycleList from "../ByceCycleList/ByceCycleList";
import { byceCycleStation } from "../../utils/bike-cycle";
import JapanSurvie from "../JapanSurvie/JapanSurvie";

type TArgent = {
  source: string;
  frenchLabel: string;
  japLabel: string;
};

const ArgentList: TArgent[] = [
  { source: OneYen.src, frenchLabel: "0,0064€", japLabel: "1¥" },
  { source: FiveYen.src, frenchLabel: "0,032€", japLabel: "5¥" },
  { source: TenYen.src, frenchLabel: "0,064€", japLabel: "10¥" },
  { source: FiveTenYen.src, frenchLabel: "0,32€", japLabel: "50¥" },
  { source: UndredYen.src, frenchLabel: "0,64€", japLabel: "100¥" },
  { source: FiveUndredYen.src, frenchLabel: "3,20€", japLabel: "500¥" },
  { source: ThousandYen.src, frenchLabel: "6,4€", japLabel: "1 000¥" },
  { source: ThwoThousandYen.src, frenchLabel: "12,8€", japLabel: "2 000¥" },
  { source: FiveThousandYen.src, frenchLabel: "32€", japLabel: "5 000¥" },
  { source: TenThousandYen.src, frenchLabel: "64€", japLabel: "10 000¥" },
];

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

export const ListRappel = React.memo(function ListRappelCompo() {
  return (
    <Tabs defaultValue="memo">
      <Tabs.List>
        <Tabs.Tab value="resto" icon={<IconChefHat />}>
          <MonserattText>Restaurant</MonserattText>
        </Tabs.Tab>
        <Tabs.Tab value="argent" icon={<IconCoinYen />}>
          <MonserattText>Argent</MonserattText>
        </Tabs.Tab>
        <Tabs.Tab value="count" icon={<Icon123 />}>
          <MonserattText>Comptés</MonserattText>
        </Tabs.Tab>
        <Tabs.Tab value="velo" icon={<IconBike />}>
          <MonserattText>Vélos</MonserattText>
        </Tabs.Tab>
        <Tabs.Tab value="memo" icon={<IconBook2 />}>
          <MonserattText>Mémo</MonserattText>
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="memo" pt="xs">
        <JapanSurvie />
      </Tabs.Panel>

      <Tabs.Panel value="velo" pt="xs">
        <ByceCycleList row={byceCycleStation} />
      </Tabs.Panel>

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
                  <List.Item key={`vocabulaire-a-27-${index}`}>
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
                  <Box key={`restorateur-a-4-${index}`} mb={10}>
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
                  <Box key={`client-5-8-9${index}`} mb={10}>
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

      <Tabs.Panel value="argent" pt="xs">
        <Stack>
          {ArgentList?.map((argentItem, index) => (
            <Group key={`group-55-69ml-l-${index}`} grow>
              <Box>
                <Image src={argentItem.source} alt={argentItem.japLabel} />
              </Box>
              <Stack justify="center" align="center">
                <MonserattText>{argentItem.frenchLabel}</MonserattText>
                <BankaiText>{argentItem.japLabel}</BankaiText>
              </Stack>
            </Group>
          ))}
        </Stack>
      </Tabs.Panel>

      <Tabs.Panel value="count" pt="xs">
        <Accordion defaultValue="Compter par défaut">
          <>
            {countList?.map((countItem, index) => {
              return (
                <>
                  <Accordion.Item
                    value={countItem.label}
                    key={`Accordion-y_5rr${index}`}
                  >
                    <Accordion.Control>
                      <MonserattText>{countItem.label}</MonserattText>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Table>
                        <thead>
                          <tr>
                            <th>
                              <MonserattText>Kanji</MonserattText>
                            </th>
                            <th>
                              <MonserattText>
                                {index === 0 ? "chiffres" : "Kana"}
                              </MonserattText>
                            </th>
                            <th>
                              <MonserattText>Rōmaji</MonserattText>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {countItem?.value?.map((countItemItem, idx) => (
                            <tr key={`tr-hh-y-u-${idx}`}>
                              <td>
                                {index !== 0 && (
                                  <BankaiText>{idx + 1}</BankaiText>
                                )}

                                {countItemItem.Kanji}
                              </td>
                              <td>
                                <MonserattText>
                                  {countItemItem.Kana}
                                </MonserattText>
                              </td>
                              <td>
                                <BankaiText>{countItemItem.Rōmaji}</BankaiText>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Accordion.Panel>
                  </Accordion.Item>
                  {index === 0 && (
                    <>
                      <Accordion.Item value="11-to-99">
                        <Accordion.Control>
                          <MonserattText>De 11 à 99</MonserattText>
                          <Accordion.Panel>
                            <MonserattText>
                              Pour constituer les nombres de 11 à 99, il suffit
                              simplement de combiner les chiffres de 1 à 9 ou
                              bien un chiffre et le nombre 10. Par exemple, 11
                              est la combinaison du nombre 10 et du chiffre 1
                              soit 十一 (jū ichi).
                              <br />
                              十二 (<b>jūni</b>) = 12
                              <br />
                              二十 (<b>nijū</b>) = 20
                              <br />
                              三十 (<b>sanjū</b>) = 30
                              <br />
                              五十九 (<b>gojū kyū</b>) = 59
                            </MonserattText>
                          </Accordion.Panel>
                        </Accordion.Control>
                      </Accordion.Item>
                      <Accordion.Item value="100-to-audela">
                        <Accordion.Control>
                          <MonserattText>100 et au-delà</MonserattText>
                          <Accordion.Panel>
                            <MonserattText>
                              百(<b>hyaku</b>) = 100
                              <br />
                              千(<b>sen</b>) = 1000
                              <br />
                              万(<b>man</b>) = 10 000
                              <br />
                              十万(<b>jūman</b>) = 100 000
                              <br />
                              百万(<b>hyakuman</b>) = 1 million
                              <br />
                              千万 (<b>senman</b>) = 10 millions
                              <br />
                              Certains kanji sont facilement modifiables (一 se
                              transforme aisément en 十). Afin d’éviter les
                              actes délictueux, les documents officiels,
                              juridiques et financiers portent en supplément des
                              caractères formels appelés daiji "grands
                              caractères". Les caractères daiji se retrouvent
                              également sur les billets de banque. Il est ainsi
                              écrit 壱万円 sur le billet de 10 000 yens !
                            </MonserattText>
                          </Accordion.Panel>
                        </Accordion.Control>
                      </Accordion.Item>

                      <Accordion.Item value="count-in-jap">
                        <Accordion.Control>
                          <MonserattText>
                            Comment compter en japonais
                          </MonserattText>
                          <Accordion.Panel>
                            <MonserattText>
                              Les Japonais utilisent un suffixe particulier
                              placé à la suite du chiffre pour compter des
                              personnes, des animaux, des objets ou exprimer une
                              durée, un âge, ou une fréquence. Ce système de
                              compteurs, également en vigueur en Chine et en
                              Corée, peut paraître déroutant. Dans ce cas,
                              l’apprentissage est la règle d’or ! <br />
                              <br />人 (<b>jin /nin</b>) = Personnes <br />頭 (
                              <b>tō</b>) = Grands animaux <br />羽 (<b>wa</b>) =
                              Oiseaux et lapins <br />匹 (<b>hiki</b>) = Petits
                              animaux (chats, chiens, poissons, insectes…){" "}
                              <br />枚 (<b>mai</b>) = Objets fins et plats
                              (timbres, draps...) <br />台 (<b>dai</b>) = Objets
                              technologiques (voitures, télévision...) <br />本
                              (<b>hon</b>) = Objets longs et cylindriques
                              (crayons, doigts, arbres, parapluie...) <br />個 (
                              <b>ko</b>) = Très petits objets <br />着 (
                              <b>chaku</b>) = Vêtements <br />冊 (<b>satsu</b>)
                              = Objets reliés (livres, dictionnaires, magazines){" "}
                              <br />足 (<b>soku</b>) = Objets portés aux pieds
                              (chaussettes, chaussures...) <br />
                              切れ (<b>kire</b>) = Tranches (de gâteau, de pain,
                              de jambon...) <br />杯 (<b>hai</b>) = Liquides
                              contenus dans des récipients <br />錠 (<b>jō</b>)
                              = Pilules, gélules, médicaments de forme ronde{" "}
                              <br />軒 (<b>ken</b>) = Bâtiments <br />階 (
                              <b>kai</b>) = Étages <br />番 (<b>ban</b>) =
                              Objets numérotés (quais de gare, bus) <br />番 (
                              <b>ban</b>) + 目 (<b>me</b>) = Classement (1er,
                              2ème…) <br />回 (<b>kai</b>) = Fréquence (une
                              fois, deux fois…) <br />年 (<b>nen</b>) = Années{" "}
                              <br />
                              か月 (<b>kagetsu</b>) = Mois <br />
                              週間(<b>shūkan</b>) = Semaines <br />日 (
                              <b>ka / nichi</b>) = Jours <br />
                              時間 (<b>jikan</b>) = Heures <br />分 (
                              <b>fun/pun</b>) = Minutes <br />秒 (<b>byō</b>) =
                              Secondes <br />歳 (<b>sai</b>) = Âge <br />
                              <br />
                              <br />À savoir : en cas de de méconnaissance ou
                              d'oubli, vous pouvez utiliser le suffixeつ (tsu)
                              qui fait office de compteur par défaut !
                            </MonserattText>
                          </Accordion.Panel>
                        </Accordion.Control>
                      </Accordion.Item>
                    </>
                  )}
                </>
              );
            })}
          </>
        </Accordion>
      </Tabs.Panel>
    </Tabs>
  );
});

export default ListRappel;
