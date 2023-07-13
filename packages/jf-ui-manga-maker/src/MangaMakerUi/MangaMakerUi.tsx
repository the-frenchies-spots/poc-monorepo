import React from "react";

import { Grid } from "@jf/material";

import ToolBar from "../ToolBar/ToolBar";
import MangaViewer from "../MangaViewer/MangaViewer";
import { useStyles } from "./MangaMakerUi.styles";

// ----------------------------------------------------------------

const MangaMakerUi = () => {
  const { classes } = useStyles();
  return (
    <Grid sx={{ height: "100%" }}>
      <Grid.Col xs={9} className={classes.editionContainer}>
        <MangaViewer />
      </Grid.Col>
      <Grid.Col xs={3}>
        <ToolBar />
      </Grid.Col>
    </Grid>
  );
};

export default MangaMakerUi;
