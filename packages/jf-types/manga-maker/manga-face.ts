import { TSvgElement } from "./svg-element";

export interface TMangaFace {
  head?: TSvgElement;
  leftEye?: TSvgElement;
  rightEye?: TSvgElement;
  nose?: TSvgElement;
  mouth?: TSvgElement;
  hair?: TSvgElement;
}

export type TMangaFaceKeys = keyof TMangaFace;
