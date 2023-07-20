import { activity } from "./activity";
import { sanctuary } from "./sanctuary";
import { park } from "./park";
import { neighborhood } from "./neighborhood";
import { restaurant } from "./restaurant";
import { building } from "./building";
import { street } from "./street";
import { hotel } from "./hotel";
import { onsen } from "./onsen";
import { plane } from "./plane";
import { monument } from "./monument";

interface TLinks {
  label: string;
  link: string;
}
export interface JapanLocation {
  id: string;
  name: string;
  description: string;
  city: string;
  tag: string;
  picture: string;
  links: TLinks[];
  address: string;
  price?: string;
  lat?: number;
  lng?: number;
}

export const japanData: JapanLocation[] = [
  ...activity,
  ...park,
  ...neighborhood,
  ...sanctuary,
  ...restaurant,
  ...street,
  ...building,
  ...hotel,
  ...onsen,
  ...plane,
  ...monument,
];
