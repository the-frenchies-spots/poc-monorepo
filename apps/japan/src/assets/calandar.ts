interface TCalandar {
  id: string;
  date: Date;
  list: string[]; // id => list :  japanLocationIds
}

export const calandar: TCalandar[] = [
  {
    id: "65ead544-d65d-4e48-8147-996dec1b0e9a",
    date: new Date("2023-11-21T00:00:00.000Z"),
    list: ["924d0c86-c526-431e-8a15-13474206da59"],
  },
  {
    id: "3236f0f3-0be2-4e13-8a08-28746c0e0780",
    date: new Date("2023-10-25T00:00:00.000Z"),
    list: ["df8080d2-c5c9-4e49-aa59-e4b33e4dcd4f"],
  },
  {
    id: "38cc6bd2-0452-4a89-80c8-4975f76b6e68",
    date: new Date("2023-11-21T00:00:00.000Z"),
    list: ["d2b016e4-cc29-4db0-8c25-2178d8c17193"],
  },
  {
    id: "7b0b4990-8e2f-4d1e-a18b-5ed6e6fd3e3f",
    date: new Date("2023-10-26T00:00:00.000Z"),
    list: ["1f27d63c-3174-4b6a-9176-137ebc3fd4c7"],
  },
  {
    id: "c0e76958-aed6-4efa-9489-5c4a0776320b",
    date: new Date("2023-11-21T00:00:00.000Z"),
    list: ["0d9f55d9-8bfd-4ed3-aa85-53fa275561ff"],
  },
  {
    id: "21110d27-4898-4795-90a0-03a50a18f662",
    date: new Date("2023-11-21T00:00:00.000Z"),
    list: ["7663d7b0-07ad-4192-9b06-46495a9bcda2"],
  },
];
