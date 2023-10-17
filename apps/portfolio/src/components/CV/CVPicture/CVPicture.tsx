import React from "react";

import { Box, Image, type BoxProps } from "@jf/material";
import picture from "./photo.png";

interface CVPictureProps extends BoxProps {}

const CVPicture = ({ ...other }: CVPictureProps) => {
  return (
    <Box {...other}>
      <Image src={picture.src} alt="JF-CV" />
    </Box>
  );
};

export default CVPicture;
