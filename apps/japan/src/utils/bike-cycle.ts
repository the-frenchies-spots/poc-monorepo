export interface IDocmoCycle {
  label: string;
  link: string;
}

export const docomoCycle: IDocmoCycle[] = [
  {
    label: "Tokyo",
    link: "https://www.google.com/maps/d/viewer?mid=1L2l1EnQJhCNlm_Xxkp9RTjIj68Q&hl=en&femb=1",
  },
  {
    label: "Osaka",
    link: "https://www.google.com/maps/d/viewer?mid=1m-q1JvpxPyniClnJSoDrwW7OtQVEtxil&hl=en&femb=1&ll=34.687139858368674%2C135.48942344711307&z=12",
  },
  {
    label: "Hiroshima",
    link: "https://www.google.com/maps/d/viewer?mid=1oeVRN3d9Du9TNXzVVHLgZKy3PCI&femb=1&ll=34.37270131825329%2C132.43600210704037&z=12",
  },
  {
    label: "Nara",
    link: "https://www.google.com/maps/d/viewer?mid=1r5s5HllrLVSiOPZQiCqa8p23huBmqQUE&hl=en&femb=1&ll=34.67094874703526%2C135.81433749999997&z=14",
  },
  {
    label: "Autre",
    link: "https://docomo-cycle.jp/?lang=en",
  },
];

export const RentingCycle: IDocmoCycle[] = [
  {
    label: "Kyoto",
    link: "https://www.google.com/maps/d/viewer?mid=1f5A9dXDxc1Lz7d_K7rSOEbmk_r0&hl=en&femb=1&ll=34.935874519692135%2C135.69980999999999&z=11",
  },
];

export interface IBikeCycleJapan {
  label: string;
  value: IDocmoCycle[];
}

export const byceCycleStation: IBikeCycleJapan[] = [
  { label: "Docomo-Cycle", value: docomoCycle },
  { label: "Renting-Cycle", value: RentingCycle },
];
