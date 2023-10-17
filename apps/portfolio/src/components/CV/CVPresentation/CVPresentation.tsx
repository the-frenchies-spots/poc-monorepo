import { Stack, Text } from "@jf/material";
import React from "react";
import CVPicture from "../CVPicture/CVPicture";

interface CVPresentationProps {
  firstName: string;
  lastName: string;
  title: string;
}

const CVPresentation = ({
  firstName,
  lastName,
  title,
}: CVPresentationProps) => {
  return (
    <Stack
      h={450}
      sx={{ borderBottom: "1px solid white" }}
      p="md"
      align="center"
      justify="space-around"
    >
      <CVPicture w={200} h={200} />
      <Text ff="Montserrat" fz={18} fs="normal" fw={400} c="white" ta="center">
        {firstName} <br />
        {lastName}
      </Text>
      <Text ff="Montserrat" fz={18} fs="normal" fw={400} c="white" ta="center">
        {title}
      </Text>
    </Stack>
  );
};

export default CVPresentation;
