import type { TMangaFaceKeys } from "./manga-face";

export interface TSvgElement {
  id: number;
  name?: string;
  genderType?: "genderless" | "male" | "female";
  typeOf?: TMangaFaceKeys;
  x: number;
  y: number;
  width: number;
  height: number;
  path: string;
}

export type TSvgElementKeys = keyof TSvgElement;
