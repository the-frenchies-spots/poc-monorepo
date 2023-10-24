import { Accordion, Table } from "@jf/material";
import React from "react";
import MonserattText from "../Text/MonserattText";
import BankaiText from "../Text/BankaiText";

interface JapanSurvieProps {}

const phrases = [
  {
    fr: `Bonjour`,
    jp: `Konnichiwa`,
  },
  {
    fr: `Excusez-moi`,
    jp: `Sumimasen`,
  },
  {
    fr: `Où se trouve _______?`,
    jp: `____ wa doko desuka.`,
  },
  {
    fr: `Combien cela coûte-t-il ?`,
    jp: `Kore wa ikura desuka?`,
  },
  {
    fr: `Parlez-vous anglais ?`,
    jp: `Eigo wo hanase masuka ?`,
  },
  {
    fr: `S'il vous plait, amenez-moi à _____.`,
    jp: `_____ ni tsurete itte kudasai`,
  },
  {
    fr: `Puis-je avoir un plan s'il vous plait ?`,
    jp: `Chizu wo kudasai.`,
  },
  {
    fr: `Puis-je avoir ______?`,
    jp: `_____ wo kudasai.`,
  },
  {
    fr: `Ce train/bus va-t-il à _____?`,
    jp: `Kono densha/bus wa ____ ni ikimasuka?`,
  },
  {
    fr: `Merci.`,
    jp: `Arigatou gozaimasu.`,
  },
];

const phrases2 = [
  {
    fr: "Bonjour",
    jp: "Konnichiwa",
  },
  {
    fr: "Au revoir",
    jp: "Sayounara",
  },
  {
    fr: "Bonjour (le matin)",
    jp: "Ohayou gozaimasu",
  },
  {
    fr: "Bonsoir",
    jp: "Konbanwa",
  },
  {
    fr: "Bonne nuit",
    jp: "Oyasumi",
  },
  {
    fr: "Oui",
    jp: "Hai",
  },
  {
    fr: "Non",
    jp: "Iie",
  },
  {
    fr: "Excusez-moi",
    jp: "Sumimasen",
  },
  {
    fr: "S'il vous plaît",
    jp: "Onegai shimasu",
  },
  {
    fr: "Merci",
    jp: "Arigatou gozaimasu",
  },
  {
    fr: "Merci d'avance",
    jp: "Yoroshiku onegai shimasu",
  },
  {
    fr: "De rien",
    jp: "Dou itashi mashite",
  },
  {
    fr: "Pardon",
    jp: "Gomennasai",
  },
  {
    fr: "Pardon (plus formel)",
    jp: "Moushi wake arimasen",
  },
  {
    fr: "Je comprends",
    jp: "Wakari mashita",
  },
  {
    fr: "Je ne comprends pas",
    jp: "Wakari masen",
  },
  {
    fr: "C'est bon/Pas de problème",
    jp: "Daijoubu desu.",
  },
  {
    fr: "Mon nom est _______.",
    jp: "Watashi no namae wa _____ desu.",
  },
  {
    fr: "Quel est votre nom ?",
    jp: "Anata no onamae wa nandesuka.",
  },
  {
    fr: "M./Mme/Mlle ________",
    jp: "______ san",
  },
  {
    fr: "Comment allez-vous ?",
    jp: "Ogenki desuka?",
  },
  {
    fr: "Ca va/Je vais bien",
    jp: "Genki desu",
  },
  {
    fr: "Ravi(e) de vous rencontrer.",
    jp: "Hajime mashite.",
  },
  {
    fr: "Zéro, un, deux, trois, quatre",
    jp: "Zero, ichi, ni, san, yon",
  },
  {
    fr: "Cinq, six, sept, huit, neuf, dix",
    jp: "Go, roku, nana, hachi, kyuu, jyuu",
  },
  {
    fr: "Parlez-vous anglais ?",
    jp: "Eigo wo hanase masuka?",
  },
  {
    fr: "Je ne comprends pas le japonais.",
    jp: "Nihongo ga wakari masen.",
  },
  {
    fr: "Pouvez-vous répéter s'il vous plaît ?",
    jp: "Mou ichido onegai shimasu.",
  },
  {
    fr: "Pouvez-vous parler plus lentement s'il vous plaît ?",
    jp: "Mou sukoshi yukkuri onegaishimasu.",
  },
  // ... Ajoutez d'autres objets si nécessaire
];

const phrases3 = [
  {
    fr: "Je voudrais aller ici.",
    jp: "Koko ni ikitai desu",
  },
  {
    fr: "Quel endroit pouvez-vous me conseiller ?",
    jp: "Osusume no basho wa doko desuka",
  },
  {
    fr: "S'il vous plait, amenez-moi à _____.",
    jp: "____ ni tsurete itte kudasai",
  },
  {
    fr: "Comment me rendre à ____?",
    jp: "____ ni wa dou yatte ikemasuka",
  },
  {
    fr: "Tournez à gauche/droite",
    jp: "Hidari/migi ni magaru",
  },
  {
    fr: "Tout droit",
    jp: "Massugu",
  },
  {
    fr: "Où est/sont _______?",
    jp: "____ wa doko desuka",
  },
  {
    fr: "Toilettes",
    jp: "Toire",
  },
  {
    fr: "Konbini (commerce de proximité)",
    jp: "Konbini",
  },
  {
    fr: "Gare",
    jp: "Eki",
  },
  {
    fr: "Arrêt de bus",
    jp: "Basu tei",
  },
  {
    fr: "Aéroport",
    jp: "Kuukou",
  },
  {
    fr: "Hôpital",
    jp: "Byouin",
  },
  {
    fr: "Ambassade",
    jp: "Taishikan",
  },
  {
    fr: "Poste de police",
    jp: "Kouban",
  },
  {
    fr: "Banque",
    jp: "Ginkou",
  },
  {
    fr: "Combien de temps cela prend-il d'aller là ? / Combien cela coûte-t-il d'aller là ?",
    jp: "Dore gurai kakari masuka",
  },
  {
    fr: "Peut-on s'y rendre à pied ?",
    jp: "Aruite ikemasuka",
  },
  {
    fr: "Est-ce près d'ici ?",
    jp: "Koko kara chikai desuka",
  },
  {
    fr: "Ce train/bus va-t-il à ____?",
    jp: "Kono densha/bus wa _____ ni ikimasuka?",
  },
  {
    fr: "Puis-je avoir un plan s'il vous plait ?",
    jp: "Chizu wo kudasai",
  },
  {
    fr: "Réservation",
    jp: "Yoyaku",
  },
  {
    fr: "Pouvez-vous prendre une photo pour moi s'il vous plait ?",
    jp: "Shashin wo totte morae masuka",
  },
];

