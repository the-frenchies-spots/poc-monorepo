import React, { useState } from "react";

import { TMangaFace } from "@jf/types";
import { Box } from "@jf/material";

import { MangaMakerUiProvider } from "../MangaMakerUi.provider";
import MangaMakerUi from "../MangaMakerUi/MangaMakerUi";

// ----------------------------------------------------------------

interface MangaMakerWrapperProps {
  row: TMangaFace;
}

export const MangaMakerWrapper = (props: MangaMakerWrapperProps) => {
  const { row } = props;

  const [mangaFace, setMangaFace] = useState<TMangaFace>(row);
  const [pageSize, setSize] = useState<number>(0);

  return (
    <MangaMakerUiProvider
      pageSize={pageSize}
      mangaFace={mangaFace}
      onPageSizeChange={setSize}
      onMangaFaceChange={setMangaFace}
    >
      <Box sx={{ height: "100vh" }}>
        <MangaMakerUi />
      </Box>
    </MangaMakerUiProvider>
  );
};
