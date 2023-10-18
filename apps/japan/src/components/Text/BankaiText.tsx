import { Text, TextProps } from "@jf/material";
import React from "react";
import { fonts } from "./../../utils/fonts";

const BankaiText = ({ sx, ...props }: TextProps) => {
  return (
    <Text
      sx={{
        ...fonts["Montserrat-Regular"].style,
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "bold",
        ...sx,
      }}
      {...props}
    />
  );
};

export default BankaiText;