const phrases4 = [
  {
    fr: "Boutique",
    jp: "Mise",
  },
  {
    fr: "Argent",
    jp: "Okane",
  },
  {
    fr: "Je voudrais ceci.",
    jp: "Kore ga hoshii desu",
  },
  {
    fr: "Je voudrais ____.",
    jp: "____ ga hoshii desu",
  },
  {
    fr: "Avez-vous ____?",
    jp: "____ wa ari masuka",
  },
  {
    fr: "Combien cela coûte-t-il ?",
    jp: "Kore wa ikura desuka",
  },
  {
    fr: "Bon marché",
    jp: "Yasui",
  },
  {
    fr: "Cher",
    jp: "Takai",
  },
  {
    fr: "Gratuit",
    jp: "Muryou",
  },
  {
    fr: "Puis-je payer avec ma carte bancaire ?",
    jp: "Kaado de harae masuka",
  },
  {
    fr: "Vêtements",
    jp: "Youfuku",
  },
  {
    fr: "Chaussures",
    jp: "Kutsu",
  },
  {
    fr: "Appareils électroniques",
    jp: "Denshi kiki",
  },
  {
    fr: "Souvenirs",
    jp: "Omiyage",
  },
  {
    fr: "Produits détaxés",
    jp: "Menzei hin",
  },
  {
    fr: "Quels produits me conseillez-vous ?",
    jp: "Osusume no shouhin wa nandesuka",
  },
  {
    fr: "Jusque quelle heure ouvrez-vous ?",
    jp: "Itsu made eigyou shite masuka",
  },
  {
    fr: "Puis-je avoir un reçu s'il vous plait ?",
    jp: "Ryoushuu sho wo kudasai",
  },
  {
    fr: "Où puis-je changer ma monnaie ?",
    jp: "Ryougae wa doko de dekimasuka",
  },
];

const phrases5 = [
  {
    fr: "Restaurant",
    jp: "Resutoran",
  },
  {
    fr: "Où trouver un bon restaurant ?",
    jp: "Ii resutoran wa doko desuka",
  },
  {
    fr: "Nourriture",
    jp: "Tabemono",
  },
  {
    fr: "Boisson",
    jp: "Nomimono",
  },
  {
    fr: "Viande",
    jp: "Niku",
  },
  {
    fr: "Riz",
    jp: "Gohan",
  },
  {
    fr: "Nouilles",
    jp: "Men",
  },
  {
    fr: "Légumes",
    jp: "Yasai",
  },
  {
    fr: "Eau",
    jp: "(O) mizu",
  },
  {
    fr: "Baquettes",
    jp: "(O) hashi",
  },
  {
    fr: "Puis-je voir ceci ?",
    jp: "Kore wo kudasai",
  },
  {
    fr: "(se dit avant le repas)",
    jp: "Itadakimasu",
  },
  {
    fr: "(se dit après le repas)",
    jp: "Gochisousamadeshita",
  },
  {
    fr: "C'est délicieux !",
    jp: "Kore wa oishii desu",
  },
  {
    fr: "Avez-vous un menu végétarien ?",
    jp: "Bejitarian you no menyuu wa arimasuka",
  },
  {
    fr: "L'addition s'il vous plaît",
    jp: "Okaikei wo onegai shimasu",
  },
];

const sections = [
  {
    id: "first",
    label: "Top 10 des phrases utiles en Japonais",
    value: phrases,
  },

  {
    id: "second",
    label: "Les bases / salutations",
    value: phrases2,
  },

  {
    id: "three",
    label: "Demander son chemin / Voyager",
    value: phrases3,
  },

  {
    id: "fourth",
    label: "Shopping",
    value: phrases4,
  },

  {
    id: "five",
    label: "Se restaurer",
    value: phrases5,
  },
];

const JapanSurvie = (props: JapanSurvieProps) => {
  return (
    <Accordion>
      {sections?.map((item, index) => (
        <Accordion.Item value={item.id} key={`item-y-o-ippp${index}`}>
          <Accordion.Control>{item.label}</Accordion.Control>
          <Accordion.Panel>
            <Table>
              <thead>
                <tr>
                  <th>
                    <MonserattText>Phrase</MonserattText>
                  </th>
                  <th>
                    <MonserattText>Romaji</MonserattText>
                  </th>
                </tr>
              </thead>
              <tbody>
                {item?.value?.map((listItem, idx) => (
                  <tr key={`tr-hh-yhugluhyggfhyj-u-${idx}`}>
                    <td>
                      <MonserattText>{listItem.fr}</MonserattText>
                    </td>
                    <td>
                      <BankaiText>{listItem.jp}</BankaiText>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default JapanSurvie;
