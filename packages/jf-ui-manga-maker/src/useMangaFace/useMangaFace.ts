import { useCallback } from "react";

import { TMangaFace, TSvgElement, TMangaFaceKeys } from "@jf/types";

import useMangaMakerUi from "./../useMangaMakerUi/useMangaMakerUi";

//----------------------------------------------------------------

const useMangaFace = () => {
  const { mangaFace, onMangaFaceChange } = useMangaMakerUi();

  const handleChange = (newMangaFace: TMangaFace) => {
    if (typeof onMangaFaceChange === "function") {
      onMangaFaceChange(newMangaFace);
    }
  };

  const handleChangeOne = useCallback(
    (key: TMangaFaceKeys, svgElement: TSvgElement | undefined) => {
      handleChange({ ...mangaFace, [key]: svgElement });
      if (typeof onMangaFaceChange === "function") {
        onMangaFaceChange((current) => ({ ...current, [key]: svgElement }));
      }
    },
    [mangaFace]
  );

  const handleValuesChange = useCallback(
    (key: TMangaFaceKeys, fieldName: string, value: any) => {
      if (typeof onMangaFaceChange === "function") {
        onMangaFaceChange((current) => {
          let updateMangaFace = { ...current };
          return {
            ...updateMangaFace,
            [key]: { ...updateMangaFace[key], [fieldName]: value },
          };
        });
      }
    },
    [mangaFace]
  );

  return {
    mangaFace,
    onChange: handleChange,
    onChangeOne: handleChangeOne,
    onValuesChange: handleValuesChange,
  };
};

export default useMangaFace;
