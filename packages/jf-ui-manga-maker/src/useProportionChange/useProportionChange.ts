import React, { useCallback } from "react";

import { TMangaFaceKeys } from "@jf/types";

import useMangaMakerUi from "../useMangaMakerUi/useMangaMakerUi";

const useProportionChange = () => {
  const { onMangaFaceChange } = useMangaMakerUi();

  const handleIncrementZoom = useCallback(
    (key: TMangaFaceKeys, zoomIncrement: number) => {
      if (typeof onMangaFaceChange === "function") {
        onMangaFaceChange((current) => {
          let updatedMangaFace = { ...current };
          const currentSvg = updatedMangaFace[key];

          if (!currentSvg) return current;

          const { width, height } = currentSvg;
          const mean = (width + height) / 2;

          return {
            ...updatedMangaFace,
            [key]: {
              ...updatedMangaFace[key],
              width: width + Math.abs(mean - zoomIncrement),
              height: height + Math.abs(mean - zoomIncrement),
            },
          };
        });
      }
    },
    [onMangaFaceChange]
  );

  const handleDecrementZoom = useCallback(
    (key: TMangaFaceKeys, zoomIncrement: number) => {
      if (typeof onMangaFaceChange === "function") {
        onMangaFaceChange((current) => {
          let updatedMangaFace = { ...current };
          const currentSvg = updatedMangaFace[key];

          if (!currentSvg) return current;

          const { width, height } = currentSvg;
          const mean = (width + height) / 2;

          return {
            ...updatedMangaFace,
            [key]: {
              ...updatedMangaFace[key],
              width: width - Math.abs(mean - zoomIncrement),
              height: height - Math.abs(mean - zoomIncrement),
            },
          };
        });
      }
    },
    [onMangaFaceChange]
  );

  return {
    onIncrementZoom: handleIncrementZoom,
    onDecrementZoom: handleDecrementZoom,
  };
};

export default useProportionChange;
