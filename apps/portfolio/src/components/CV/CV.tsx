import React from "react";
import { CVLayout } from "../Layout/CVLayout";
import { Data } from "@/utils/data/type";
import CVPresentation from "./CVPresentation/CVPresentation";
import { Container } from "@jf/material";
import CVContact from "./CVContact/CVContact";

interface CVProps {
  data: Data;
}

export const CV = ({ data }: CVProps) => {
  const { firstName, lastName, title, contact, job, skill, training } = data;

  return (
    <Container size="md" h="fit-content">
      <CVLayout h="fit-content" m={0} p={0}>
        <CVLayout.Col1>
          <CVPresentation
            firstName={firstName}
            lastName={lastName}
            title={title}
          />
          <CVContact contact={contact} />
        </CVLayout.Col1>
        <CVLayout.Col2>yo</CVLayout.Col2>
      </CVLayout>
    </Container>
  );
};
