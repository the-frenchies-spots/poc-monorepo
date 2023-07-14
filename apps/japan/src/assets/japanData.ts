import { activity } from "./activity";
import { sanctuary } from "./sanctuary";
import { park } from "./park";
import { neighborhood } from "./neighborhood";
import { restaurant } from "./restaurant";
import { building } from "./building";
import { street } from "./street";

export interface JapanLocation {
  name: string;
  description: string;
  city: string;
  tag: string;
  picture: string;
  links: string[];
  address: string;
  price?: number;
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
];
