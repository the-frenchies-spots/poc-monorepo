import { JapanLocation } from "./japanData";

export const island: JapanLocation[] = [
  {
    id: "Je m’en charge pas besoin de remplir ce champ",
    name: "OKUNOSHIMA 🐇 L'île aux lapins",
    description: ` En train -- environ 1h15 en Shinkansen Sanyo puis changement à Mihara pour un train local ligne Kure jusqu'à la gare de Tadanoumi (4.000¥ (~25,32€) ou gratuit avec le Japan Rail Pass)
    En bus -- environ 90 minutes avec le Highway Bus Kaguyahime-go (1,180¥ (~7,47€)) jusqu'à la gare de Takehara (accessible avec le pass Visit Hiroshima Tourist Pass, version Wide), puis changement pour un train local de la ligne JR Kure (en direction de Mihara, environ 11 minutes 200¥ (~1,27€)), jusqu'à la gare de Tadanoumi
    Puis en bateau -- environ 15 minutes de liaison en ferry entre Okunoshima et le port de Tadanoumi (310¥ (~1,96€) par trajet)
    Navette gratuite entre le port et l'Hôtel Okunoshima Kyukamura
    `,
    city: "Takahera",
    tag: "island",
    picture:
      "https://www.kanpai.fr/sites/default/files/styles/content_lg/public/uploads/2017/05/okunoshima-4.jpg",
    links: [
      {
        label: "Site de l'île aux lapins",
        link: "https://www.kanpai.fr/okunoshima",
      },
    ],
    address: `8X7R+63 Takehara, Préfecture de Hiroshima, Japon`,
    lat: 34.307812,
    lng: 132.998125,
  },
];
