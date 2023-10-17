import React, { ReactNode } from "react";

import { Box, Grid, GridProps } from "@jf/material";

interface Col1Props {
  children: ReactNode;
}

const Col1 = ({ children }: Col1Props) => {
  return (
    <Grid.Col xs={12} md={4} h="100%">
      <Box sx={{ border: "1px solid black" }} h="100%" w="100%" bg="#323232">
        {children}
      </Box>
    </Grid.Col>
  );
};

interface Col2Props {
  children: ReactNode;
}

const Col2 = ({ children }: Col2Props) => {
  return (
    <Grid.Col xs={12} md={8} h="100%">
      <Box sx={{ border: "1px solid black" }} h="100%" w="100%">
        {children}
      </Box>
    </Grid.Col>
  );
};

interface CVLayoutProps extends GridProps {}

export const CVLayout = ({ children, ...other }: CVLayoutProps) => {
  return <Grid {...other}>{children}</Grid>;
};

CVLayout.Col1 = Col1;
CVLayout.Col2 = Col2;

CVLayout.displayName = "@jf-portfolio/CVLayout";
