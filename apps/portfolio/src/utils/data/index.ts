import { Data } from "./type";

import { dataFr } from "./fr/fr";
import { dataEn } from "./en/en";

interface CVData {
  en: Data;
  fr: Data;
}

export const cvData: CVData = { en: dataEn, fr: dataFr };
