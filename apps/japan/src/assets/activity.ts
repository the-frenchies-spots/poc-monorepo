import { JapanLocation } from "./japanData";

export const activity: JapanLocation[] = [
  {
    id: "8d0e9d66-3cb5-4cf3-9172-6aa336de740a",
    name: "UNIVERSAL STUDIO",
    description:
      "Nintendo World, Hollywood, NewYork, Minion Park, San Francisco, Jurassic Park, Water World, Amity Village, The Wizarding World of Harry Potter, et Universal Wonderland.",
    city: "Osaka",
    tag: "activity",
    picture:
      "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/others_3/nintendo_direct_3/H2x1_SuperMarioWorldDirect2020.jpg",
    links: [
      {
        label: "reservation des billets",
        link: "https://keikaku.fr/universal-studios-osaka",
      },
    ],
    price: "99 €",
    address: `2 Chome-1-33 Sakurajima, Konohana Ward, Osaka, 554-0031, Japon`,
    lat: 34.669383,
    lng: 135.433612,
  },
  {
    id: "1943194a-1e27-4105-9395-30b8339f116d",
    name: "Musée Ghibli",
    description:
      "Le musée Ghibli est un musée commercial consacré aux réalisations du studio Ghibli. Il est situé au Japon, sur le terrain du parc d'Inokashira à Mitaka dans la banlieue de Tokyo. Il est accessible par train depuis le centre de Tokyo et nécessite une réservation à l'avance pour pouvoir le visiter",
    city: "Tokyo",
    tag: "activity",
    price: "1,000¥ | 7,69€",
    picture:
      "https://res.cloudinary.com/db00tntyg/image/upload/v1689417135/JAPAN/gukjkr3mn05wsyu1soak.png",
    links: [
      {
        label: "reservation des billets",
        link: "https://www.ghibli-museum.jp/en/tickets/",
      },
    ],
    address: `Musée Ghibli, 1 Chome-1-83 Shimorenjaku, Mitaka, Tokyo 181-0013, Japon`,
    lat: 35.696171,
    lng: 139.569969,
  },

  // {
  //   id: "",
  //   name: "",
  //   description: "",
  //   city: "Tokyo",
  //   tag: "activity",
  //   price: "",
  //   picture: "",
  //   links: [],
  //   address: ``,
  //   lat: 0,
  //   lng: 0,
  // },
];
