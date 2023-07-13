import { TMangaFace } from "@jf/types";
import { createContext } from "react";

//----------------------------------------------------------------

export interface MangaMakerUiContextProps {
  mangaFace: TMangaFace;
  onMangaFaceChange: React.Dispatch<React.SetStateAction<TMangaFace>> | null;
  onPageSizeChange: React.Dispatch<React.SetStateAction<number>> | null;
  pageSize: number;
}

const defaultContext: MangaMakerUiContextProps = {
  mangaFace: {},
  pageSize: 0,
  onMangaFaceChange: null,
  onPageSizeChange: null,
};

export const MangaMakerUiContext =
  createContext<MangaMakerUiContextProps>(defaultContext);

MangaMakerUiContext.displayName =
  "@dots/material-MangaMakerUi/MangaMakerUiContext";
