import { IconTorii } from "@jf/icons";

interface TCalandar {
  id: string;
  date: Date;
  list: string[]; // id => list :  japanLocationIds
  events?: { label: string; icon: any }[];
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
  {
    id: "21110d27-4898-4795-90a0-03a50a18f611",
    date: new Date("2023-11-14T00:00:00.000Z"),
    list: [],
    events: [{ label: "Shichi-go-san", icon: IconTorii }],
  },
  {
    id: "21110d27-4898-4795-90a0-03a50a18f875",
    date: new Date("2023-11-15T00:00:00.000Z"),
    list: [],
    events: [{ label: "Shichi-go-san", icon: IconTorii }],
  },

  {
    id: "21110d27-4898-4795-90a0-03a50a18f843",
    date: new Date("2023-11-01T00:00:00.000Z"),
    list: ["60a25358-6a4b-4127-8325-afb1e25617aa"],
  },

  {
    id: "80b9df15-aa81-49b0-8034-074118cf23ca",
    date: new Date("2023-11-02T00:00:00.000Z"),
    list: ["60a25358-6a4b-4127-8325-afb1e25617aa"],
  },

  {
    id: "e8a65155-42f4-4f58-b8b9-067c4a3f5022",
    date: new Date("2023-11-03T00:00:00.000Z"),
    list: ["60a25358-6a4b-4127-8325-afb1e25617aa"],
  },

  {
    id: "300b2011-3393-497e-a9fa-d3c0cecdfc41",
    date: new Date("2023-11-04T00:00:00.000Z"),
    list: ["60a25358-6a4b-4127-8325-afb1e25617aa"],
  },

  {
    id: "4b260a5f-4895-486e-93fc-fffd3a584537",
    date: new Date("2023-11-05T00:00:00.000Z"),
    list: ["60a25358-6a4b-4127-8325-afb1e25617aa"],
  },

  {
    id: "31041303-45bb-4c36-9849-f3c3feba5044",
    date: new Date("2023-11-06T00:00:00.000Z"),
    list: ["60a25358-6a4b-4127-8325-afb1e25617aa"],
  },

  {
    id: "c0ffed0e-db6d-4d1c-b3da-97bf5b15fb856",
    date: new Date("2023-11-07T00:00:00.000Z"),
    list: ["60a25358-6a4b-4127-8325-afb1e25617aa"],
  },

  {
    id: "c0ffed0e-db6d-4d1c-b3da-97bf5b15fbc6",
    date: new Date("2023-11-08T00:00:00.000Z"),
    list: ["60a25358-6a4b-4127-8325-afb1e25617aa"],
  },

  {
    id: "2ca80076-1b3e-4174-b733-19e0e71ce514",
    date: new Date("2023-11-09T00:00:00.000Z"),
    list: ["60a25358-6a4b-4127-8325-afb1e25617aa"],
  },

  {
    id: "a8d42f06-c39c-465e-b41c-2d53d9b02709",
    date: new Date("2023-11-10T00:00:00.000Z"),
    list: ["60a25358-6a4b-4127-8325-afb1e25617aa"],
  },

  {
    id: "3276e323-e6d5-4158-8d52-d27590f10d48",
    date: new Date("2023-10-31T00:00:00.000Z"),
    list: ["8d0e9d66-3cb5-4cf3-9172-6aa336de740a"],
  },

  {
    id: "da06b1f2-85c0-4c5b-aa09-a83b4c5314dd",
    date: new Date("2023-11-01T00:00:00.000Z"),
    list: ["8d0e9d66-3cb5-4cf3-9172-6aa336de740a"],
  },

  {
    id: "f75b4214-cca7-4b8b-a798-8bd0cf4d1607",
    date: new Date("2023-11-07T00:00:00.000Z"),
    list: ["2bfa5797-3388-4b94-ba9e-e3ee8f749feb"],
  },
];
