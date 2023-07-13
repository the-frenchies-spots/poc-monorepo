import React, { PropsWithChildren } from "react";
import {
  MangaMakerUiContext,
  MangaMakerUiContextProps,
} from "./MangaMakerUi.context";

// ----------------------------------------------------------------

interface MangaMakerUiProviderProps
  extends PropsWithChildren,
    MangaMakerUiContextProps {}

export const MangaMakerUiProvider = (props: MangaMakerUiProviderProps) => {
  const { children, mangaFace, pageSize, onMangaFaceChange, onPageSizeChange } =
    props;

  return (
    <MangaMakerUiContext.Provider
      value={{
        mangaFace,
        onMangaFaceChange,
        onPageSizeChange,
        pageSize,
      }}
    >
      {children}
    </MangaMakerUiContext.Provider>
  );
};

MangaMakerUiProvider.displayName = "@jf/ui-manga-maker/MangaMakerUiProvider";
